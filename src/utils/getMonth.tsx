export const getMonthName = (date: string) => {
  let month = date.split("-")[1];
  console.log();
  const months = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ];

  return months[Number(month) - 1];
};
