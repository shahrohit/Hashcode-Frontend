export default function createCalender(monthInfo: {
  row: number;
  startDay: number;
  totalDay: number;
}) {
  let calender: CalenderBoard = [];
  calender.length = monthInfo.row * 7;
  calender.fill(-1);

  let n = monthInfo.startDay + monthInfo.totalDay;
  for (let i = monthInfo.startDay; i < n; i++) {
    calender[i] = i - monthInfo.startDay + 1;
  }

  return calender;
}
