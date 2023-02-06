import StyledSearchBar from "./elements/searchBar.elements";
import StyledSection from "./elements/section.elements";
import styled from "styled-components";
import StyledButton from "./elements/button.elements";
import { AiOutlineSearch } from "react-icons/ai";
import { BiFilter } from "react-icons/bi";
import { useContext, useEffect, useRef, useState } from "react";
import { DataContext } from "../context/dataContext";
import { transitionIn } from "./elements/keyframes.elements";
import GridContainer from "./gridContainer";
import Error404 from "./404";
import SearchBarContainer from "./elements/SearchBarContainerelements";
import Filters from "./filters";

const StyledGridSection = styled(StyledSection)`
  flex-direction: column;
  &.animationOut {
    animation: ${transitionIn} 0.5s ease;
  }
`;

const ButtonSearch = styled(StyledButton)`
  padding: 5px 10px 0;
  border: 1px solid #999999;
  transition: all 0.2s ease;
  margin-left: 10px;

  &:hover {
    border-color: #5e5e5e;
  }

  svg {
    fill: #999999;
    transition: all 0.2s ease;
  }

  &:hover svg {
    fill: #5e5e5e;
  }

  &.active {
    border-color: #2e2e2e;
    svg {
      fill: #2e2e2e;
    }
  }
`;

export default function Content() {
  const [currentFilters, setCurrentFilters] = useState([]);
  const { characters, handleRecharge, getValue, error } =
    useContext(DataContext);

  function handleSubmit(e) {
    e.preventDefault();
    getValue(e.target[0].value, currentFilters);
  }

  function handleBtnFilters(e) {
    const filters = document.querySelector("#filters");
    filters.classList.toggle("expand");
    e.currentTarget.classList.toggle("active");
  }

  function getFilters(data) {
    setCurrentFilters(data);
  }

  useEffect(() => {
    onscroll = handleScroll;
    function handleScroll() {
      const height =
        document.querySelector("body").clientHeight - window.innerHeight;
      const scroll = window.scrollY;

      if (scroll >= height - 254) {
        handleRecharge();
      }
    }
  }, [characters]);

  return (
    <StyledGridSection className="animationOut">
      <SearchBarContainer onSubmit={handleSubmit}>
        <StyledSearchBar type="text" spellCheck="none" />
        <ButtonSearch>
          <AiOutlineSearch />
        </ButtonSearch>
        <ButtonSearch type="button" onClick={handleBtnFilters}>
          <BiFilter />
        </ButtonSearch>
      </SearchBarContainer>
      <Filters getFilters={getFilters} />
      {error ? <Error404 /> : <GridContainer characters={characters} />}
    </StyledGridSection>
  );
}
