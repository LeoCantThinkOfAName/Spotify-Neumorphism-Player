import React, { createContext, FC, useReducer } from "react";

// context type
import { initialPlayer, PlayerType } from "../initialContexts";

// reducer
import { playerReducer, PlayerActionType } from "./playerReducer";

interface PlayerContextType extends PlayerType {
  dispatchPlayer: React.Dispatch<PlayerActionType>;
}

export const PlayerContext = createContext({} as PlayerContextType);

export const PlayerProvider: FC = ({ children }) => {
  const [{ pause, position }, dispatchPlayer] = useReducer(
    playerReducer,
    initialPlayer
  );

  return (
    <PlayerContext.Provider value={{ pause, position, dispatchPlayer }}>
      {children}
    </PlayerContext.Provider>
  );
};
