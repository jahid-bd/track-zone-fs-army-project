const getUtcOffset = (date, time) => {
  const dateArr = date.split("-");
  const timeArr = time.split(":");

  const year = Number(dateArr[0]);
  const month = Number(dateArr[1]) - 1;
  const days = Number(dateArr[2]);

  const hour = Number(timeArr[0]);
  const minute = Number(timeArr[1]);
  const seconds = timeArr[2] ? Number(timeArr[2]) : Number(`00`);

  const nDate = new window.Date(year, month, days, hour, minute, seconds);

  const local = new window.Date();

  const difference = local.getTime() - nDate.getTime();

  let gmt = local.getTimezoneOffset();

  if (gmt > 0) {
    gmt = -Math.abs(gmt);
  } else {
    gmt = Math.abs(gmt);
  }

  const offset = Number(gmt) / 60 - difference / 3600000;

  return offset.toFixed(2);
};

export default getUtcOffset;
