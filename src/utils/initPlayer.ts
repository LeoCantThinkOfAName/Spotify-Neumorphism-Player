import playMusic from "../utils/playMusic";

declare global {
  interface Window {
    onSpotifyPlayerAPIReady: any;
    Spotify: any;
  }
}

type Func = ({
  token,
  playlistId
}: {
  token: string | null;
  playlistId: string;
}) => void;

const initPlayer: Func = async ({ token, playlistId }) => {
  if (!token) return;

  const script = document.createElement("script");
  script.src = "https://sdk.scdn.co/spotify-player.js";
  script.charset = "utf-8";
  script.async = true;
  script.onload = () => {
    window.onSpotifyPlayerAPIReady = () => {
      const player = new window.Spotify.Player({
        name: "LCTOAN Walkmeh",
        getOAuthToken: (callback: any) => callback(token)
      });

      player.on("initialization_error", ({ message }: { message: string }) => {
        console.log({
          success: false,
          action: "initialization",
          message
        });
      });

      player.on("ready", ({ device_id }: { device_id: string }) => {
        console.log({
          success: true,
          action: "device ready",
          message: `Successfully initialized on deviceId: ${device_id}`
        });
        playMusic({
          deviceId: device_id,
          token,
          playlistId
        });
      });

      player.connect();
    };
  };
  document.body.append(script);
};

export default initPlayer;
