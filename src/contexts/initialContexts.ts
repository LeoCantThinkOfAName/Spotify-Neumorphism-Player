import { MyPlaylist } from "../types/playlist";

export type ThemeType = {
  theme: string;
};

export type SpotifyType = {
  token: string | null;
  playlist: MyPlaylist[];
};

export const initialSpotifyContext: SpotifyType = {
  token: null,
  playlist: [],
};

export const initialTheme: ThemeType = { theme: "#ff0037" };
