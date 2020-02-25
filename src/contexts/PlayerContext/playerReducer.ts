import React from "react";

// context type
import { PlayerType } from "../initialContexts";

// action type
import { SET_PAUSE, SET_POSITION } from "../actionTypes";

export type PlayerActionType =
  | {
      type: typeof SET_PAUSE;
      payload: boolean;
    }
  | {
      type: typeof SET_POSITION;
      payload: number;
    };

export const playerReducer: React.Reducer<PlayerType, PlayerActionType> = (
  state,
  action
) => {
  switch (action.type) {
    case SET_PAUSE:
      return { ...state, pause: action.payload };
    case SET_POSITION:
      return { ...state, currentPosition: action.payload };
    default:
      return state;
  }
};
