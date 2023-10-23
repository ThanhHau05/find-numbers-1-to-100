import { useContext } from "react";
import { useDispatch } from "react-redux";

import { ButtonChildren } from "@/components/base/button children";
import { SELECT_OPTION_MODE_SANGLE_PLAYER } from "@/components/constants/select-options";
import { MainContext } from "@/context/main-context";
import { useClickOutSide } from "@/hooks/useClickOutSide";
import { DataActions } from "@/redux";
import { handleCreateNewGame } from "../handle";

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
      </div>
    </div>
  );
};

export const RenderSelectModeSinglePlayer = () => {
  const dispatch = useDispatch();
  return (
    <>
      <h2 className="mb-5 text-center text-2xl">Select Mode</h2>
      <div className="grid grid-cols-4 gap-2">
        {SELECT_OPTION_MODE_SANGLE_PLAYER.map((item) => (
          <ButtonChildren
            key={item.value}
            title={item.title}
            hoverBgColor
            hoverTextColor
            onClick={() =>
              dispatch(
                DataActions.setCurrentModeData({
                  mode: item.value,
                  arrayNumber: handleCreateNewGame(),
                  time: item.time,
                  numberToSearch: 1,
                })
              )
            }
          >
            {typeof item.Title2 === "string" ? (
              <h2 className="text-lg transition-all group-hover:scale-125 group-hover:text-white">
                {item.Title2.toString()}
              </h2>
            ) : (
              <item.Title2 className="text-3xl transition-all group-hover:scale-125" />
            )}
          </ButtonChildren>
        ))}
      </div>
    </>
  );
};
