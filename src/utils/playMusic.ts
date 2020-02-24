type IProp = {
  deviceId: string;
  token: string;
  playlistId: string;
};

const playMusic = ({ deviceId, token, playlistId }: IProp) => {
  fetch(`https://api.spotify.com/v1/me/player/play?device_id=${deviceId}`, {
    method: "PUT",
    // @ts-ignore
    body: `{"context_uri":"spotify:playlist:${playlistId}"}`,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
      Accept: "application/json"
    }
  }).then((data: any) =>
    console.log({
      success: true,
      action: "Play with spotify",
      message: `Start playlist ${playlistId} on device ${deviceId}`
    })
  );
};

export default playMusic;
