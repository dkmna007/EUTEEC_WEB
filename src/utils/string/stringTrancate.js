//get truncated string
export const truncateString = (str, num) => {
  if (!str) {
    return false;
  }

  if (str.length <= num) {
    return str;
  }
  return str.slice(0, num) + "...";
};
