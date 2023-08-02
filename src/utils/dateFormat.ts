import dayjs from "dayjs";

export const dateFormat = (date: Date) => {
  return dayjs(date).format("DD/MM/YYYY");
};
