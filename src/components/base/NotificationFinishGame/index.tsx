import {
  SELECT_OPTION_BUTTON_FINISH_GAME,
  SELECT_OPTION_MODE_SANGLE_PLAYER,
} from "@/components/constants/select-options";
import { handleCreateNewGame } from "@/components/page/home";
import { PlayGameLogo } from "@/components/page/play/PlayGameLogo";
import { handleFinishGame } from "@/components/page/play/handle";
import { MainContext } from "@/context/main-context";
import { selector } from "@/redux";
import clsx from "clsx";
import { useContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export const NotificationFinishGame = () => {
  const { currentModeData } = useSelector(selector.data);
  const [complete] = useState(currentModeData.numberToSearch >= 101);
  return (
    <div className="absolute z-30 w-full h-full flex items-center justify-center bg-white/80">
      <div className="p-5 bg-white rounded-2xl shadow-md border flex items-center justify-center flex-col">
        <PlayGameLogo />
        <div className="pt-4 flex items-center justify-center flex-col">
          <h2 className="text-4xl uppercase">
            {complete ? "Complete" : "Failure :(("}
          </h2>
          <div className="my-3 flex items-center justify-center gap-2">
            <h2 className="text-lg">You have found:</h2>
            <h2 className="text-xl">
              {currentModeData.numberToSearch - 1}/ 100
            </h2>
          </div>
          <div className="mt-5">
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
              time:
                SELECT_OPTION_MODE_SANGLE_PLAYER.find(
                  (item) => item.value === currentModeData.mode
                )?.time || "0:00",
            });
          }}
        >
          {item.title}
        </button>
      ))}
    </div>
  );
};
