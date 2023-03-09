export const getDate = (date) => {
  return new Date(date).getDate().toString().padStart(2, "0");
};
