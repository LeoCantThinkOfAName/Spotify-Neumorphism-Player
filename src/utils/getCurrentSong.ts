type Func = (token: string) => Promise<string | null>;

const getCurrentSong: Func = async token => {
  const id = await fetch(
    "https://api.spotify.com/v1/me/player/currently-playing",
    {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      }
    }
  )
    .then(res => res.json())
    .then(res => {
      return res.item.id;
    });
  return id;
};

export default getCurrentSong;
