function getTotalNumberOfDays(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}

function getStartDayofMonth(year: number, month: number) {
  return new Date(year, month, 1).getDay();
}

export default function getMonthInfo(year: number, month: number) {
  let startDay = getStartDayofMonth(year, month);
  let totalDay = getTotalNumberOfDays(year, month);

  let row = Math.ceil((startDay + totalDay) / 7);
  return { startDay, totalDay, row };
}
