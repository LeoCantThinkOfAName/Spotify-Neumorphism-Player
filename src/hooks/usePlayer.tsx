import { useEffect, useContext, useRef } from "react";

// context
import { PlaylistContext } from "../contexts/PlaylistContext/PlaylistContext";
import { SpotifyContext } from "../contexts/SpotifyContext/SpotifyContext";
import { PlayerContext } from "../contexts/PlayerContext/PlayerContext";

// action type
import {
  SET_DEVICE_ID,
  SET_CURRENT_ID,
  SET_POSITION
} from "../contexts/actionTypes";

declare global {
  interface Window {
    onSpotifyPlayerAPIReady: any;
    Spotify: any;
  }
}

type Hook = () => string | null;

const usePlayer: Hook = () => {
  const { token, deviceId, dispatchSpotify } = useContext(SpotifyContext);
  const { currentId, dispatchPlaylist } = useContext(PlaylistContext);
  const { currentPosition, pause, dispatchPlayer } = useContext(PlayerContext);
  const player = useRef<any>(null);

  useEffect(() => {
    if (player.current) {
      player.current.togglePlay();
    }
  }, [pause]);

  useEffect(() => {
    if (!token || deviceId) return;

    const script = document.createElement("script");
    script.src = "https://sdk.scdn.co/spotify-player.js";
    script.charset = "utf-8";
    script.async = true;
    script.onload = () => {
      window.onSpotifyPlayerAPIReady = () => {
        player.current = new window.Spotify.Player({
          name: "LCTOAN Walkmeh",
          getOAuthToken: (callback: any) => callback(token)
        });

        player.current.on(
          "initialization_error",
          ({ message }: { message: string }) => {
            console.log({
              success: false,
              action: "initialization",
              message
            });
          }
        );

        player.current.on("ready", ({ device_id }: { device_id: string }) => {
          console.log({
            success: true,
            action: "device ready",
            message: `Successfully initialized on deviceId: ${device_id}`
          });

          dispatchSpotify({ type: SET_DEVICE_ID, payload: device_id });
        });

        player.current.on(
          "player_state_changed",
          ({
            position,
            duration,
            track_window: {
              current_track: { id }
            }
          }: {
            position: number;
            duration: number;
            track_window: { current_track: { id: string } };
          }) => {
            if (currentId !== id) {
              dispatchPlaylist({ type: SET_CURRENT_ID, payload: id });
            }

            dispatchPlayer({ type: SET_POSITION, payload: position });
          }
        );

        player.current.connect();
      };
    };
    document.body.append(script);
  }, [
    token,
    pause,
    deviceId,
    currentId,
    currentPosition,
    dispatchSpotify,
    dispatchPlaylist,
    dispatchPlayer
  ]);

  return null;
};

export default usePlayer;
