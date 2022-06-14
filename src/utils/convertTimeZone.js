function convertTimeZone(gmt, local = false) {
  const date = new window.Date();

  const localTimeMili = date.getTime();

  let offset = date.getTimezoneOffset() / 60;

  if (offset > 0) {
    offset = -Math.abs(offset);
  } else {
    offset = Math.abs(offset);
  }

  const difference = gmt - offset;

  const convertedTime = new window.Date(localTimeMili + 3600000 * difference);

  let resultDate = null;
  let resultTime = null;

  if (local) {
    const timeDateString = convertedTime.toLocaleString("en-US", {
      hour12: true,
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });

    resultDate = convertedTime.toDateString();
    resultTime = timeDateString.split(",")[1];
  } else {
    const timeDate = convertedTime.toLocaleString("en-US", {
      hour12: false,
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
    const tempDate = timeDate.split(",")[0].split("/");
    const tempTime = timeDate.split(",")[1].split(":");
    let hour = tempTime[0];

    if (hour == 24) {
      hour = `00`;
    }
    resultDate = `${tempDate[2]}-${tempDate[0]}-${tempDate[1]}`;
    resultTime = `${hour}:${tempTime[1]}:${tempTime[2]}`;
  }

  return {
    date: resultDate.trim(),
    time: resultTime.trim(),
  };
}

export default convertTimeZone;
