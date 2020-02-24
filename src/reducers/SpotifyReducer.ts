import { SET_TOKEN, SET_PLAYLIST_ID } from "./actionTypes";
import { SpotifyType } from "../contexts/initialContexts";

export type SpotifyAction =
  | {
      type: typeof SET_TOKEN;
      payload: string;
    }
  | {
      type: typeof SET_PLAYLIST_ID;
      payload: string;
    };

const spotifyReducer: React.Reducer<SpotifyType, SpotifyAction> = (
  state,
  action
) => {
  switch (action.type) {
    case SET_TOKEN:
      return { ...state, token: action.payload };
    case SET_PLAYLIST_ID:
      return { ...state, playlistId: action.payload };
    default:
      return state;
  }
};

export default spotifyReducer;