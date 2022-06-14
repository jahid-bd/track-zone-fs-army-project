import { ClientClockContainer, ButtonContainer, Button } from "../UI";
import Clock from "./Clock";

const ClientTimeClock = ({ item, editHandler, deleteHandler }) => {
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
    </ClientClockContainer>
  );
};

export default ClientTimeClock;
