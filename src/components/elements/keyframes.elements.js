import { keyframes } from "styled-components";

export const flicker = keyframes`
  from {
    transform: scaleX(1.1) scaleY(1.1);
    opacity: 0;
  }

  to {
    opacity: 1;
    transform: scaleX(1) scaleY(1);
  }
`;

export const transition = keyframes`
  from {
    transform: translateX(0);
    opacity: 1;
  }
  to {
    transform: translateX(-1800px);
    opacity: 0;
  }
`;

export const transitionIn = keyframes`
  from {
    transform: translateX(-1800px);
  }
  to {
    transform: translateX(0);
  }
`;

export const spin = keyframes`
  from {
    transform: rotate(0);
  }

  to {
    transform: rotate(360deg)
    }
`;
