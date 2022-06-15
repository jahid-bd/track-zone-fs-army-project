import styled, { css } from "styled-components";
import colors from "../colors/Colors";
const BaseClockContainer = styled.div`
  background-color: ${colors.secondery};
  margin: 40px 20px;
  padding: 30px;
  border: 3px solid ${colors.primary};
  border-radius: 10px;
  text-align: center;
`;

export default BaseClockContainer;
