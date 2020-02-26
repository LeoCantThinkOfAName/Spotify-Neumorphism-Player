export const timeformater = (time: number): string => {
  return time < 10 ? `0${time}` : time.toString();
};

export const progressFormatter = (time: number): string => {
  const baseTime = time / 1000;
  const minutes = Math.floor(baseTime / 60);
  const seconds = Math.round(baseTime - minutes * 60);

  return `${timeformater(minutes)}:${timeformater(seconds)}`;
};
