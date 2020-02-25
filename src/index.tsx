import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";

// providers
import { ThemeProvider } from "./contexts/ThemeContext/ThemeContext";
import { SpotifyProvider } from "./contexts/SpotifyContext/SpotifyContext";
import { PlaylistProvider } from "./contexts/PlaylistContext/PlaylistContext";

ReactDOM.render(
  <SpotifyProvider>
    <PlaylistProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </PlaylistProvider>
  </SpotifyProvider>,
  document.getElementById("root")
);
