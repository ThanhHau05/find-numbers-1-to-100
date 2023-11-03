import { FaSignOutAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { DataActions, selector } from "@/redux";
import { useContext, useEffect, useState } from "react";
import { MainContext } from "@/context/main-context";
import { Timer } from "./timer";
import { PlayGameLogo } from "./PlayGameLogo";
import { NumberToSearch } from "./NumberToSearch";
import { PlayingModeInformation } from "@/components/constants/select-options";
import { RenderButtonNumber } from "./RenderButtonNumber";

export const PlayGame = () => {
  const { currentModeData } = useSelector(selector.data);
  const { mode, numberToSearch } = currentModeData;
  const { setShowFinishGame } = useContext(MainContext);
  const [timer, setTimer] = useState(currentModeData.time);

  useEffect(() => {
    if (numberToSearch >= 101) {
      setShowFinishGame(mode);
    }
  }, [numberToSearch, mode]);

  const dispatch = useDispatch();
  useEffect(() => {
    if (currentModeData.mode === "unlimited") return;
    if (currentModeData.time !== "0:00") {
      const interval = setInterval(() => {
        const [minute, second] = currentModeData.time.split(":");
        if (second === "00") {
          const time = `${Number(minute) - 1}:59`;
          setTimer(time);
          dispatch(
            DataActions.setCurrentModeData({ ...currentModeData, time })
          );
        } else {
          const newsecond = Number(second) - 1;
          const time = `${minute}:${
            newsecond < 10 ? `0${newsecond}` : newsecond
          }`;
          setTimer(time);
          dispatch(
            DataActions.setCurrentModeData({ ...currentModeData, time })
          );
        }
      }, 1000);
      return () => clearInterval(interval);
    } else {
      setShowFinishGame(currentModeData.mode);
      return;
    }
  }, [currentModeData]);

  return <ContainerPlayGame data={currentModeData} timer={timer} />;
};

export const ContainerPlayGame = ({
  data,
  timer,
}: {
  data: PlayingModeInformation;
  timer: string;
}) => {
  const { setShowOutGame } = useContext(MainContext);
  return (
    <div className="absolute z-10 h-full w-full">
      <div className="flex w-full items-center justify-between bg-gray-50 px-4 py-2.5 shadow-md">
        <PlayGameLogo />
        <NumberToSearch number={data.numberToSearch} />
        <Timer timer={timer} mode={data.mode} />
      </div>
      <div className="h-[calc(100%-95px)] w-full items-center justify-center grid grid-cols-6 relative -left-2 justify-items-center grid-rows-17">
        <RenderButtonNumber data={data} />
      </div>
      <div className="w-full pb-5 pr-5">
        <FaSignOutAlt
          onClick={() => setShowOutGame(true)}
          className="ml-auto cursor-pointer text-xl text-gray-800 drop-shadow-md rota"
        />
      </div>
    </div>
  );
};
