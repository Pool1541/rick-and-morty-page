import { useContext, useRef } from "react";
import styled from "styled-components";
import { DataContext } from "../context/dataContext";
import StyledDiv from "./elements/div.elements";
import SearchBarContainer from "./elements/SearchBarContainerelements";
import Select from "./selectTag";

const StyledFiltersContainer = styled(SearchBarContainer)`
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  top: 110px;
  margin: 0 auto;
  transform: scaleY(0);
  transform-origin: top;
  transition: transform 0.3s ease;

  &.expand {
    transform: scaleY(1);
  }
`;

export default function Filters({ getFilters }) {
  const species = [
    "",
    "Human",
    "Alien",
    "Humanoid",
    "unknown",
    "Poopybutthole",
    "Animal",
    "Robot",
    "Cronenberg",
    "Disease",
  ];
  const status = ["", "Alive", "Dead", "unknown"];
  const gender = ["", "Female", "Male", "Genderless", "unknown"];
  const ref = useRef();
  function getSelect() {
    const selects = ref.current.querySelectorAll("select");
    let data = [];
    selects.forEach((select) => {
      if (select.value !== "") {
        data.push([select.title.toLowerCase(), select.value]);
      }
    });
    getFilters(data);
  }
  return (
    <StyledFiltersContainer id="filters" onChange={getSelect}>
      <StyledDiv ref={ref}>
        <Select title={"Species"} elements={species} />
        <Select title={"Status"} elements={status} />
        <Select title={"Gender"} elements={gender} />
      </StyledDiv>
    </StyledFiltersContainer>
  );
}
