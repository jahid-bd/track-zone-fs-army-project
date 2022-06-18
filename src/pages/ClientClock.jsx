import { useState } from "react";
import {
  BaseClockContainer,
  Container,
  ClockItemContainer,
} from "../components/UI";
import Form from "../components/shared/form/Form";
import ClientClockItem from "../components/shared/ClientClockItem";
import { getOffsetDifference } from "../utils";
import shortid from "shortid";

const ClientClock = ({ baseOffset }) => {
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

  // Edit Clock items handler
  const editHandler = (id) => {
    setIsEdit(true);
    state.map((item) => {
      if (item.id === id) setEditData({ ...item });
      return item;
    });
  };

  // Delete Clock items handler
  const deleteHandler = (id) => {
    setState((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <Container>
      <BaseClockContainer>
        <h1>Create a New Clock</h1>
        <div>
          <Form updateTime={createClock} editData={editData} isEdit={isEdit} />
        </div>
      </BaseClockContainer>

      <ClockItemContainer>
        {state.map((item) => (
          <ClientClockItem
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
