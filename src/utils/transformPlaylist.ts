import { IPlaylist } from "../types/spotify";
import { MyPlaylist } from "../types/playlist";

const transformPlaylist = (playlist: IPlaylist): MyPlaylist[] => {
  return playlist.items.map(({ track }) => {
    const { album } = track;
    return {
      id: track.id,
      artist: album.artists[0].name,
      albumName: album.name,
      thumbnail: album.images[1].url,
      duration: track.duration_ms,
      trackName: track.name,
    };
  });
};

export default transformPlaylist;
