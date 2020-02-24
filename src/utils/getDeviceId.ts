type Func = (token: string) => string;

const getDeviceId: Func = token => {
  fetch("https://api.spotify.com/v1/me/player/devices", {
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json"
    }
  })
    .then(res => res.json())
    .then(res => {
      console.log(res);
    });

  return "";
};

export default getDeviceId;
