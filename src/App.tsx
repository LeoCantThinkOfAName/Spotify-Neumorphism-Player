import React, { useState, useEffect, useRef } from "react";

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
import playMusic from "./utils/playMusic";

declare global {
  interface Window {
    onSpotifyPlayerAPIReady: any;
    Spotify: any;
  }
}

const App = () => {
  const [token, setToken] = useState<string | null>(null);
  const [theme, setTheme] = useState<string>("#ff5e00");
  const player = useRef<any>(null);

  useEffect(() => {
    if (token) {
      const script = document.createElement("script");
      script.src = "https://sdk.scdn.co/spotify-player.js";
      script.charset = "utf-8";
      script.async = true;
      script.onload = () => {
        window.onSpotifyPlayerAPIReady = () => {
          player.current = new window.Spotify.Player({
            name: "web-player",
            getOAuthToken: (callback: any) => callback(token),
          });

          player.current.on("ready", ({ device_id }: { device_id: string }) => {
            playMusic(device_id, token);
          });

          player.current.connect();
        };
      };
      document.body.append(script);
    }
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
