import React, { createContext } from "react";
import { ThemeAction } from "../reducers/ThemeReducer";
import { SpotifyAction } from "../reducers/SpotifyReducer";

export type GlobalContextType = {
  theme: string;
  token: string | null;
  dispatchTheme: React.Dispatch<ThemeAction>;
  dispatchSpotify: React.Dispatch<SpotifyAction>;
};

export const GlobalContext = createContext<GlobalContextType>(
  {} as GlobalContextType
);
