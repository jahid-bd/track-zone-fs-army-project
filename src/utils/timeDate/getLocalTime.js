const getLocalTime = () => {
  const date = new window.Date();
  let hour = date.getHours();
  let miniute = date.getMinutes();
  let seconds = date.getSeconds();

  let session = "AM";

  if (hour == 0) {
    hour = 12;
  }
  if (hour > 12) {
    hour = hour - 12;
    session = "PM";
  }

  hour = hour < 10 ? "0" + hour : hour;
  miniute = miniute < 10 ? "0" + miniute : miniute;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  return `${hour} : ${miniute} : ${seconds}  ${session}`;
};

export default getLocalTime;
