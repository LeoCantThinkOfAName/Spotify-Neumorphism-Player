import React, { createContext, FC, useReducer } from "react";

// context
import { initialSpotifyContext, SpotifyType } from "../initialContexts";

// reducer
import spotifyReducer, { SpotifyAction } from "./SpotifyReducer";

interface SpotifyContextType extends SpotifyType {
  dispatchSpotify: React.Dispatch<SpotifyAction>;
}

export const SpotifyContext = createContext<SpotifyContextType>(
  {} as SpotifyContextType
);

export const SpotifyProvider: FC = ({ children }) => {
  const [{ token, deviceId, playlistId }, dispatchSpotify] = useReducer(
    spotifyReducer,
    initialSpotifyContext
  );

  return (
    <SpotifyContext.Provider
      value={{ token, deviceId, playlistId, dispatchSpotify }}
    >
      {children}
    </SpotifyContext.Provider>
  );
};
