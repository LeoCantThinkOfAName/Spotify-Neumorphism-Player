import getCurrentSong from "./getCurrentSong";
type Func = ({
  direction,
  token,
  deviceId
}: {
  direction: "next" | "previous";
  deviceId: string | null;
  token: string | null;
}) => Promise<string | null> | null;

const navigateSongs: Func = async ({ direction, deviceId, token }) => {
  if (!token) return null;
  const next = await fetch(
    `https://api.spotify.com/v1/me/player/${direction}?device_id=${deviceId}`,
    {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      },
      method: "POST"
    }
  ).then(res => {
    console.log({
      success: true,
      action: `Navigate to ${direction} song.`,
      message: res
    });
    return true;
  });

  if (!next) return null;
  const id = await getCurrentSong(token);

  return id;
};

export default navigateSongs;
