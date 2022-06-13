const getLocalutcHour = () => {
  const date = new window.Date();
  let offset = date.getTimezoneOffset() / 60;

  if (offset > 0) {
    offset = -Math.abs(offset);
  } else {
    offset = Math.abs(offset);
  }

  return `UTC (${offset < 0 ? "-" : "+"}${offset})`;
};

export default getLocalutcHour;
