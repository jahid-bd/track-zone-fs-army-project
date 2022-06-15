import { Button, FormTitle, InputContainer } from "../UI";
import InputGroup from "../shared/form/InputGroup";
import { useEffect, useState } from "react";
import { checkValidity } from "../../utils";

const EventForm = ({ eventLyft, editData }) => {
  const init = {
    title: "",
    time: "",
    date: "",
  };
  const [formState, setFormState] = useState({ ...init });
  const { title, time, date } = formState;

  const errorObj = { date: "", time: "", title: "" };
  const [errors, setErrors] = useState({
    ...errorObj,
  });

  const onChangeHandler = (e) => {
    const { name: key, value } = e.target;
    setFormState((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  useEffect(() => {
    if (editData) {
      setFormState({ ...editData });
    }
  }, [editData]);

  const addEventHandler = (e) => {
    e.preventDefault();

    const { error, isValid } = checkValidity(formState);
    console.log(error, isValid);

    if (isValid) {
      eventLyft(formState);
      setFormState({ ...init });
      setErrors({ ...errorObj });
    } else {
      setErrors({ ...error });
    }
  };

  return (
    <form onSubmit={addEventHandler}>
      <FormTitle>Create Events</FormTitle>

      <InputContainer>
        <div>
          <InputGroup
            label={"Title"}
            name={"title"}
            type={"text"}
            value={title}
            onChange={onChangeHandler}
            placeholder={"Type event title"}
            error={errors.title}
          />
        </div>
        <div>
          <InputGroup
            label={"Time"}
            name={"time"}
            type={"time"}
            value={time}
            onChange={onChangeHandler}
            error={errors.date}
          />
        </div>
        <div>
          <InputGroup
            label={"Date"}
            name={"date"}
            type={"date"}
            value={date}
            onChange={onChangeHandler}
            error={errors.date}
          />
        </div>
      </InputContainer>
      <div>
        <Button size={"small"}>Add Event</Button>
      </div>
    </form>
  );
};

export default EventForm;
