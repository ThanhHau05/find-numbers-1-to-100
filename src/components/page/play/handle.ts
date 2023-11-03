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
          clicked: number,
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

export const handleClickNumberWithFriend = async ({
  number,
  dispatch,
  data,
  idUser,
}: {
  number: number;
  dispatch: Dispatch<AnyAction>;
  data: PlayingModeInformation;
  idUser: number;
}) => {
  if (number === data.numberToSearch) {
    const newArr = data.arrayNumber.map((item) => {
      if (item.number === number) {
        return {
          ...item,
          clicked: idUser,
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
  setValueShowMode,
}: {
  dispatch: Dispatch<AnyAction>;
  value: string;
  setShowOutGame: (value: boolean) => void;
  setValueShowMode: (value: string) => void;
}) => {
  setShowOutGame(false);
  if (value === "yes") {
    setValueShowMode("");
    dispatch(DataActions.setCurrentModeData(<PlayingModeInformation>{}));
  }
};

export const handleFinishGame = ({
  mode,
  handleCreateNewGame,
  value,
  dispatch,
  time,
}: {
  mode: string;
  handleCreateNewGame: () => SelectOptionNumber[];
  value: string;
  dispatch: Dispatch<AnyAction>;
  time: string;
}) => {
  if (value === "home") {
    dispatch(DataActions.setCurrentModeData(<PlayingModeInformation>{}));
  } else if (value === "play again") {
    dispatch(
      DataActions.setCurrentModeData({
        mode,
        arrayNumber: handleCreateNewGame(),
        time,
        numberToSearch: 1,
      })
    );
  }
};
