import { useEffect, useState } from "react";
import shortid from "shortid";
import EventForm from "../components/event/EventForm";
import EventItem from "../components/event/EventItem";
import { Container, EventContainer, Button } from "../components/UI";

const Events = ({
  closeHandler,
  editHandler,
  deleteHandler,
  editData,
  eventLyfter,
  events,
}) => {
  return (
    <Container>
      <EventContainer>
        <EventForm eventLyft={eventLyfter} editData={editData} />
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            gap: "15px",
            flexWrap: "wrap",
            margin: "30px 0",
          }}
        >
          {events.map((event) => (
            <EventItem
              event={event}
              key={event.id}
              deleteHandler={deleteHandler}
              editHandler={editHandler}
            />
          ))}
        </div>
        <div
          style={{
            position: "absolute",
            top: "0",
            right: "0",
          }}
        >
          <Button
            size={"medium"}
            color={"red"}
            radiusNone={true}
            onClick={closeHandler}
          >
            X
          </Button>
        </div>
      </EventContainer>
    </Container>
  );
};

export default Events;
