import { useState } from "react";
import {
  BaseClockContainer,
  Container,
  ClockItemContainer,
} from "../components/UI";
import Form from "../components/shared/form/Form";
import ClientTimeClock from "../components/shared/ClientTimeClock";
import { getOffsetDifference } from "../utils";
import shortid from "shortid";

const ClientClock = ({ baseOffset }) => {
  // const init = {
  //   id: shortid.generate(),
  //   title: "",
  //   offset: null,
  //   location: '',
  //   difference: "",
  //   events: [
  //     {
  //       title: "",
  //       time: "",
  //       differenceTime: "",
  //       isCompleted: false,
  //     },
  //   ],
  // };
  const [state, setState] = useState([]);
  const [editData, setEditData] = useState(null);
  const [isEdit, setIsEdit] = useState(false);

  // Create a new clock and update clock data
  const createClock = (timeData) => {
    const difOffset = getOffsetDifference(baseOffset, timeData.offset);

    if (isEdit) {
      let newArr = [];
      newArr = state.map((item) => {
        if (item.id === editData.id) {
          return { ...timeData, difference: difOffset };
        } else {
          return item;
        }
      });

      setState([...newArr]);
      setIsEdit(false);
    } else {
      const dataObj = {
        id: shortid.generate(),
        title: timeData.title,
        offset: timeData.offset,
        location: timeData.location,
        difference: difOffset,
      };
      setState((prev) => [...prev, { ...dataObj }]);
    }
  };

  // Edit Clock items
  const editHandler = (id) => {
    setIsEdit(true);
    state.map((item) => {
      if (item.id === id) setEditData({ ...item });
      return item;
    });
  };

  // Delete Clock items
  const deleteHandler = (id) => {
    setState((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <Container>
      <BaseClockContainer>
        <h1>Create a New Clock</h1>
        <div>
          <Form updateTime={createClock} editData={editData} />
        </div>
      </BaseClockContainer>

      <ClockItemContainer>
        {state.map((item) => (
          <ClientTimeClock
            key={item.id}
            item={item}
            editHandler={editHandler}
            deleteHandler={deleteHandler}
          />
        ))}
      </ClockItemContainer>
    </Container>
  );
};

export default ClientClock;
