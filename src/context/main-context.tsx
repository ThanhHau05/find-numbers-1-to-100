import type { Dispatch, ReactNode, SetStateAction } from 'react';
import { createContext, useMemo, useState } from 'react';

interface MainProps {
  valueshowmode: string;
  setValueShowMode: Dispatch<SetStateAction<string>>;
}

export const MainContext = createContext({} as MainProps);

export const MainProvider = ({ children }: { children: ReactNode }) => {
  const [valueshowmode, setValueShowMode] = useState('');
  const value = useMemo(
    () => ({
      valueshowmode,
      setValueShowMode,
    }),
    [valueshowmode, setValueShowMode],
  );
  return <MainContext.Provider value={value}>{children}</MainContext.Provider>;
};
