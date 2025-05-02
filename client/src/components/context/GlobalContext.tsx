import React, { createContext, FC, useContext, useMemo, useState } from "react";
import { ThemeMode } from "../../types/types";
import { theme, ThemeConfig } from "antd";

interface GlobalContextProps {
  themeMode: ThemeMode;
  setThemeMode: (mode: ThemeMode) => void;
  appTheme: ThemeConfig;
}

const globalContext = createContext<GlobalContextProps | undefined>(undefined);

interface GlobalProviderProps {
  children: React.ReactNode;
}

const GlobalContext: FC<GlobalProviderProps> = ({ children }) => {
  const [themeMode, setThemeMode] = useState<ThemeMode>("default");

  const appTheme: ThemeConfig = {
    token: {
      colorPrimary: "#1c398e",
    },
    algorithm:
      themeMode == "dark" ? theme?.darkAlgorithm : theme?.defaultAlgorithm,
  };

  const values = useMemo(() => {
    return { themeMode, setThemeMode, appTheme };
  }, [themeMode, setThemeMode, appTheme]);

  return (
    <globalContext.Provider value={values}>{children}</globalContext.Provider>
  );
};

export default GlobalContext;

export const useGlobalContext = () => {
  const context = useContext(globalContext);

  if (context == undefined) {
    throw new Error("No Context found!");
  }

  return context;
};
