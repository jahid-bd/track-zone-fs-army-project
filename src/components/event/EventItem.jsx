import React from "react";
import { Button, ButtonContainer } from "../UI";
import colors from "../UI/colors/Colors";
import EventItemText from "./EventItemText";
import { timeFormate } from "../../utils";

const EventItem = ({ event, deleteHandler, editHandler }) => {
  const { date, time } = timeFormate(event.date, event.time);
  return (
    <div
      style={{
        // border: `2px solid ${colors.primary}`,
        borderRadius: "7px",
        padding: "15px 20px",
        background: `${colors.background}`,
        boxShadow:
          "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
      }}
    >
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
    </div>
  );
};

export default EventItem;
