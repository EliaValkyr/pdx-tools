import React from "react";

type ChangelogEntry = {
  title: string;
  render: () => JSX.Element;
};

const ChangelogList: React.FC<{}> = ({ children }) => {
  return <ul style={{ listStyleType: "none" }}>{children}</ul>;
};

export const changes: ChangelogEntry[] = [
  {
    title: "2021-05-07",
    render: () => {
      return (
        <ChangelogList>
          <li>✨ - add great advisor list to country details</li>
          <li>
            🐛 - melted output omits carriage return in favor of just newlines
          </li>
        </ChangelogList>
      );
    },
  },
  {
    title: "2021-05-08",
    render: () => {
      return (
        <ChangelogList>
          <li>
            ✨ - added new 1.31 expenses (eg: monuments) in country budget page
          </li>
        </ChangelogList>
      );
    },
  },
  {
    title: "2021-05-09",
    render: () => {
      return (
        <ChangelogList>
          <li>✨ - split percent into new column for pie chart tables</li>
          <li>✨ - locale specific number formatting</li>
          <li>
            ✨ - add more column separator bars in war tab to make columns more
            distinguishable
          </li>
          <li>🐛 - align numeric columns in war info page to the right</li>
        </ChangelogList>
      );
    },
  },
  {
    title: "2021-05-18",
    render: () => {
      return (
        <ChangelogList>
          <li>✨ - faster map generation using single pass algorithm</li>
          <li>🐛 - prevent date wrapping in some tables</li>
        </ChangelogList>
      );
    },
  },
  {
    title: "2021-05-19",
    render: () => {
      return (
        <ChangelogList>
          <li>
            ✨ - add "% from Attrition" column in Country Army Casualties
            visualization
          </li>
          <li>🐛 - numbers in melted output better matches plaintext output</li>
          <li>🐛 - fixed some ids being melted as dates instead of numbers</li>
          <li>
            🐛 - expand visualization navigation links so they fix on page
          </li>
        </ChangelogList>
      );
    },
  },
  {
    title: "2021-05-20",
    render: () => {
      return (
        <ChangelogList>
          <li>✨ - drill down country casualties by war</li>
        </ChangelogList>
      );
    },
  },
  {
    title: "2021-05-29",
    render: () => {
      return (
        <ChangelogList>
          <li>🐛 - melt with tabs instead of spaces</li>
        </ChangelogList>
      );
    },
  },
  {
    title: "2021-06-03",
    render: () => {
      return (
        <ChangelogList>
          <li>🐛 - parse more leviathan saves (leaders with missing ids)</li>
        </ChangelogList>
      );
    },
  },
  {
    title: "2021-06-08",
    render: () => {
      return (
        <ChangelogList>
          <li>🐛 - melt dates from modded EU4 saves prior to 5000 BC</li>
        </ChangelogList>
      );
    },
  },
  {
    title: "2021-06-13",
    render: () => {
      return (
        <ChangelogList>
          <li>✨ - show mod names (&gt; 1.31) or IDs</li>
        </ChangelogList>
      );
    },
  },
  {
    title: "2021-06-18",
    render: () => {
      return (
        <ChangelogList>
          <li>🐛 - fix eat your greens achievement logic</li>
        </ChangelogList>
      );
    },
  },
  {
    title: "2021-06-19",
    render: () => {
      return (
        <ChangelogList>
          <li>✨ - optimized images to be 10-15% smaller</li>
          <li>🐛 - hairline border gap on flags in Chrome</li>
        </ChangelogList>
      );
    },
  },
  {
    title: "2021-06-23",
    render: () => {
      return (
        <ChangelogList>
          <li>✨ - update web libraries to latest</li>
          <li>🐛 - fix war participant dates spanning multiple lines</li>
        </ChangelogList>
      );
    },
  },
  {
    title: "2021-06-30",
    render: () => {
      return (
        <ChangelogList>
          <li>🐛 - Fix false negative for Spaghetti Western</li>
        </ChangelogList>
      );
    },
  },
  {
    title: "2021-07-08",
    render: () => {
      return (
        <ChangelogList>
          <li>
            ✨ - Change the display of mods into an expandable bulleted list
          </li>
          <li>✨ - Allow other sites to post a file to analyze in PDX Tools</li>
        </ChangelogList>
      );
    },
  },
  {
    title: "2021-08-16",
    render: () => {
      return (
        <ChangelogList>
          <li>✨ - New simulated EU4 map</li>
          <li>✨ - Optimized data payload for individual versions of EU4</li>
          <li>🐛 - Fix only player filter not working on maps</li>
        </ChangelogList>
      );
    },
  },
  {
    title: "2021-08-17",
    render: () => {
      return (
        <ChangelogList>
          <li>✨ - Updated map to show colonizable provinces better</li>
          <li>✨ - Add technology map mode</li>
          <li>✨ - Show info overlap in new map with map mode details</li>
          <li>✨ - Localize religion in province details</li>
        </ChangelogList>
      );
    },
  },
  {
    title: "2021-08-18",
    render: () => {
      return (
        <ChangelogList>
          <li>🐛 - Fix coast edge detection in map</li>
          <li>🐛 - Fix incorrect mana spend labels for 1.31 saves</li>
        </ChangelogList>
      );
    },
  },
  {
    title: "2021-08-19",
    render: () => {
      return (
        <ChangelogList>
          <li>🐛 - Fix exported map to contain map mode in filename</li>
        </ChangelogList>
      );
    },
  },
  {
    title: "2021-08-20",
    render: () => {
      return (
        <ChangelogList>
          <li>
            🐛 - Exported map with terrain overlay are now exported in a lossy
            format (webp)
          </li>
          <li>🐛 - Fix regression in mana spend labels for 1.31 saves</li>
        </ChangelogList>
      );
    },
  },
  {
    title: "2021-08-22",
    render: () => {
      return (
        <ChangelogList>
          <li>🐛 - Fix incorrect color calculations for technology map mode</li>
        </ChangelogList>
      );
    },
  },
  {
    title: "2021-08-26",
    render: () => {
      return (
        <ChangelogList>
          <li>
            ✨ - Map updated to render off the main thread for Chromium browsers
          </li>
        </ChangelogList>
      );
    },
  },
  {
    title: "2021-08-31",
    render: () => {
      return (
        <ChangelogList>
          <li>
            🐛 - Fix achievements page crash due to missing custom achievement
          </li>
          <li>
            🐛 - Fix incorrect achievement score comparison in upload allowing
            slower saves to be seen as record breaking
          </li>
        </ChangelogList>
      );
    },
  },
  {
    title: "2021-09-01",
    render: () => {
      return (
        <ChangelogList>
          <li>✨ - Start map centered around player's capital province</li>
          <li>✨ - Add changelog page</li>
          <li>
            🐛 - Consistent level of initial map zooom independent of screen
            size
          </li>
          <li>🐛 - Clear file upload rejection status on each file drop</li>
          <li>
            🐛 - Fix account page not highlighting the account menu option
          </li>
        </ChangelogList>
      );
    },
  },
  {
    title: "2021-09-03",
    render: () => {
      return (
        <ChangelogList>
          <li>
            Despite not targeting Safari this release contains a few Safari
            fixes:
          </li>
          <li>
            🐛 - Fix PDX Tools logo not showing on homepage on Safari devices
          </li>
          <li>
            🐛 - Fix errors in analyzing saves in Safari by catering to their{" "}
            <a href="https://developer.apple.com/forums/thread/650317">
              backwards CSP implementation
            </a>
          </li>
          <li>
            🐛 - Derive loading page for 3rd party apps from home page instead
            of custom page
          </li>
          <li>
            🐛 - Tweak local save cache to be more resiliant when readonly
          </li>
        </ChangelogList>
      );
    },
  },
  {
    title: "2021-09-04",
    render: () => {
      return (
        <ChangelogList>
          <li>✨ - Allow reporting of saves that fail to parse</li>
        </ChangelogList>
      );
    },
  },
  {
    title: "2021-09-05",
    render: () => {
      return (
        <ChangelogList>
          <li>🐛 - Fix exporting map on offscreen canvas (chrome)</li>
        </ChangelogList>
      );
    },
  },
  {
    title: "2021-09-07",
    render: () => {
      return (
        <ChangelogList>
          <li>✨ - Parse saves generated by paperman</li>
          <li>✨ - Performance improvements to parsing ironman saves</li>
        </ChangelogList>
      );
    },
  },
  {
    title: "2021-09-10",
    render: () => {
      return (
        <ChangelogList>
          <li>
            🐛 - Countries that are near white have their color inverted on
            graphs
          </li>
        </ChangelogList>
      );
    },
  },
  {
    title: "2021-09-13",
    render: () => {
      return (
        <ChangelogList>
          <li>✨ - Timeline for political map mode</li>
        </ChangelogList>
      );
    },
  },
  {
    title: "2021-09-15",
    render: () => {
      return (
        <ChangelogList>
          <li>✨ - Add support for Dracula's Revenge achievement</li>
        </ChangelogList>
      );
    },
  },
  {
    title: "2021-09-20",
    render: () => {
      return (
        <ChangelogList>
          <li>✨ - Add API documentation</li>
        </ChangelogList>
      );
    },
  },
  {
    title: "2021-09-23",
    render: () => {
      return (
        <ChangelogList>
          <li>
            ✨ - New storage scheme that reduces save bandwidth by 2-3x and can
            reduce parse times by up to 2x
          </li>
          <li>✨ - Increase everyone's available save slots to 100</li>
          <li>✨ - More efficient caching mechanism</li>
          <li>🐛 - Lock map renders to 60 FPS</li>
          <li>🐛 - Fix fluctuating save download progress</li>
        </ChangelogList>
      );
    },
  },
  {
    title: "2021-09-25",
    render: () => {
      return (
        <ChangelogList>
          <li>
            🐛 - Fix provinces in the timeline failing to become highlighted
          </li>
        </ChangelogList>
      );
    },
  },
  {
    title: "2021-09-26",
    render: () => {
      return (
        <ChangelogList>
          <li>🐛 - Fix blank map on export view</li>
          <li>
            🐛 - Fix WebGL warning on firefox about incurring lazy
            initialization
          </li>
        </ChangelogList>
      );
    },
  },
  {
    title: "2021-09-28",
    render: () => {
      return (
        <ChangelogList>
          <li>🐛 - Incorrect URL for API docs in menu</li>
        </ChangelogList>
      );
    },
  },
  {
    title: "2021-09-30",
    render: () => {
      return (
        <ChangelogList>
          <li>🐛 - More descriptive errors when a save fails to parse</li>
        </ChangelogList>
      );
    },
  },
  {
    title: "2021-10-04",
    render: () => {
      return (
        <ChangelogList>
          <li>✨ - Add country flag for past rulers and heirs</li>
          <li>🐛 - Rearrange layout for one time advisor event grid</li>
          <li>🐛 - Remove map offscreen render on Chromium browsers</li>
        </ChangelogList>
      );
    },
  },
  {
    title: "2021-10-05",
    render: () => {
      return (
        <ChangelogList>
          <li>🐛 - Fix melting uploaded saves in new compression scheme</li>
        </ChangelogList>
      );
    },
  },
  {
    title: "2021-10-06",
    render: () => {
      return (
        <ChangelogList>
          <li>
            🐛 - Fix timeline slider from selecting surrounding text on firefox
          </li>
        </ChangelogList>
      );
    },
  },
  {
    title: "2021-10-08",
    render: () => {
      return (
        <ChangelogList>
          <li>🐛 - Increase map terrain brightness at higher zoom levels</li>
          <li>🐛 - Use a better blue for water on the map</li>
        </ChangelogList>
      );
    },
  },
  {
    title: "2021-10-09",
    render: () => {
      return (
        <ChangelogList>
          <li>🐛 - Fix bug causing shared saves to be inaccessible</li>
        </ChangelogList>
      );
    },
  },
  {
    title: "2021-10-27",
    render: () => {
      return (
        <ChangelogList>
          <li>🐛 - Fix mods not detected correctly</li>
        </ChangelogList>
      );
    },
  },
  {
    title: "2021-11-11",
    render: () => {
      return (
        <ChangelogList>
          <li>✨ - Add EU4 Origins support</li>
          <li>✨ - Add achievement: Ultimate Military</li>
          <li>✨ - Add achievement: Where are the Penguins</li>
          <li>✨ - Add achievement: Knights of the Caribbean</li>
          <li>✨ - Add achievement: Australia-Hungary</li>
          <li>✨ - Add achievement: Shemot is Not</li>
          <li>✨ - Add achievement: Swahili Persuasion</li>
          <li>✨ - Add achievement: I don't like sand</li>
          <li>✨ - Add achievement: Atwix Legacy</li>
        </ChangelogList>
      );
    },
  },
  {
    title: "2021-11-12",
    render: () => {
      return (
        <ChangelogList>
          <li>
            🐛 - Fix a couple Origins saves not parsing due to a missing
            `fixed_interest` field
          </li>
        </ChangelogList>
      );
    },
  },
  {
    title: "2021-11-14",
    render: () => {
      return (
        <ChangelogList>
          <li>✨ - Add achievement: KHAAAAAAN</li>
          <li>✨ - Add achievement: One nation to rule them all</li>
        </ChangelogList>
      );
    },
  },
  {
    title: "2021-11-24",
    render: () => {
      return (
        <ChangelogList>
          <li>🐛 - Fix map crashes for map-changing mods</li>
          <li>
            🐛 - Update Knights of the Caribbean achievement to 1.32.2
            compatibility (own all of Sardinia)
          </li>
          <li>
            🐛 - Update One nation to rule them all to 1.32.2 compatibility
            (subjects must be vassals)
          </li>
        </ChangelogList>
      );
    },
  },
  {
    title: "2022-01-24",
    render: () => {
      return (
        <ChangelogList>
          <li>
            ✨ -{" "}
            <a href="/blog/new-year-new-version-new-name-pdx-tools/">
              New year, new version, new name: PDX Tools
            </a>
          </li>
          <li>✨ - New immersive map</li>
          <li>✨ - Uniform country filtering</li>
          <li>✨ - CK3, HOI4, and Imperator support</li>
          <li>✨ - EU4: Religion by development country graph</li>
        </ChangelogList>
      );
    },
  },
  {
    title: "2022-01-25",
    render: () => {
      return (
        <ChangelogList>
          <li>✨ - Add map performance diagnostics</li>
          <li>🐛 - Fix incorrect values for open graph metadata</li>
          <li>
            🐛 - Fix entering text into chart selection drop down causing crash
          </li>
          <li>
            🐛 - Move "X" to clear country in country filter to left hand side
          </li>
        </ChangelogList>
      );
    },
  },
  {
    title: "2022-01-26",
    render: () => {
      return (
        <ChangelogList>
          <li>🐛 - Fix initial map render omitting stripes and highlights</li>
        </ChangelogList>
      );
    },
  },
  {
    title: "2022-01-28",
    render: () => {
      return (
        <ChangelogList>
          <li>✨ - Add inheritance value calculations</li>
          <li>🐛 - Collapse ruler personalities onto one line</li>
        </ChangelogList>
      );
    },
  },
  {
    title: "2022-01-29",
    render: () => {
      return (
        <ChangelogList>
          <li>✨ - Add download save button to uploaded saves</li>
        </ChangelogList>
      );
    },
  },
  {
    title: "2022-02-02",
    render: () => {
      return (
        <ChangelogList>
          <li>✨ - Expose warning on major map performance caveats</li>
        </ChangelogList>
      );
    },
  },
  {
    title: "2022-02-03",
    render: () => {
      return (
        <ChangelogList>
          <li>
            ✨ - Add map compatibility with lower end devices with a max texture
            size of 4096
          </li>
          <li>🐛 - Fix poor map visuals on mobile devices</li>
          <li>🐛 - Fix map flicker on resize</li>
        </ChangelogList>
      );
    },
  },
  {
    title: "2022-02-05",
    render: () => {
      return (
        <ChangelogList>
          <li>✨ - Add list of past and present leaders to country details</li>
        </ChangelogList>
      );
    },
  },
  {
    title: "2022-02-15",
    render: () => {
      return (
        <ChangelogList>
          <li>
            🐛 - Fix trying to mutate immutable mod list resulting in error on
            info drawer
          </li>
        </ChangelogList>
      );
    },
  },
  {
    title: "2022-02-17",
    render: () => {
      return (
        <ChangelogList>
          <li>🐛 - Fix browser compatibility check not closeable</li>
          <li>🐛 - Avoid iphone error messages on android</li>
        </ChangelogList>
      );
    },
  },
  {
    title: "2022-02-18",
    render: () => {
      return (
        <ChangelogList>
          <li>🐛 - Fix permission issue for saves on google drive</li>
          <li>🐛 - Fix map tips appearing when panning the map</li>
          <li>🐛 - Fix possibility for accidental zoom on map UI controls</li>
        </ChangelogList>
      );
    },
  },
  {
    title: "2022-02-19",
    render: () => {
      return (
        <ChangelogList>
          <li>
            🐛 - Fix chrome incorrectly detected as not compatible on Windows
            and Linux
          </li>
          <li>🐛 - Fix stuck back button on home page</li>
        </ChangelogList>
      );
    },
  },
];
