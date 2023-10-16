import { BasicColors } from "@/components/base/basic colors";
import { SelectOptionNumber } from "@/components/constants/select-options";

export const handleCopyID = (
  value: number,
  setCopy: (value: boolean) => void,
) => {
  navigator.clipboard.writeText(value.toString()).then(() => {
    setCopy(true);
    const timer = setTimeout(() => {
      setCopy(false);
    }, 1500);
    return () => clearTimeout(timer);
  });
};

export const handleCreateNewGame = () => {
  let checkLeft = false;
  let i = 0;
  let newGame: SelectOptionNumber[] = Array(100).fill(null).map((_, index) => {
    let randomIndex = Math.floor(Math.random() * BasicColors.length);
      randomIndex = Math.min(randomIndex, BasicColors.length - 1);
     const angle = Math.random() * 180;
    return {
      number: index + 1,
      angle,
      color: BasicColors[randomIndex] ?? 'text-black',
      left: 0,
      top: 0,
      clicked: false,
    }
  });
  newGame = newGame.sort(() => Math.random() - 0.5);
  newGame = newGame.map((item) => {
    const check = Math.floor(Math.random() * 5);
    if (!checkLeft && check > 4) checkLeft = true;
    else if (checkLeft && check > 4) checkLeft = false;
    i++;
    if (i > 6) i = 1;
    return {
      ...item,
      left: checkLeft && i < 6 ? Math.random() * 80 : check > 2 ? 30 : 0,
      top: !checkLeft && i < 6 ? Math.random() * 60 : 0,
    }
  })
  console.log(newGame);
  
  return newGame;
}