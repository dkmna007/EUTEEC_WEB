export const toThumbnail = str => {
  if (!str) {
    return false;
  }
  const start = 0;
  const size = str.length - 4;
  const extracted = str.slice(start, size);

  return `${extracted}.jpg`;
};
export const toVideo = str => {
  if (!str) {
    return false;
  }
  const start = 0;
  const size = str.length - 4;
  const extracted = str.slice(start, size);

  return `${extracted}.mp4`;
};
