import { BasicColors } from "@/components/base/basic colors";
import { PlayingModeInformation } from "@/components/constants/select-options";
import { useDispatch } from "react-redux";
import { handleClickNumber, handleClickNumberWithFriend } from "./handle";
import {
  ButtonNumber,
  ButtonNumberWithFriend,
} from "@/components/base/button number";

export const RenderButtonNumber = ({
  data,
}: {
  data: PlayingModeInformation;
}) => {
  const dispatch = useDispatch();
  return data.arrayNumber.map((item) => {
    let randomIndex = Math.floor(Math.random() * BasicColors.length);
    randomIndex = Math.min(randomIndex, BasicColors.length - 1);
    return (
      <>
        {data.mode !== "friends" ? (
          <ButtonNumber
            key={item.number}
            angle={item.angle}
            number={item.number}
            color={item.color}
            left={item.left}
            top={item.top}
            onClick={() =>
              handleClickNumber({
                data,
                dispatch,
                number: item.number,
              })
            }
            clicked={item.clicked}
          />
        ) : (
          <ButtonNumberWithFriend
            key={item.number}
            angle={item.angle}
            number={item.number}
            color={item.color}
            left={item.left}
            top={item.top}
            onClick={() =>
              handleClickNumberWithFriend({
                data,
                dispatch,
                number: item.number,
                idUser: item.idUser || 0,
              })
            }
            clicked={item.clicked}
            idUser={item.idUser || 0}
          />
        )}
      </>
    );
  });
};
