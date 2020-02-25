import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";

// providers
import { ThemeProvider } from "./contexts/ThemeContext/ThemeContext";
import { SpotifyProvider } from "./contexts/SpotifyContext/SpotifyContext";
import { PlaylistProvider } from "./contexts/PlaylistContext/PlaylistContext";
import { PlayerProvider } from "./contexts/PlayerContext/PlayerContext";

ReactDOM.render(
  <ThemeProvider>
    <SpotifyProvider>
      <PlaylistProvider>
        <PlayerProvider>
          <App />
        </PlayerProvider>
      </PlaylistProvider>
    </SpotifyProvider>
  </ThemeProvider>,
  document.getElementById("root")
);
