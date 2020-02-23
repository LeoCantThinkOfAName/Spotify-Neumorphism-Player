import playMusic from "../utils/playMusic";

declare global {
  interface Window {
    onSpotifyPlayerAPIReady: any;
    Spotify: any;
  }
}

type Func = ({
  token,
  playlistId,
}: {
  token: string | null;
  playlistId: string;
}) => void;

const initPlayer: Func = ({ token, playlistId }) => {
  if (!token) return;

  const script = document.createElement("script");
  script.src = "https://sdk.scdn.co/spotify-player.js";
  script.charset = "utf-8";
  script.async = true;
  script.onload = () => {
    window.onSpotifyPlayerAPIReady = () => {
      const player = new window.Spotify.Player({
        name: "web-player",
        getOAuthToken: (callback: any) => callback(token),
      });

      player.on("ready", ({ device_id }: { device_id: string }) => {
        playMusic({
          deviceId: device_id,
          token,
          playlistId,
        });
      });

      player.connect();
    };
  };
  document.body.append(script);
};

export default initPlayer;
