const getBaseTime = (time, date, baseOffset) => {
  const dateArr = date.split("-");
  const timeArr = time.split(":");

  const year = Number(dateArr[0]);
  const month = Number(dateArr[1]) - 1;
  const day = Number(dateArr[2]);
  const hour = Number(timeArr[0]);
  const minute = Number(timeArr[1]);
  const seconds = Number(timeArr[2]) ? Number(timeArr[2]) : 0;

  const nDate = new window.Date(year, month, day, hour, minute, seconds);

  const timeMili = nDate.getTime();

  let diffMili = null;

  if (baseOffset > 0) {
    diffMili = timeMili + baseOffset * 3600000;
  } else if (baseOffset < 0) {
    diffMili = timeMili - baseOffset * 3600000;
  } else {
    diffMili = timeMili;
  }

  const rDate = new window.Date(diffMili);

  return {
    time: rDate.toLocaleTimeString(),
    date: rDate.toDateString(),
  };
};

export default getBaseTime;
