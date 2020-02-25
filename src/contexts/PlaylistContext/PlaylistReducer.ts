import { MyPlaylist } from "../../types/playlist";
import { SET_PLAYLIST, SET_CURRENT_ID } from "../actionTypes";
import { PlaylistType } from "../initialContexts";

export type PlaylistAction =
  | {
      type: typeof SET_PLAYLIST;
      payload: MyPlaylist[];
    }
  | {
      type: typeof SET_CURRENT_ID;
      payload: string;
    };

const playlistReducer: React.Reducer<PlaylistType, PlaylistAction> = (
  state,
  action
) => {
  switch (action.type) {
    case SET_PLAYLIST:
      return { ...state, playlist: action.payload };
    case SET_CURRENT_ID:
      return { ...state, currentId: action.payload };
    default:
      return state;
  }
};

export default playlistReducer;
