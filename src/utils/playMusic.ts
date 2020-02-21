const playMusic = (device_id: string, token: string) => {
  fetch(`https://api.spotify.com/v1/me/player/play?device_id=${device_id}`, {
    method: "PUT",
    // @ts-ignore
    body: '{"context_uri":"spotify:playlist:4GMQCtlmLaR8Any2pmMPPw"}',
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
      Accept: "application/json"
    }
  }).then((data: any) => console.log(data));
};

export default playMusic;
