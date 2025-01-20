const getMonth = () => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const date = new Date();
  let currentMonth = date.getMonth();
  return months[currentMonth];
};
export default getMonth;
const getMonthNumber = () => {
  const months = {
    0: "01",
    1: "02",
    2: "03",
    3: "04",
    4: "05",
    5: "06",
    6: "07",
    7: "08",
    8: "09",
    9: "10",
    10: "11",
    11: "12",
  };
  const date = new Date();
  let currentMonth = date.getMonth();
  currentMonth = months[currentMonth];

  return currentMonth;
};
export { getMonthNumber };
