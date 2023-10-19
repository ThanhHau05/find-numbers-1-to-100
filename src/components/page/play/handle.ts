import {
  PlayingModeInformation,
  SelectOptionNumber,
} from "@/components/constants/select-options";
import { DataActions } from "@/redux";
import { Dispatch } from "react";
import { AnyAction } from "redux";

export const handleClickNumber = async ({
  number,
  dispatch,
  data,
}: {
  number: number;
  dispatch: Dispatch<AnyAction>;
  data: PlayingModeInformation;
}) => {
  if (number === data.numberToSearch) {
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

export const handleFinishGame = ({
  mode,
  handleCreateNewGame,
  value,
  dispatch,
}: {
  mode: string;
  handleCreateNewGame: () => SelectOptionNumber[];
  value: string;
  dispatch: Dispatch<AnyAction>;
}) => {
  if (mode === "unlimited") {
    if (value === "home") {
      dispatch(DataActions.setCurrentModeData(<PlayingModeInformation>{}));
    } else if (value === "play again") {
      dispatch(
        DataActions.setCurrentModeData({
          mode,
          arrayNumber: handleCreateNewGame(),
          time: 0,
          numberToSearch: 1,
        })
      );
    }
  } else {
    //
  }
};