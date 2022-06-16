import React from "react";
import { timeZones } from "../../../utils";
import { Select } from "../../UI";

const TimeZoneSelectGroup = ({ onChange, value }) => {
  return (
    <>
      <label htmlFor="timeZone">Time Zone</label>
      <br />
      <Select name="timeZone" id="timeZone" onChange={onChange} value={value}>
        <option value="" defaultValue={""}>
          Custom
        </option>
        {timeZones.map((item) => (
          <option value={item.value} key={item.id}>
            {`${item.value} ${item.text.split(" ")[0]}`}
          </option>
        ))}
      </Select>
    </>
  );
};

export default TimeZoneSelectGroup;
