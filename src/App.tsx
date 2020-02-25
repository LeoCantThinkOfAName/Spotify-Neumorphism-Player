import React, { useEffect, useContext } from "react";

// context
import { ThemeContext } from "./contexts/ThemeContext";
import { SpotifyContext } from "./contexts/SpotifyContext";

// components
import Screen from "./components/Screen/index";
import Body from "./components/Body";
import Cord from "./components/Cord";
import Palette from "./components/Palette";
import ControlPanel from "./components/ControlPanel";

// custom hook
import usePlayer from "./hooks/usePlayer";

// action types
import { SET_DEVICE_ID } from "./reducers/actionTypes";

// utilities
import playMusic from "./utils/playMusic";

const App = () => {
  const { theme } = useContext(ThemeContext);
  const { token, playlistId, dispatchSpotify } = useContext(SpotifyContext);
  const device_id = usePlayer(token);

  useEffect(() => {
    if (device_id) dispatchSpotify({ type: SET_DEVICE_ID, payload: device_id });
    if (token && device_id) {
      playMusic({ deviceId: device_id, token, playlistId });
    }
  }, [device_id, token, playlistId, dispatchSpotify]);

  return (
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
  );
};

export default App;
