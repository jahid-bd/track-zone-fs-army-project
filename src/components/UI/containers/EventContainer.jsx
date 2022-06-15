import styled from "styled-components";
import BaseClockContainer from "./BaseClockContainer";
import colors from "../colors/Colors";

const EventContainer = styled.div`
  background-color: ${colors.secondery};
  padding: 25px 50px;
  margin: auto;
  /* border: 3px solid ${colors.primary}; */
  border-radius: 10px;
  text-align: center;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  position: relative;
`;

export default EventContainer;
