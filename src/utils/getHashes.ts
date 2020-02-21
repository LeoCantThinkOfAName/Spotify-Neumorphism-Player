interface HashType {
  access_token: string;
  token_type: string;
  expires_in: string;
}

const getHashes = (): HashType => {
  const hashString = window.location.hash;

  const hashObj = hashString
    .substring(1)
    .split("&")
    .reduce((initial: any, item: string) => {
      if (item) {
        const parts: string[] = item.split("=");
        initial[parts[0]] = decodeURIComponent(parts[1]);
      }
      return initial;
    }, {});

  return hashObj;
};

export default getHashes;
