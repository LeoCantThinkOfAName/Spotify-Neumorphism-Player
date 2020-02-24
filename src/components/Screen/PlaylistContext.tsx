import { createContext } from "react";

// types
import { MyPlaylist } from "../../types/playlist";

export type PlaylistContextType = {
  playlist: MyPlaylist[];
};

const PlaylistContext = createContext<PlaylistContextType>(
  {} as PlaylistContextType
);

export default PlaylistContext;
