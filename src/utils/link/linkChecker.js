export const linkChecker = str => {
  const end = str.length - 4;
  const size = str.length - end;

  return str.slice(0, size);
};
