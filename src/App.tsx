import React, { useEffect, useReducer } from "react";

// context
import { GlobalContext } from "./contexts/GlobalContext";

// components
import Screen from "./components/Screen/index";
import Container from "./components/Container";
import Button from "./components/Button/index";
import Body from "./components/Body";
import Cord from "./components/Cord";
import Palette from "./components/Palette";

// reducers
import themeReducer from "./reducers/ThemeReducer";
import spotifyReducer from "./reducers/SpotifyReducer";

// initial context
import {
  initialTheme,
  initialSpotifyContext,
} from "./contexts/initialContexts";

// utilities
import initPlayer from "./utils/initPlayer";

const App = () => {
  const [{ theme }, dispatchTheme] = useReducer(themeReducer, initialTheme);
  const [{ token }, dispatchSpotify] = useReducer(
    spotifyReducer,
    initialSpotifyContext
  );

  useEffect(() => {
    if (!token) return;
    initPlayer({ token, playlistId: "4GMQCtlmLaR8Any2pmMPPw" });
  }, [token]);

  return (
    <GlobalContext.Provider
      value={{ token, theme, dispatchTheme, dispatchSpotify }}
    >
      <div className="App">
        <Palette />
        <Body bg={theme}>
          <Cord color={theme} />
          <Screen
            height={260}
            width={240}
            powerOn={token ? true : false}
          ></Screen>
          <Container direction="row">
            <Button size={50} bg={theme} title="Previous track">
              Prev
            </Button>
            <Button size={70} bg={theme} title="Play/Pause">
              Play
            </Button>
            <Button size={50} bg={theme} title="Next track">
              Next
            </Button>
          </Container>
        </Body>
      </div>
    </GlobalContext.Provider>
  );
};

export default App;
