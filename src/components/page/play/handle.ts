import { PlayingModeInformation } from "@/components/constants/select-options";
import { DataActions } from "@/redux";
import { Dispatch } from "react";
import { AnyAction } from "redux";

export const handleClickNumber = async ({
  number,
  numberToSearch,
  dispatch,
  data,
}: {
  number: number;
  numberToSearch: number;
  dispatch: Dispatch<AnyAction>;
  data: PlayingModeInformation;
}) => {
  if (number === numberToSearch) {
    const newArr = data.arrayNumber.map((item) => {
      if (item.number === number) {
        return {
          ...item,
          clicked: true,
        };
      }
      return item;
    });
    dispatch(
      DataActions.setCurrentModeData({
        ...data,
        numberToSearch: data.numberToSearch + 1,
        arrayNumber: newArr,
      })
    );
  }
};

export const handleOutGame = ({
  dispatch,
  value,
  setShowOutGame,
}: {
  dispatch: Dispatch<AnyAction>;
  value: string;
  setShowOutGame: (value: boolean) => void;
}) => {
  setShowOutGame(false);
  if (value === "yes") {
    dispatch(DataActions.setCurrentModeData(<PlayingModeInformation>{}));
  }
};
