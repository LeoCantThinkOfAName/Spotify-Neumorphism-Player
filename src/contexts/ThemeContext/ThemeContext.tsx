import React, { createContext, FC, useReducer } from "react";

// context
import { initialTheme, ThemeType } from "../initialContexts";

// reducer
import themeReducer, { ThemeAction } from "./ThemeReducer";

interface ThemeContextType extends ThemeType {
  dispatchTheme: React.Dispatch<ThemeAction>;
}

export const ThemeContext = createContext<ThemeContextType>(
  {} as ThemeContextType
);

export const ThemeProvider: FC = ({ children }) => {
  const [{ theme }, dispatchTheme] = useReducer(themeReducer, initialTheme);

  return (
    <ThemeContext.Provider value={{ theme, dispatchTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
