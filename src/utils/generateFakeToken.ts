import dayjs from "dayjs";

export const generateFakeToken = () => {
  const string = new Date().toString() + dayjs().format("DD/MM/YYYY");
  const encoder = new TextEncoder();
  const bytes = encoder.encode(string);
  const hexString = Array.from(bytes)
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
  return hexString;
};
