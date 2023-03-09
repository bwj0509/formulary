import dayjs from "dayjs";

export const getTime = (date) => {
  return dayjs(date).format("HH:mm");
};
