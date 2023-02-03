import styled from "styled-components";
import { transition, transitionIn } from "./keyframes.elements";

const StyledSection = styled.section`
  width: 100%;
  display: flex;
  position: relative;
  animation: ${transitionIn} 0.5s ease;

  &.animation {
    animation: ${transition} 0.5s forwards ease;
  }
`;

export default StyledSection;
