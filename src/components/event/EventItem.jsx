import React from "react";
import { Button, ButtonContainer, EventItemContainer } from "../UI";
import EventItemText from "./EventItemText";
import { timeFormate } from "../../utils";

const EventItem = ({ event, deleteHandler, editHandler }) => {
  const { date, time } = timeFormate(event.date, event.time);
  return (
    <EventItemContainer>
      <div style={{ marginBottom: "10px" }}>
        <h3>{event.title}</h3>
      </div>
      <EventItemText title={"Event Date and Time"} time={time} date={date} />

      <EventItemText
        title={"In Local Date and Time"}
        time={event.baseTime}
        date={event.baseDate}
      />

      <ButtonContainer>
        <Button size={"small"} onClick={() => editHandler(event.id)}>
          Edit
        </Button>
        <Button
          size={"small"}
          color={"red"}
          onClick={() => deleteHandler(event.id)}
        >
          Delete
        </Button>
      </ButtonContainer>
    </EventItemContainer>
  );
};

export default EventItem;
