import React, { createContext, FC, useReducer } from "react";

// type
import { MyPlaylist } from "../../types/playlist";

// context
import { initialPlaylist } from "../initialContexts";

// reducer
import playlistReducer, { PlaylistAction } from "./PlaylistReducer";

export type PlaylistContextType = {
  playlist: MyPlaylist[];
  currentId: string;
  dispatchPlaylist: React.Dispatch<PlaylistAction>;
};

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
