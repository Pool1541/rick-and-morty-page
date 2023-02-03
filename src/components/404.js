import styled from "styled-components";
import StyledDiv from "./elements/div.elements";

const StyledError = styled(StyledDiv)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;
  height: 100%;
  margin: auto;
  h4 {
    font-size: clamp(1.2rem, 1.8vw, 1.7rem);
    color: #2b2b2b;
  }
`;

export default function Error404() {
  return (
    <StyledError>
      <h4>No se encontraron resultados.</h4>
    </StyledError>
  );
}
