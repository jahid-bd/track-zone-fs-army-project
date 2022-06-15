import styled from "styled-components";

const PopupContainer = styled.div`
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: black;
  background-color: rgba(0, 0, 0, 0.4);
  overflow: auto;
  z-index: 999;
  transition: all 0.3s linear;
`;

export default PopupContainer;
