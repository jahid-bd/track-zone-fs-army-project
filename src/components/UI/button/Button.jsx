import colors from "../colors/Colors";
import styled from "styled-components";

const sizes = {
  small: {
    padding: "6px 10px",
    fontSize: "13px",
  },
  medium: {
    padding: "8px 15px",
    fontSize: "16px",
  },
  large: {
    padding: "12px 18px",
    fontSize: "18px",
  },
};

const Button = styled.button`
  background-color: ${(props) =>
    props.color == "red" ? colors.red : colors.primary};
  border: none;
  color: ${colors.white};
  border-radius: ${(props) => (props.radiusNone ? "" : "5px")};
  box-shadow: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  &:hover {
    background-color: ${(props) =>
      props.color == "red" ? colors.red2 : colors.primary2};
  }

  cursor: pointer;
  ${(props) => {
    switch (props.size) {
      case "small":
        return sizes.small;

      case "medium":
        return sizes.medium;

      case "large":
        return sizes.large;

      default:
        return "";
    }
  }}
`;

export default Button;
