export type IArtist = {
  external_urls: string;
  href: string;
  id: string;
  name: string;
  type: string;
  uri: string;
};

export type IImage = {
  height: number;
  width: number;
  url: string;
};

export type IAlbum = {
  name: string;
  artists: IArtist[];
  href: string;
  images: IImage[];
};

export type ITrack = {
  track: {
    id: string;
    name: string;
    duration_ms: number;
    album: IAlbum;
  };
};

export type IPlaylist = {
  items: ITrack[];
};
