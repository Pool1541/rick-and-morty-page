import styled from "styled-components";
import { flicker } from "./keyframes.elements";

const StyledStatus = styled.span`
  display: inline-block;
  position: absolute;
  top: 7px;
  right: 10px;
  width: 13px;
  height: 13px;
  border-radius: 50%;
  background-color: ${({ status }) =>
    status == "Alive"
      ? "#1df500ff"
      : status === "Dead"
      ? "#d44545"
      : "#a8a8a8"};
  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: -3px;
    left: -3px;
    background-color: transparent;
    transform: scaleX(1.1) scaleY(1.3);
    border: 3px solid
      ${({ status }) =>
        status == "Alive"
          ? "#1df50063"
          : status === "Dead"
          ? "#ff000063"
          : "#a8a8a863"};
    border-radius: 50%;
    z-index: 1;
    transition: transform 0.3s;
    animation: ${flicker} 1s ease infinite reverse;
  }
`;

export default StyledStatus;
