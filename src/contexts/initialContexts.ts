import { MyPlaylist } from "../types/playlist";
export type ThemeType = {
  theme: string;
};

export type SpotifyType = {
  token: string | null;
  deviceId: string | null;
  playlistId: string;
};

export type PlaylistType = {
  playlist: MyPlaylist[];
  currentId: string;
};

export const initialSpotifyContext: SpotifyType = {
  token: null,
  deviceId: null,
  playlistId: "4GMQCtlmLaR8Any2pmMPPw"
};

export const initialTheme: ThemeType = { theme: "#ff0037" };

export const initialPlaylist: PlaylistType = { playlist: [], currentId: "" };
