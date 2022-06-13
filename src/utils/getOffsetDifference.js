const getOffsetDifference = (baseOffset, newOffset) => {
  let difOffset = null;

  const baseClockOfffset = Number(baseOffset);
  const newClockOffset = Number(newOffset);

  const dif = baseClockOfffset - newClockOffset;

  const n = new window.Date(0, 0);
  n.setSeconds(Math.abs(dif) * 60 * 60);

  if (dif < 0) {
    difOffset = `${n.getHours()}:${n.getMinutes()} hrs ahead`;
  } else if (dif > 0) {
    difOffset = `${n.getHours()}:${n.getMinutes()} hrs behind`;
  } else {
    difOffset = "No difference";
  }

  return difOffset;
};

export default getOffsetDifference;
