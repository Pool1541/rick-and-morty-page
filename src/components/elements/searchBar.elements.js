import styled from "styled-components";

const StyledSearchBar = styled.input.attrs((props) => ({
  type: "text",
}))`
  width: 100%;
  border: none;
  outline: none;
  font-size: clamp(1rem, 2.5vw, 1.5rem);
  color: #505257;
  background-color: #ffffffff;
  height: 35px;
`;

export default StyledSearchBar;
