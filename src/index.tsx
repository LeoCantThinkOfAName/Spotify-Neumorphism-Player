import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import { ThemeProvider } from "./contexts/ThemeContext";
import { SpotifyProvider } from "./contexts/SpotifyContext";
import { PlaylistProvider } from "./contexts/PlaylistContext";

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
