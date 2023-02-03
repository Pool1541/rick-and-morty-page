import styled from "styled-components";
import StyledDiv from "./div.elements";

const StyledGridContainer = styled(StyledDiv)`
  flex: 1 1 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-template-rows: repeat(auto-fit, minmax(200px, 1fr));
  justify-items: center;
  gap: 10px;
  padding: 20px;
`;

export default StyledGridContainer;
