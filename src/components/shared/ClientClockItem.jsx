import {
  Container,
  ClientClockContainer,
  ButtonContainer,
  Button,
  PopupContainer,
  EventsItemContainer,
  EventContainer,
  CloseBtnContainer,
} from "../UI";
import Clock from "./Clock";
import { useState, useEffect } from "react";
import { getOffDiff, getBaseTime } from "../../utils";
import shortid from "shortid";
import EventForm from "../event/EventForm";
import EventItem from "../event/EventItem";

const ClientClockItem = ({ item, editHandler, deleteHandler }) => {
  const [eventCounter, setEventCounter] = useState(0);
  const [triger, setTriger] = useState(false);
  const [events, setEvents] = useState([]);
  const [editData, setEditData] = useState(null);
  const [isUpdate, setIsUpdate] = useState(false);

  // Event lyfting from event form and create or update events
  const createEvent = (event) => {
    const { time, date } = getBaseTime(
      event.time,
      event.date,
      getOffDiff(item.difference)
    );

    if (isUpdate) {
      let newArr = [];
      newArr = events.map((item) => {
        if (item.id === editData.id) {
          return { ...event, baseTime: time, baseDate: date };
        } else {
          return item;
        }
      });

      setEvents([...newArr]);
      setIsUpdate(false);
    } else {
      setEvents((prev) => [
        ...prev,
        {
          id: shortid.generate(),
          baseTime: time,
          baseDate: date,
          ...event,
        },
      ]);
    }
  };

  // Use Effect for update event counter on add events
  useEffect(() => {
    setEventCounter(events.length);
  }, [events]);

  // Event edit handler
  const editEventHandler = (id) => {
    setIsUpdate(true);
    events.map((event) => {
      if (event.id === id) setEditData({ ...event });
      return event;
    });
  };

  //Event Delete handler
  const deleteEventHandler = (id) => {
    setEvents(events.filter((event) => event.id !== id));
  };

  // This handler for open Event section popup
  const handleOpenPopup = () => {
    setTriger(true);
  };

  // This handler for close Event section popup
  const handleClosePopup = () => {
    setTriger(false);
  };

  return (
    <ClientClockContainer>
      <Clock
        title={item.title}
        offset={item.offset}
        location={item.location}
        small={true}
        difference={item.difference}
      />
      <ButtonContainer>
        <Button size={"small"} onClick={handleOpenPopup}>
          Events = {eventCounter}
        </Button>
      </ButtonContainer>

      <ButtonContainer>
        <Button
          size={"small"}
          color={"red"}
          onClick={() => deleteHandler(item.id)}
        >
          Delete
        </Button>
        <Button size={"small"} onClick={() => editHandler(item.id)}>
          Edit
        </Button>
      </ButtonContainer>
      {triger ? (
        <PopupContainer>
          <Container>
            <EventContainer>
              <EventForm
                eventLyft={createEvent}
                editData={editData}
                isUpdate={isUpdate}
              />
              <EventsItemContainer>
                {events.map((event) => (
                  <EventItem
                    event={event}
                    key={event.id}
                    deleteHandler={deleteEventHandler}
                    editHandler={editEventHandler}
                  />
                ))}
              </EventsItemContainer>
              <CloseBtnContainer>
                <Button
                  size={"medium"}
                  color={"red"}
                  radiusNone={true}
                  onClick={handleClosePopup}
                >
                  X
                </Button>
              </CloseBtnContainer>
            </EventContainer>
          </Container>
        </PopupContainer>
      ) : (
        ""
      )}
    </ClientClockContainer>
  );
};

export default ClientClockItem;
