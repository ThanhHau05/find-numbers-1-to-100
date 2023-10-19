import { SELECT_OPTION_BUTTON_FINISH_GAME } from "@/components/constants/select-options";
import { handleCreateNewGame } from "@/components/page/home";
import { PlayGameLogo } from "@/components/page/play";
import { handleFinishGame } from "@/components/page/play/handle";
import { MainContext } from "@/context/main-context";
import { selector } from "@/redux";
import clsx from "clsx";
import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";

export const NotificationFinishGame = () => {
  return (
    <div className="absolute z-30 w-full h-full flex items-center justify-center bg-white/80">
      {/* <div className="pyro">
        <div className="before"></div>
        <div className="after"></div>
      </div> */}
      <div className="p-5 bg-white rounded-2xl shadow-md border flex items-center justify-center flex-col">
        <PlayGameLogo />
        <div className="pt-4 flex items-center justify-center flex-col">
          <h2 className="text-4xl uppercase">Complete</h2>
          <div className="mt-8">
            <RenderButton />
          </div>
        </div>
      </div>
    </div>
  );
};

const RenderButton = () => {
  const { currentModeData } = useSelector(selector.data);
  const dispatch = useDispatch();
  const { setShowFinishGame, setValueShowMode } = useContext(MainContext);
  return (
    <div className="flex items-center justify-around gap-8">
      {SELECT_OPTION_BUTTON_FINISH_GAME.map((item) => (
        <button
          key={item.value}
          className={clsx(
            "bg-white py-1 rounded-lg border-[1.5px] w-32 hover:bg-gray-100 shadow-md text-lg",
            item.value === "home" ? "px-4 border-gray-700 text-gray-800" : null,
            item.value === "play again"
              ? "px-2 border-green-400 text-green-600"
              : null
          )}
          onClick={() => {
            setShowFinishGame("");
            setValueShowMode("");
            handleFinishGame({
              dispatch,
              value: item.value,
              handleCreateNewGame: handleCreateNewGame,
              mode: currentModeData.mode,
            });
          }}
        >
          {item.title}
        </button>
      ))}
    </div>
  );
};
