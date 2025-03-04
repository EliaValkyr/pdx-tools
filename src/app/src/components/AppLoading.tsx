import { AppSvg } from "./icons";

export const AppLoading = () => {
  return (
    <div className="flex h-full flex-col items-center justify-center">
      <AppSvg width="250" className="invert" />
      <p className="text-xl">Loading . . .</p>
    </div>
  );
};
