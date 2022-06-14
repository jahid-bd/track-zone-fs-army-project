import { InputContainer, Button, ButtonContainer } from "../../UI";
import TimeZoneSelectGroup from "./TimeZoneSelectGroup";
import InputGroup from "./InputGroup";
import { useEffect, useState } from "react";
import { timeZones, convertTimeZone, getUtcOffset } from "../../../utils";

const Form = ({ updateTime, editData }) => {
  const initValue = {
    date: "",
    time: "",
    timeZone: "",
    title: "",
    offset: "",
    location: "",
  };

  const errorObj = { date: "", time: "", title: "" };
  const [state, setState] = useState({ ...initValue });
  const [errors, setErrors] = useState({
    ...errorObj,
  });
  const [focuses, setFocuses] = useState({
    title: false,
    date: false,
    time: false,
  });
  const [isCustom, setIsCustom] = useState(true);
  const { date, time, timeZone, title, offset, location } = state;

  // Use Effect for edit data recyling inside the input fields
  useEffect(() => {
    if (editData) {
      setIsCustom(false);
      const { time: editTime, date: editDate } = convertTimeZone(
        editData.offset
      );
      const obj = {
        id: editData.id,
        title: editData.title,
        date: editDate,
        time: editTime,
        offset: editData.offset,
      };
      setState((prev) => ({
        ...prev,
        ...obj,
      }));
    }
  }, [editData]);

  // On Change handler for input field value change and take state data
  const onChangeHandler = (e) => {
    const { name: key, value } = e.target;
    setState((prev) => ({ ...prev, [key]: value }));

    const { error } = checkValidity(state);

    if (!error[key]) {
      setErrors((prev) => ({
        ...prev,
        [key]: "",
      }));
    }
  };

  // On Focus error handler for checking which input field touched
  const onFocusHandler = (e) => {
    setFocuses((prev) => ({
      ...prev,
      [e.target.name]: true,
    }));
  };

  // On Blur handler error validation on after touching inside input field and blur outside
  const handleBlur = (e) => {
    const key = e.target.name;
    const { error, isValid } = checkValidity(state);

    if (!isValid && focuses[key]) {
      setErrors((prev) => ({
        ...prev,
        [key]: error[key],
      }));
    }
  };

  // Set time handler for set custom time and automatic time zones time
  const setTimeHandler = (e) => {
    e.preventDefault();
    const { error, isValid } = checkValidity(state);

    if (isValid) {
      if (!offset && !location) {
        console.log("I am inside custom set");
        const utc = getUtcOffset(date, time);
        const data = {
          date,
          time,
          title,
          offset: utc,
          location: `(UTC ${utc.split(".")[0]}:${Math.round(
            Number(utc.split(".")[1]) * 0.6
          )})`,
        };
        updateTime({ ...data });
        setState({ ...initValue });
        setErrors({ ...errorObj });
      } else {
        const data = {
          date,
          time,
          title,
          offset,
          location,
        };
        updateTime({ ...data });
        setState({ ...initValue });
        setErrors({ ...errorObj });
      }
    } else {
      setErrors({ ...error });
    }
  };

  // Use Effect for on selecting different time zones and display times inside the input fields

  let indexArr = null;
  let utc = null;
  let city = "";
  let interval = null;

  useEffect(() => {
    if (timeZone) {
      setIsCustom(true);

      setState((prev) => ({
        ...prev,
        title: timeZone,
      }));
      const { isValid } = checkValidity(state);

      if (!isValid) {
        setErrors({ ...errorObj });
      }

      interval = setInterval(() => {
        timeZones.map((item, index) => {
          if (item.value == timeZone) {
            indexArr = index;
          }
        });

        utc = timeZones[indexArr].offset;
        city = timeZones[indexArr].text;

        const { date: inputDate, time: inputTime } = convertTimeZone(utc);

        setState((prev) => ({
          ...prev,
          date: inputDate.trim(),
          time: inputTime.trim(),
          offset: utc,
          location: city,
        }));
      }, 1000);
    } else {
      setIsCustom(false);
      setState({ ...initValue });
    }

    return () => clearInterval(interval);
  }, [timeZone]);

  // Form validation checking function
  const checkValidity = (values) => {
    const error = {};

    if (!values.title) {
      error.title = "Invalid Title!";
    } else if (String(values.title).trim().length < 3) {
      error.title = "Title must be at least 3 chars!";
    }

    if (!values.time && !values.time.trim().length < 5) {
      error.time = "Invalid Time!";
    }

    if (!values.date && !values.date.trim().length < 6) {
      error.date = "Invalid Date!";
    }

    return {
      error,
      isValid: Object.keys(error).length === 0,
    };
  };

  return (
    <form onSubmit={setTimeHandler}>
      <InputContainer>
        <div>
          <TimeZoneSelectGroup onChange={onChangeHandler} value={timeZone} />
        </div>
      </InputContainer>

      <InputContainer>
        <div>
          <InputGroup
            label={"Title"}
            name={"title"}
            type={"text"}
            value={title}
            onChange={onChangeHandler}
            placeholder={"Type your clock title"}
            error={errors.title}
            onFocus={onFocusHandler}
            onBlur={handleBlur}
          />
        </div>
        <div>
          <InputGroup
            label={"Time"}
            name={"time"}
            type={"time"}
            onChange={onChangeHandler}
            value={time}
            disabled={isCustom}
            error={errors.time}
            onFocus={onFocusHandler}
            onBlur={handleBlur}
          />
        </div>
        <div>
          <InputGroup
            label={"Date"}
            name={"date"}
            type={"date"}
            onChange={onChangeHandler}
            value={date}
            disabled={isCustom}
            error={errors.date}
            onFocus={onFocusHandler}
            onBlur={handleBlur}
          />
        </div>
      </InputContainer>

      <ButtonContainer>
        <Button size={"medium"}>Set Time</Button>
      </ButtonContainer>
    </form>
  );
};

export default Form;
