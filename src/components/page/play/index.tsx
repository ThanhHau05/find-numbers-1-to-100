import { BsStopwatchFill } from "react-icons/bs";
import { CgInfinity } from "react-icons/cg";
import { FaSignOutAlt } from "react-icons/fa";

import { ButtonNumber } from "@/components/base/button number";
import type { SelectOptionNumber } from "@/components/constants/select-options";
import { Images } from "@/components/images";
import { BasicColors } from "@/components/base/basic colors";
import { handleClickNumber } from "./handle";
import { useDispatch, useSelector } from "react-redux";
import { selector } from "@/redux";
import { useContext } from "react";
import { MainContext } from "@/context/main-context";

export const PlayGame = () => {
  const { currentModeData } = useSelector(selector.data);
  const { mode, arrayNumber, numberToSearch } = currentModeData;

  const { setShowOutGame } = useContext(MainContext);

  return (
    <div className="absolute z-10 h-full w-full">
      <div className="flex w-full items-center justify-between bg-gray-50 px-4 py-2.5 shadow-md">
        <PlayGameLogo />
        <NumberToSearch number={numberToSearch} />
        <Timer mode={mode} />
      </div>
      <div className="h-[calc(100%-95px)] w-full items-center justify-center grid grid-cols-6 relative -left-2 justify-items-center grid-rows-17">
        <RenderButtonNumber
          data={arrayNumber}
          numberToSearch={numberToSearch}
        />
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

export const RenderButtonNumber = ({
  data,
  numberToSearch,
}: {
  data: SelectOptionNumber[];
  numberToSearch: number;
}) => {
  const { currentModeData } = useSelector(selector.data);
  const dispatch = useDispatch();
  return data.map((item) => {
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
            numberToSearch,
          })
        }
        clicked={item.clicked}
      />
    );
  });
};

const Timer = ({ mode }: { mode: string }) => {
  return (
    <div className="flex items-center justify-center">
      <BsStopwatchFill className="text-xl text-gray-800 drop-shadow-md" />
      {mode === "unlimited" ? (
        <CgInfinity className="mx-2 text-xl text-gray-800 drop-shadow-md" />
      ) : null}
    </div>
  );
};

const NumberToSearch = ({ number }: { number: number }) => {
  return (
    <div className="rounded-lg border-2 border-slate-500 p-1 px-5 shadow-md drop-shadow-md">
      <h2>{number}</h2>
    </div>
  );
};

const PlayGameLogo = () => {
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
