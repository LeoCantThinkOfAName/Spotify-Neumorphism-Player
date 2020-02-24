import React, { createContext } from "react";
import { ThemeAction } from "../reducers/ThemeReducer";
import { SpotifyAction } from "../reducers/SpotifyReducer";

export type SpotifyContextType = {
  token: string | null;
  playlistId: string;
  dispatchSpotify: React.Dispatch<SpotifyAction>;
};

export type ThemeContextType = {
  theme: string;
  dispatchTheme: React.Dispatch<ThemeAction>;
};

export const SpotifyContext = createContext<SpotifyContextType>(
  {} as SpotifyContextType
);

export const ThemeContext = createContext<ThemeContextType>(
  {} as ThemeContextType
);
