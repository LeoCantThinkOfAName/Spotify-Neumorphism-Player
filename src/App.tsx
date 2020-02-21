import React, { useState, useEffect, useRef } from "react";

// context
import { GlobalContext } from "./contexts/GlobalContext";

// components
import Screen from "./components/Screen/index";
import Container from "./components/Container";
import Button from "./components/Button/index";
import Body from "./components/Body";
import Header from "./components/Header/index";
import LoginButton from "./components/LoginButton/index";

// utilities
import playAlbum from "./utils/playAlbum";

declare global {
  interface Window {
    onSpotifyPlayerAPIReady: any;
    Spotify: any;
  }
}

const App = () => {
  const [token, setToken] = useState<string | null>(null);
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
            getOAuthToken: (callback: any) => callback(token)
          });

          player.current.on("ready", ({ device_id }: { device_id: string }) => {
            playAlbum(device_id, token);
          });

          player.current.connect();
        };
      };
      document.body.append(script);
    }
  }, [token]);

  return (
    <GlobalContext.Provider value={{ token, setToken }}>
      <div className="App">
        <Body bg="#b51d2f">
          <Screen height={250} width={220}>
            <Header />
            {!token && <LoginButton />}
          </Screen>
          <Container direction="row">
            <Button size={50} bg="#b51d2f">
              Prev
            </Button>
            <Button size={70} bg="#b51d2f">
              Play
            </Button>
            <Button size={50} bg="#b51d2f">
              Next
            </Button>
          </Container>
        </Body>
      </div>
    </GlobalContext.Provider>
  );
};

export default App;
