export const formatTimestamp = (timestamp: number) => {
  const oneHourInSecs = 60 * 60;
  const now = Math.floor(Date.now() / 1000); //  timestamp in seconds
  const difference = timestamp - now;

  const weeks = Math.floor(difference / (oneHourInSecs * 24 * 7));
  const days = Math.floor(difference / (oneHourInSecs * 24));
  const hours = Math.floor((difference % (oneHourInSecs * 24)) / oneHourInSecs);
  const minutes = Math.floor((difference % oneHourInSecs) / 60);
  const seconds = difference % 60;

  return {
    weeks,
    days,
    hours,
    minutes,
    seconds,
  };
};
