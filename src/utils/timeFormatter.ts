export const timeformater = (time: number): string => {
  return time < 10 ? `0${time}` : time.toString();
};

export const progressFormatter = (time: number): string => {
  const minutes = Math.floor(time / 60);
  const seconds = Math.round(time - minutes * 60);

  return `${timeformater(minutes)}:${timeformater(seconds)}`;
};
