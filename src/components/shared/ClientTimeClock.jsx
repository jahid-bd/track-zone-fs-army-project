import { ClientClockContainer, ButtonContainer, Button } from "../UI";
import Clock from "./Clock";

const ClientTimeClock = ({ item }) => {
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
        <Button size={"small"} color={"red"}>
          Delete
        </Button>
        <Button size={"small"}>Edit</Button>
      </ButtonContainer>
    </ClientClockContainer>
  );
};

export default ClientTimeClock;
