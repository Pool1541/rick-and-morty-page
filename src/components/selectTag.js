import styled from "styled-components";
import StyledDiv from "./elements/div.elements";

const StyledContainer = styled(StyledDiv)`
  label {
    display: inline-block;
    width: 7%;
    min-width: 85px;
    margin: 5px 0;
    color: #5e5e5e;
  }

  select {
    border: none;
    outline: none;
    list-style: none;
    text-decoration: none;
    color: #5e5e5e;
    width: 150px;
    background-color: transparent;
    option {
      appearance: none;
      display: block;
      padding: 5px 0;
    }
  }
`;

export default function Select({ title, elements }) {
  return (
    <StyledContainer>
      <label htmlFor={title}>{title}</label>
      <select name={title} title={title} id={title}>
        {elements.map((element) => (
          <option key={element} value={element}>
            {element}
          </option>
        ))}
      </select>
    </StyledContainer>
  );
}
