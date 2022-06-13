import { useState } from "react";
import { Header } from "../components/UI";
import BaseClock from "../pages/BaseClock";
import ClientClock from "../pages/ClientClock";

const App = () => {
  const [baseOffset, setBaseOffset] = useState(null);

  const updateOffset = (offset) => {
    setBaseOffset(offset);
  };

  return (
    <>
      <Header>
        <h1>Track Zone</h1>
      </Header>

      <BaseClock updateOffset={updateOffset} />
      <ClientClock baseOffset={baseOffset} />
    </>
  );
};

export default App;
