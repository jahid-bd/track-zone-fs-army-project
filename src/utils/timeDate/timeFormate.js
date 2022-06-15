const timeFormate = (date, time) => {
  const dateArr = date.split("-");
  const timeArr = time.split(":");

  const year = Number(dateArr[0]);
  const month = Number(dateArr[1]) - 1;
  const day = Number(dateArr[2]);
  const hour = Number(timeArr[0]);
  const minute = Number(timeArr[1]);
  const seconds = Number(timeArr[2]) ? Number(timeArr[2]) : 0;

  const nDate = new Date(year, month, day, hour, minute, seconds);

  const resultDate = nDate.toDateString();

  const dateString = nDate.toLocaleString("en-US", {
    hour12: true,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  const resultTime = dateString.split(",")[1];

  return {
    date: resultDate.trim(),
    time: resultTime.trim(),
  };
};

export default timeFormate;
