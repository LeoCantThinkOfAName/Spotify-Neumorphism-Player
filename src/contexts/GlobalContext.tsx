import React, { createContext } from "react";
import { ThemeAction } from "../reducers/ThemeReducer";
import { SpotifyAction } from "../reducers/SpotifyReducer";
import { MyPlaylist } from "../types/playlist";
import { PlaylistAction } from "../reducers/PlaylistReducer";

export type SpotifyContextType = {
  token: string | null;
  deviceId: string | null;
  playlistId: string;
  dispatchSpotify: React.Dispatch<SpotifyAction>;
};

export type ThemeContextType = {
  theme: string;
  dispatchTheme: React.Dispatch<ThemeAction>;
};

export type PlaylistContextType = {
  playlist: MyPlaylist[];
  currentId: string;
  dispatchPlaylist: React.Dispatch<PlaylistAction>;
};

export const SpotifyContext = createContext<SpotifyContextType>(
  {} as SpotifyContextType
);

export const ThemeContext = createContext<ThemeContextType>(
  {} as ThemeContextType
);

export const PlaylistContext = createContext<PlaylistContextType>(
  {} as PlaylistContextType
);
