import { useState, useEffect } from "react";

declare global {
  interface Window {
    onSpotifyPlayerAPIReady: any;
    Spotify: any;
  }
}

type Hook = (token: string | null) => string | null;

const usePlayer: Hook = token => {
  const [deviceId, setDeviceId] = useState<string | null>(null);

  useEffect(() => {
    if (!token || deviceId) return;

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

        player.on(
          "initialization_error",
          ({ message }: { message: string }) => {
            console.log({
              success: false,
              action: "initialization",
              message
            });
          }
        );

        player.on("ready", ({ device_id }: { device_id: string }) => {
          console.log({
            success: true,
            action: "device ready",
            message: `Successfully initialized on deviceId: ${device_id}`
          });

          setDeviceId(device_id);
        });

        player.connect();
      };
    };
    document.body.append(script);
  }, [token, deviceId]);

  return deviceId;
};

export default usePlayer;
