import { useState, useEffect } from "react";

// types
import { IPlaylist } from "../types/spotify";
import { MyPlaylist } from "../types/playlist";

// utilities
import transformPlaylist from "../utils/transformPlaylist";

type Hook = ({
  token,
  playlistId
}: {
  token: string | null;
  playlistId: string;
}) => MyPlaylist[] | null;

// playlistId = 4GMQCtlmLaR8Any2pmMPPw;

const usePlaylist: Hook = ({ token, playlistId }) => {
  const [playlist, setPlaylist] = useState<MyPlaylist[] | null>(null);

  useEffect(() => {
    if (token) {
      fetch(
        `https://api.spotify.com/v1/playlists/${playlistId}/tracks?fields=items(track(id%2Cname%2Cduration_ms%2Calbum(artists%2Chref%2Cimages%2Cname)))`,
        {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json"
          }
        }
      )
        .then((data: any) => data.json())
        .then((res: IPlaylist) => setPlaylist(transformPlaylist(res)));
    }
  }, [token, playlistId]);

  return playlist;
};

export default usePlaylist;
