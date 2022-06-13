import styled from "styled-components";

const Date = styled.span`
  font-size: ${(props) => (props.small ? "18px" : "24px")};
  font-weight: 600;
`;

export default Date;
