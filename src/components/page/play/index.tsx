import { BsStopwatchFill } from "react-icons/bs";
import { CgInfinity } from "react-icons/cg";
import { FaSignOutAlt } from "react-icons/fa";

import { ButtonNumber } from "@/components/base/button number";
import { Images } from "@/components/images";
import { BasicColors } from "@/components/base/basic colors";
import { handleClickNumber } from "./handle";
import { useDispatch, useSelector } from "react-redux";
import { DataActions, selector } from "@/redux";
import { useContext, useEffect, useState } from "react";
import { MainContext } from "@/context/main-context";

export const PlayGame = () => {
  const { currentModeData } = useSelector(selector.data);
  const { mode, numberToSearch } = currentModeData;

  const { setShowOutGame, setShowFinishGame } = useContext(MainContext);

  useEffect(() => {
    if (numberToSearch >= 101) {
      setShowFinishGame(mode);
    }
  }, [numberToSearch, mode]);

  return (
    <div className="absolute z-10 h-full w-full">
      <div className="flex w-full items-center justify-between bg-gray-50 px-4 py-2.5 shadow-md">
        <PlayGameLogo />
        <NumberToSearch number={numberToSearch} />
        <Timer />
      </div>
      <div className="h-[calc(100%-95px)] w-full items-center justify-center grid grid-cols-6 relative -left-2 justify-items-center grid-rows-17">
        <RenderButtonNumber />
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

export const RenderButtonNumber = () => {
  const { currentModeData } = useSelector(selector.data);
  const dispatch = useDispatch();
  return currentModeData.arrayNumber.map((item) => {
    let randomIndex = Math.floor(Math.random() * BasicColors.length);
    randomIndex = Math.min(randomIndex, BasicColors.length - 1);
    return (
      <ButtonNumber
        key={item.number}
        angle={item.angle}
        number={item.number}
        color={item.color}
        left={item.left}
        top={item.top}
        onClick={() =>
          handleClickNumber({
            data: currentModeData,
            dispatch,
            number: item.number,
          })
        }
        clicked={item.clicked}
      />
    );
  });
};

const Timer = () => {
  const { setShowFinishGame } = useContext(MainContext);
  const { currentModeData } = useSelector(selector.data);
  const [timer, setTimer] = useState(currentModeData.time);
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
  return (
    <div className="flex items-center justify-center">
      <BsStopwatchFill className="text-xl text-gray-800 drop-shadow-md" />
      {currentModeData.mode === "unlimited" ? (
        <CgInfinity className="mx-2 text-xl text-gray-800 drop-shadow-md" />
      ) : (
        <h2 className="text-xl pl-2">{timer}</h2>
      )}
    </div>
  );
};

const NumberToSearch = ({ number }: { number: number }) => {
  return (
    <div className="rounded-lg border-2 border-slate-500 p-1 px-5 shadow-md drop-shadow-md">
      <h2>{number >= 101 ? 100 : number}</h2>
    </div>
  );
};

export const PlayGameLogo = () => {
  return (
    <div className="inline-block">
      <div className="flex gap-2 text-lg drop-shadow-md">
        <img
          src={Images.HandDrawnCircle.src}
          alt=""
          className="absolute -left-2 top-[-15px] h-14 w-[98px] rounded-full"
        />
        <h2 className="ml-3 text-green-500">Number</h2>
        <h2>Hunt</h2>
      </div>
    </div>
  );
};
