export const stringCut = (str: string, end?: number) => {
  if (end && str.length > end) {
    return str.substring(0, end) + "...";
  }
  return str;
};
