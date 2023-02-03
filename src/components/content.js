import StyledSearchBar from "./elements/searchBar.elements";
import StyledSection from "./elements/section.elements";
import styled from "styled-components";
import StyledButton from "./elements/button.elements";
import { AiOutlineSearch } from "react-icons/ai";
import { useContext, useEffect } from "react";
import { DataContext } from "../context/dataContext";
import { transitionIn } from "./elements/keyframes.elements";
import GridContainer from "./gridContainer";
import Error404 from "./404";

const StyledGridSection = styled(StyledSection)`
  flex-direction: column;
  &.animationOut {
    animation: ${transitionIn} 0.5s ease;
  }
`;

const SearchBarContainer = styled.form`
  background-color: #fff;
  width: 80%;
  margin: 50px auto;
  display: flex;
  border-radius: 8px;
  padding: 10px 15px;
  box-shadow: 5px 5px 10px 2px #0c0c0c75;
`;

const ButtonSearch = styled(StyledButton)`
  padding: 5px 10px 0;
  border: 1px solid #999999;
  transition: all 0.2s ease;

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
`;

export default function Content() {
  const { characters, handleRecharge, getValue, error } =
    useContext(DataContext);

  function handleSubmit(e) {
    e.preventDefault();
    getValue(e.target[0].value);
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
      </SearchBarContainer>
      {error ? <Error404 /> : <GridContainer characters={characters} />}
    </StyledGridSection>
  );
}
