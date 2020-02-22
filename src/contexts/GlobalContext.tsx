import React, { createContext } from "react";

export interface ContextType {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>> | any;
  token: string | null;
  setToken: React.Dispatch<React.SetStateAction<string | null>> | any;
}

export const GlobalContext = createContext<ContextType>({
  theme: "",
  setTheme: null,
  token: null,
  setToken: null,
});
