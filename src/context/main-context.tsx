import type { Dispatch, ReactNode, SetStateAction } from "react";
import { createContext, useMemo, useState } from "react";

interface MainProps {
  valueshowmode: string;
  setValueShowMode: Dispatch<SetStateAction<string>>;
  showoutgame: boolean;
  setShowOutGame: Dispatch<SetStateAction<boolean>>;
}

export const MainContext = createContext({} as MainProps);

export const MainProvider = ({ children }: { children: ReactNode }) => {
  const [valueshowmode, setValueShowMode] = useState("");
  const [showoutgame, setShowOutGame] = useState(false);
  const value = useMemo(
    () => ({
      valueshowmode,
      setValueShowMode,
      showoutgame,
      setShowOutGame,
    }),
    [valueshowmode, setValueShowMode, showoutgame, setShowOutGame]
  );
  return <MainContext.Provider value={value}>{children}</MainContext.Provider>;
};
