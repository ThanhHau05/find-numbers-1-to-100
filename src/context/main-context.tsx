import type { Dispatch, ReactNode, SetStateAction } from "react";
import { createContext, useMemo, useState } from "react";

interface MainProps {
  valueshowmode: string;
  setValueShowMode: Dispatch<SetStateAction<string>>;
  showoutgame: boolean;
  showfinishgame: string;
  setShowOutGame: Dispatch<SetStateAction<boolean>>;
  setShowFinishGame: Dispatch<SetStateAction<string>>;
  idinvitation: number;
  setIDInvitation: Dispatch<SetStateAction<number>>;
}

export const MainContext = createContext({} as MainProps);

export const MainProvider = ({ children }: { children: ReactNode }) => {
  const [valueshowmode, setValueShowMode] = useState("");
  const [showoutgame, setShowOutGame] = useState(false);
  const [showfinishgame, setShowFinishGame] = useState("");
  const [idinvitation, setIDInvitation] = useState(0);
  const value = useMemo(
    () => ({
      valueshowmode,
      setValueShowMode,
      showoutgame,
      setShowOutGame,
      showfinishgame,
      setShowFinishGame,
      idinvitation,
      setIDInvitation,
    }),
    [
      valueshowmode,
      setValueShowMode,
      showoutgame,
      setShowOutGame,
      showfinishgame,
      setShowFinishGame,
      idinvitation,
      setIDInvitation,
    ]
  );
  return <MainContext.Provider value={value}>{children}</MainContext.Provider>;
};
