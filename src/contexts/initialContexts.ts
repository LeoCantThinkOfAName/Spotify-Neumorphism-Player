export type ThemeType = {
  theme: string;
};

export type SpotifyType = {
  token: string | null;
  playlistId: string;
};

export const initialSpotifyContext: SpotifyType = {
  token: null,
  playlistId: "4GMQCtlmLaR8Any2pmMPPw"
};

export const initialTheme: ThemeType = { theme: "#ff0037" };
