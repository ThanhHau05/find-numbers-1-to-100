import type { Dispatch, ReactNode, SetStateAction } from "react";
import { createContext, useMemo, useState } from "react";

interface MainProps {
  valueshowmode: string;
  setValueShowMode: Dispatch<SetStateAction<string>>;
  showoutgame: boolean;
  showfinishgame: string;
  setShowOutGame: Dispatch<SetStateAction<boolean>>;
  setShowFinishGame: Dispatch<SetStateAction<string>>;
}

export const MainContext = createContext({} as MainProps);

export const MainProvider = ({ children }: { children: ReactNode }) => {
  const [valueshowmode, setValueShowMode] = useState("");
  const [showoutgame, setShowOutGame] = useState(false);
  const [showfinishgame, setShowFinishGame] = useState("");
  const value = useMemo(
    () => ({
      valueshowmode,
      setValueShowMode,
      showoutgame,
      setShowOutGame,
      showfinishgame,
      setShowFinishGame,
    }),
    [
      valueshowmode,
      setValueShowMode,
      showoutgame,
      setShowOutGame,
      showfinishgame,
      setShowFinishGame,
    ]
  );
  return <MainContext.Provider value={value}>{children}</MainContext.Provider>;
};
