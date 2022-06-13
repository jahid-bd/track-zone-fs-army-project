import { useEffect, useState } from "react";
import {
  Button,
  BaseClockContainer,
  ButtonContainer,
  Container,
  ClientClockContainer,
} from "../components/UI";
import Clock from "../components/shared/Clock";
import Form from "../components/shared/form/Form";
import ClientTimeClock from "../components/shared/ClientTimeClock";
import { getOffsetDifference } from "../utils";

const ClientClock = ({ baseOffset }) => {
  const init = {
    title: "",
    offset: null,
    difference: "",
    events: [
      {
        title: "",
        time: "",
        differenceTime: "",
        isCompleted: false,
      },
    ],
  };
  const [state, setState] = useState([]);

  const createClock = (timeData) => {
    const difOffset = getOffsetDifference(baseOffset, timeData.offset);

    const dataObj = {
      title: timeData.title,
      offset: timeData.offset,
      location: timeData.location,
      difference: difOffset,
    };
    setState((prev) => [...prev, { ...dataObj }]);
  };

  return (
    <Container>
      <BaseClockContainer>
        <h1>Create a New Clock</h1>
        <div>
          <Form updateTime={createClock} />
        </div>
      </BaseClockContainer>

      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          gap: "1rem",
          flexDirection: "row",
          padding: "20px",
        }}
      >
        {state.map((item) => (
          <ClientTimeClock item={item} />
        ))}
      </div>
    </Container>
  );
};

export default ClientClock;
