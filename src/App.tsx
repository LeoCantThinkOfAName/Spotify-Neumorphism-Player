import React, { useState, useEffect } from "react";

// context
import { GlobalContext } from "./contexts/GlobalContext";

// components
import Screen from "./components/Screen/index";
import Container from "./components/Container";
import Button from "./components/Button/index";
import Body from "./components/Body";
import Cord from "./components/Cord";
import Palette from "./components/Palette";

// utilities
import initPlayer from "./utils/initPlayer";

// custom hooks
import usePlaylist from "./hooks/usePlaylist";

declare global {
  interface Window {
    onSpotifyPlayerAPIReady: any;
    Spotify: any;
  }
}

const App = () => {
  const [token, setToken] = useState<string | null>(null);
  const [theme, setTheme] = useState<string>("#ff5e00");
  const playlist = usePlaylist({ token, playlistId: "4GMQCtlmLaR8Any2pmMPPw" });

  useEffect(() => {
    if (!token) return;
    initPlayer({ token, playlistId: "4GMQCtlmLaR8Any2pmMPPw" });
  }, [token]);

  return (
    <GlobalContext.Provider value={{ theme, setTheme, token, setToken }}>
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
