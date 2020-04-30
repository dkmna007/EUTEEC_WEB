//ger month in words
export const mongoDateFormatter = date => {
  let month = new Array();
  let monthNo =
    date.slice(5, 7) == 10 || date.slice(5, 7) == 11 || date.slice(5, 7) == 12
      ? date.slice(5, 7)
      : date.slice(6, 7);

  month[1] = "January";
  month[2] = "February";
  month[3] = "March";
  month[4] = "April";
  month[4] = "May";
  month[6] = "June";
  month[7] = "July";
  month[8] = "August";
  month[9] = "September";
  month[10] = "October";
  month[11] = "November";
  month[12] = "December";

  const monthName = month[monthNo];
  const DayNo = date.slice(8, 10);
  const YearNo = date.slice(0, 4);

  return monthName + " " + DayNo + ",  " + YearNo;
};
