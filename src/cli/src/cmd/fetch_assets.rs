use anyhow::{bail, Context};
use aws_sdk_s3::{Client, Config, Credentials, Endpoint, Region};
use chrono::{DateTime, TimeZone, Utc};
use clap::Args;
use log::info;
use std::{collections::HashMap, fs::File, io::Write, path::Path, process::ExitCode};
use tokio_stream::StreamExt;
use walkdir::WalkDir;

/// Fetch game bundles and tokens from remote S3 bucket
///
/// An admin cli subcommand that allows us to pull in data that would pollute
/// the repo. Game bundles are only downloaded if the remote timestamp is more
/// recent than the local timestamp. This command does not upload to the S3
/// bucket.
#[derive(Args)]
pub struct FetchAssetsArgs {
    /// S3 access key
    #[clap(long, env, value_parser)]
    access_key: String,

    /// S3 secret key
    #[clap(long, env, value_parser)]
    secret_key: String,
}

impl FetchAssetsArgs {
    pub fn run(&self) -> anyhow::Result<ExitCode> {
        let rt = tokio::runtime::Runtime::new().unwrap();
        rt.block_on(async { self.cmd().await })?;
        Ok(ExitCode::SUCCESS)
    }

    async fn cmd(&self) -> anyhow::Result<()> {
        let creds = Credentials::new(&self.access_key, &self.secret_key, None, None, "asset-cli");

        let b2_s3 = "https://s3.us-west-002.backblazeb2.com";
        let b2_endpoint = Endpoint::immutable(b2_s3.parse().unwrap());

        let config = Config::builder()
            .region(Region::new("us-west-002"))
            .endpoint_resolver(b2_endpoint)
            .credentials_provider(creds)
            .build();

        let client = Client::from_conf(config);

        let object_list = client
            .list_objects_v2()
            .bucket("pdx-tools-build")
            .prefix("game-bundles/")
            .send()
            .await
            .context("unable to list objects")?;

        let current_game_bundles: HashMap<String, _> = WalkDir::new("assets/game-bundles")
            .into_iter()
            .filter_map(|x| x.ok())
            .filter(|x| x.path().is_file())
            .map(|x| {
                (
                    x.path().file_name().unwrap().to_str().unwrap().to_string(),
                    x.metadata().unwrap().modified().unwrap(),
                )
            })
            .collect();

        for object in object_list.contents().unwrap_or_default() {
            let key = object.key().context("expected key to be defined")?;
            let filename = key
                .split('/')
                .last()
                .with_context(|| format!("expected {} to have filename", key))?;

            let local_equivalent = current_game_bundles.get(filename);
            let mut download = local_equivalent.is_none();
            if let Some(created) = local_equivalent {
                let lm = object
                    .last_modified()
                    .with_context(|| format!("expected {} to have last modified", key))?;
                let remote_modified = Utc.timestamp(lm.secs(), 0);
                let local_modified: DateTime<Utc> = (*created).into();

                match remote_modified.cmp(&local_modified) {
                    std::cmp::Ordering::Greater => {
                        download = true;
                        info!(
                            "remote ({}) is more recent than local ({}), downloading {}",
                            remote_modified, local_modified, filename
                        );
                    }
                    std::cmp::Ordering::Equal => {
                        info!(
                            "local {} is already up to date: {}",
                            filename, local_modified
                        );
                    }
                    std::cmp::Ordering::Less => {
                        bail!(
                            "{} has a local time farther in the future than remote.",
                            key
                        );
                    }
                }
            } else {
                info!("does not exist locally, downloading: {}", filename);
            }

            if download {
                download_object(&client, key)
                    .await
                    .with_context(|| format!("unable to download {}", key))?;
            }
        }

        let object_list = client
            .list_objects_v2()
            .bucket("pdx-tools-build")
            .prefix("tokens/")
            .send()
            .await
            .context("unable to list objects")?;

        for object in object_list.contents().unwrap_or_default() {
            let key = object.key().context("expected key to be defined")?;
            download_object(&client, key)
                .await
                .with_context(|| format!("unable to download {}", key))?;
        }

        Ok(())
    }
}

async fn download_object(client: &Client, key: &str) -> anyhow::Result<()> {
    let mut obj = client
        .get_object()
        .bucket("pdx-tools-build")
        .key(key)
        .send()
        .await
        .with_context(|| format!("unable to retrieve: {}", key))?;

    let out_path = Path::new("assets").join(key);
    std::fs::create_dir_all(out_path.parent().unwrap()).context("cannot create directories")?;

    let mut file = File::create(&out_path)
        .with_context(|| format!("unable to create {}", out_path.display()))?;

    while let Some(bytes) = obj.body.next().await {
        let data = bytes.context("download interrupted")?;
        file.write(&data).context("unable to write to file")?;
    }

    let lm = obj
        .last_modified()
        .with_context(|| format!("expected {} to have last modified", key))?;
    let mtime = filetime::FileTime::from_unix_time(lm.secs(), lm.subsec_nanos());

    filetime::set_file_mtime(&out_path, mtime)
        .with_context(|| format!("unable to set mtime on {}", out_path.display()))?;

    let timestamp = Utc.timestamp(lm.secs(), lm.subsec_nanos());
    info!("downloaded {} and set mtime: {}", key, timestamp);
    Ok(())
}
