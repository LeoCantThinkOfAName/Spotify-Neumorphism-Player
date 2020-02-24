import { MyPlaylist } from "../types/playlist";
import { SET_PLAYLIST } from "./actionTypes";

export type PlaylistAction = {
  type: typeof SET_PLAYLIST;
  payload: MyPlaylist[];
};

const playlistReducer: React.Reducer<MyPlaylist[], PlaylistAction> = (
  state,
  action
) => {
  switch (action.type) {
    case SET_PLAYLIST:
      return action.payload;
    default:
      return state;
  }
};

export default playlistReducer;
