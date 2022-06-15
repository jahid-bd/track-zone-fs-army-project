import {
  ClientClockContainer,
  ButtonContainer,
  Button,
  PopupContainer,
} from "../UI";
import Clock from "./Clock";
import { useState, useEffect } from "react";
import Events from "../../pages/Events";
import { getOffDiff, getBaseTime } from "../../utils";
import shortid from "shortid";

const ClientTimeClock = ({ item, editHandler, deleteHandler }) => {
  const [eventCounter, setEventCounter] = useState(0);
  const [triger, setTriger] = useState(false);

  const handleClosePopup = () => {
    setTriger(false);
  };

  const handleOpenPopup = () => {
    setTriger(true);
  };

  const [events, setEvents] = useState([]);
  const [editData, setEditData] = useState(null);
  const [isUpdate, setIsUpdate] = useState(false);

  useEffect(() => {
    setEventCounter(events.length);
  }, [events]);

  const editEventHandler = (id) => {
    setIsUpdate(true);
    events.map((event) => {
      if (event.id === id) setEditData({ ...event });
      return event;
    });
  };

  const deleteEventHandler = (id) => {
    setEvents(events.filter((event) => event.id !== id));
  };

  const eventLyfter = (event) => {
    if (isUpdate) {
      let newArr = [];
      newArr = events.map((item) => {
        if (item.id === editData.id) {
          return { ...event };
        } else {
          return item;
        }
      });

      setEvents([...newArr]);
      setIsUpdate(false);
    } else {
      const { time, date } = getBaseTime(
        event.time,
        event.date,
        getOffDiff(item.difference)
      );
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
          <Events
            closeHandler={handleClosePopup}
            editData={editData}
            editHandler={editEventHandler}
            deleteHandler={deleteEventHandler}
            eventLyfter={eventLyfter}
            events={events}
          />
        </PopupContainer>
      ) : (
        ""
      )}
    </ClientClockContainer>
  );
};

export default ClientTimeClock;
