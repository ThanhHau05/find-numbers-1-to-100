import { useContext } from "react";
import { MainContext } from "@/context/main-context";
import { useClickOutSide } from "@/hooks/useClickOutSide";
import { RenderSelectModeSinglePlayer } from "./RenderSelectModeSinglePlayer";
import { RenderSelectModePlayWithFriend } from "./RenderSelectModePlayWithFriend";

export const ShowOptionMode = () => {
  const { valueshowmode, setValueShowMode } = useContext(MainContext);

  const selectModeRef = useClickOutSide(() => {
    setValueShowMode("");
  });

  return (
    <div className="absolute z-40 flex h-full w-full items-center justify-center bg-slate-700/90 px-5">
      <div
        ref={selectModeRef}
        className="rounded-lg border-4 border-slate-400 bg-slate-100 p-3"
      >
        {valueshowmode === "single" ? <RenderSelectModeSinglePlayer /> : null}
        {valueshowmode === "friends" ? (
          <RenderSelectModePlayWithFriend />
        ) : null}
      </div>
    </div>
  );
};
