import { useEffect, useState } from "react";
import { convertTimeZone } from "../../utils";
import { Location, UtcHour, Time, Date, TimeDifference } from "../UI";

const Clock = ({ title, location, offset, small, difference }) => {
  const init = {
    date: "",
    time: "",
  };

  const [clockState, setClockState] = useState({ ...init });

  let interval = null;

  // use effect for starting clock with any time offset
  useEffect(() => {
    interval = setInterval(() => {
      const { date, time } = convertTimeZone(offset, true);

      setClockState({
        date,
        time,
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [clockState]);

  return (
    <>
      <Location small={small}>{title}</Location>
      <UtcHour small={small}>{location}</UtcHour>
      {difference && <TimeDifference>{difference}</TimeDifference>}
      <Time small={small}>{clockState.time}</Time>
      <Date small={small}>{clockState.date}</Date>
    </>
  );
};

export default Clock;
