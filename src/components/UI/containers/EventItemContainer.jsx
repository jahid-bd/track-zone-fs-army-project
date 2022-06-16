import styled from "styled-components";
import colors from "../colors/Colors";

const EventItemContainer = styled.div`
  border-radius: 7px;
  padding: 15px 20px;
  background: ${colors.background};
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
`;

export default EventItemContainer;
