//to convert millisecond to seconds
export const convertDateToUnixTimestamp = (date) => {
  return Math.floor(date.getTime() / 1000);
};

//display this time value to the user
export const convertUnixTimestampToDate = (unixTimestamp) => {
  const milliseconds = unixTimestamp * 1000;
  return new Date(milliseconds).toLocaleDateString();
};

//start date and end date, provide this to the finnhub api
export const createDate = (date, days, weeks, months, years) => {
  let newDate = new Date(date);
  newDate.setDate(newDate.getDate() + days + 7 * weeks);
  newDate.setMonth(newDate.getMonth() + months);
  newDate.setFullYear(newDate.getFullYear() + years);
};
