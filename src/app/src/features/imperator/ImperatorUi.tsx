import Head from "next/head";
import { useSelector } from "react-redux";
import { selectAnalyzeFileName } from "@/features/engine";
import { useImperatorMeta } from "./imperatorSlice";
import { MeltButton } from "./MeltButton";

export const ImperatorUi = () => {
  const filename = useSelector(selectAnalyzeFileName);
  const meta = useImperatorMeta();
  return (
    <main className="mx-auto mt-4 max-w-screen-lg">
      <Head>
        <title>{`${filename.replace(".rome", "")} - Imperator (${
          meta.date
        }) - PDX Tools`}</title>
      </Head>
      <div className="mx-auto max-w-prose">
        <h2>Imperator</h2>
        <p>
          {`An Imperator: Rome save was detected (version ${meta.version}). At this time, Imperator functionality is limited but one can still melt binary ironman saves into plaintext`}
        </p>
        {meta.isMeltable && <MeltButton />}
      </div>
    </main>
  );
};

export default ImperatorUi;
