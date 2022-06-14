import { useEffect, useState } from "react";
import { BaseClockContainer, Container, FormTitle } from "../components/UI";
import { getlocalTimeOffset, getLocalutcHour, getLocation } from "../utils";
import Form from "../components/shared/form/Form";
import Clock from "../components/shared/Clock";

const BaseClock = ({ updateOffset }) => {
  const timeObj = {
    time: "",
    date: "",
    title: "",
    offset: null,
    location: "",
  };
  const [timeState, setTimeState] = useState({ ...timeObj });
  const { title, offset, location } = timeState;

  // Use Effect for set local time on load the application
  useEffect(() => {
    setTimeState({
      offset: getlocalTimeOffset(),
      title: getLocation(),
      location: getLocalutcHour(),
    });
    updateOffset(getlocalTimeOffset());
  }, []);

  // This CB function for taking data from inside the form state
  const updateTime = (timeData) => {
    setTimeState({ ...timeData });
    updateOffset(timeData.offset);
  };

  return (
    <Container>
      <BaseClockContainer>
        <Clock title={title} location={location} offset={offset} />
        <div>
          <FormTitle>Change Date and Time</FormTitle>
          <Form updateTime={updateTime} />
        </div>
      </BaseClockContainer>
    </Container>
  );
};

export default BaseClock;
