import React, { createContext } from "react";

export interface ContextType {
  token: string | null;
  setToken: React.Dispatch<React.SetStateAction<string | null>> | any;
}

export const GlobalContext = createContext<ContextType>({
  token: null,
  setToken: null
});
