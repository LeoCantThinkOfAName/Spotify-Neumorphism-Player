import React, { useEffect, useReducer } from "react";

// context
import {
  ThemeContext,
  SpotifyContext,
  PlaylistContext
} from "./contexts/GlobalContext";

// components
import Screen from "./components/Screen/index";
import Body from "./components/Body";
import Cord from "./components/Cord";
import Palette from "./components/Palette";
import ControlPanel from "./components/ControlPanel";

// reducers
import themeReducer from "./reducers/ThemeReducer";
import spotifyReducer from "./reducers/SpotifyReducer";
import playlistReducer from "./reducers/PlaylistReducer";

// initial context
import {
  initialTheme,
  initialSpotifyContext,
  initialPlaylist
} from "./contexts/initialContexts";

// custom hook
import usePlayer from "./hooks/usePlayer";

// action types
import { SET_DEVICE_ID } from "./reducers/actionTypes";

// utilities
import playMusic from "./utils/playMusic";

const App = () => {
  const [{ theme }, dispatchTheme] = useReducer(themeReducer, initialTheme);
  const [{ token, playlistId, deviceId }, dispatchSpotify] = useReducer(
    spotifyReducer,
    initialSpotifyContext
  );
  const [{ playlist, currentId }, dispatchPlaylist] = useReducer(
    playlistReducer,
    initialPlaylist
  );
  const device_id = usePlayer(token);

  useEffect(() => {
    if (device_id) dispatchSpotify({ type: SET_DEVICE_ID, payload: device_id });
    if (token && device_id) {
      playMusic({ deviceId: device_id, token, playlistId });
    }
  }, [device_id, token, playlistId]);

  return (
    <ThemeContext.Provider value={{ theme, dispatchTheme }}>
      <SpotifyContext.Provider
        value={{ token, playlistId, deviceId, dispatchSpotify }}
      >
        <PlaylistContext.Provider
          value={{ playlist, currentId, dispatchPlaylist }}
        >
          <div className="App">
            <Palette />
            <Body bg={theme}>
              <Cord color={theme} />
              <Screen
                height={260}
                width={240}
                powerOn={token ? true : false}
                token={token}
                playlistId={playlistId}
              ></Screen>
              <ControlPanel />
            </Body>
          </div>
        </PlaylistContext.Provider>
      </SpotifyContext.Provider>
    </ThemeContext.Provider>
  );
};

export default App;
