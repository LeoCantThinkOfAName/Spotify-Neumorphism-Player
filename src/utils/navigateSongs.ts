type Func = ({
  direction,
  token,
  deviceId
}: {
  direction: "next" | "previous";
  deviceId: string | null;
  token: string | null;
}) => void;

const navigateSongs: Func = ({ direction, deviceId, token }) => {
  if (!token) return null;
  fetch(
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
  });
};

export default navigateSongs;
