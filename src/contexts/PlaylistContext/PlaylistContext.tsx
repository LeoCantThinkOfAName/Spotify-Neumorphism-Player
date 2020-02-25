import React, { createContext, FC, useReducer } from "react";

// context
import { initialPlaylist, PlaylistType } from "../initialContexts";

// reducer
import playlistReducer, { PlaylistAction } from "./PlaylistReducer";

interface PlaylistContextType extends PlaylistType {
  dispatchPlaylist: React.Dispatch<PlaylistAction>;
}

export const PlaylistContext = createContext<PlaylistContextType>(
  {} as PlaylistContextType
);

export const PlaylistProvider: FC = ({ children }) => {
  const [{ playlist, currentId }, dispatchPlaylist] = useReducer(
    playlistReducer,
    initialPlaylist
  );

  return (
    <PlaylistContext.Provider value={{ playlist, currentId, dispatchPlaylist }}>
      {children}
    </PlaylistContext.Provider>
  );
};
