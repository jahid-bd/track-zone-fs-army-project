import styled from "styled-components";
const Time = styled.h1`
  font-size: ${(props) => (props.small ? "28px" : "40px")};
  margin: ${(props) => (props.small ? "8px  0 2px" : "20px 0 10px")};
`;

export default Time;
