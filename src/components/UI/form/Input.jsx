import styled from "styled-components";
import colors from "../colors/Colors";
const Input = styled.input`
  width: 100%;
  outline: none;
  border: 2px solid ${(props) => (props.error ? colors.red : "#112d4e")};
  padding: 4px 10px;
  border-radius: 2px;
  background: #f9f7f7;
  font-size: 14px;
  &:focus {
    outline: none;
    border: 2px solid #37c94a;
    border-radius: 2px;
  }
`;

export default Input;
