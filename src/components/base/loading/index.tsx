import clsx from "clsx";
import type { Dispatch, SetStateAction } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { DataFirebase } from "@/firebase/handle";

import { BasicColors } from "../basic colors";

export const Loading = ({
  value,
  color,
  setNumber,
  setShowLoading,
}: {
  value: number;
  color: string;
  setNumber: Dispatch<
    SetStateAction<{
      value: number;
      color: string;
    }>
  >;
  setShowLoading: Dispatch<SetStateAction<boolean>>;
}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    let i = 0;
    const updateNumber = () => {
      let randomIndex = Math.floor(Math.random() * BasicColors.length);
      randomIndex = Math.min(randomIndex, BasicColors.length - 1);
      setNumber({
        value: i,
        color: BasicColors[randomIndex] ?? "text-black",
      });

      i++;

      if (i <= 100) {
        setTimeout(updateNumber, 75);
      }
    };
    updateNumber();
  }, []);
  return (
    <div
      onClick={async () => {
        if (value === 100) {
          setShowLoading(false);
          await DataFirebase.AddNewUserId(dispatch);
        }
      }}
      className={clsx(
        "absolute z-50 flex h-full w-full items-center justify-center bg-white transition-all duration-300",
        value >= 99 ? "bg-white/90" : "bg-white"
      )}
    >
      <div
        className={clsx(
          "circle_loading absolute h-24 w-28 rounded-full border-8 border-red-600 bg-transparent transition-all duration-300",
          value >= 99 ? "opacity-100" : "opacity-0"
        )}
      />
      <h2 className={clsx("text-5xl font-medium", color)}>{value}</h2>
    </div>
  );
};
