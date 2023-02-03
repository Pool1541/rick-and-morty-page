import styled from "styled-components";
import { flicker } from "./elements/keyframes.elements";
import StyledButton from "./elements/button.elements";
import StyledDiv from "./elements/div.elements";
import StyledSection from "./elements/section.elements";
import { useContext, useRef } from "react";
import { PageContext } from "../context/pageContext";

const StyledImageContainer = styled(StyledDiv)`
  position: relative;
  height: 100%;
  display: flex;
  align-items: flex-end;
  gap: clamp(50px, 6vw, 150px);

  @media screen and (max-width: 1100px) {
    flex: 1 1 auto;
    justify-content: space-between;
  }
`;

const StyledTextContainer = styled(StyledDiv)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1 1 auto;
  height: 100%;

  @media screen and (max-width: 1100px) {
    position: absolute;
    z-index: 20;
    left: 100px;
    top: -150px;
  }

  @media screen and (max-width: 630px) {
    left: unset;
    top: unset;
  }
`;

const StyledWrapper = styled(StyledDiv)`
  max-width: 70%;
  background-color: #ffffff4b;
  box-shadow: 5px 5px 15px 5px #00000034;
  border-radius: 25px;
  text-align: center;
  display: flex;
  gap: 15px;
  flex-direction: column;
  justify-content: center;
  padding: 30px 50px;

  h1 {
    font-family: "Calibre-Semibold";
    font-size: clamp(30px, 2.5vw, 2.5rem);
    color: #ffffff;
  }

  p {
    font-size: clamp(0.7rem, 3.7vw, 0.9rem);
    color: #2b2b30;
    backdrop-filter: blur(5px);
  }

  @media screen and (max-width: 1100px) {
    height: 50%;
    min-height: 330px;
    max-height: 350px;
    width: 70%;
    max-width: 90%;
    width: min(80%, 30.2rem);
    border-radius: 25px;
    padding: 0 25px;
  }
`;

const StyledImage = styled.img`
  width: ${({ small }) =>
    small ? "clamp(200px, 15vw,250px)" : "clamp(350px, 27vw, 450px)"};
  height: ${({ small }) =>
    small ? "clamp(500px, 36w, 600px)" : "clamp(650px, 45vw, 750px)"};
  filter: drop-shadow(5px 5px 5px #00000096);
  position: ${({ absolute }) => absolute || "relative"};
  z-index: ${({ absolute }) => (absolute ? -1 : 10)};

  &.portal {
    width: clamp(450px, 35vw, 600px);
    left: 0;
    right: -10%;
    bottom: 0;
    margin: auto;
  }

  @media screen and (max-width: 630px) {
    &:not(.portal) {
      display: none;
    }

    &.portal {
      width: 90%;
      height: 90%;
      max-width: 350px;
      max-height: 450px;
      right: 0;
      top: -10px;
    }
  }
`;

const StartBtn = styled(StyledButton)`
  width: 95px;
  height: 41px;
  color: #ffffff;
  border: none;

  position: absolute;
  bottom: 30px;
  right: 35px;
  transition: transform 0.2s ease;
  z-index: 50;
  backdrop-filter: blur(10px);
  transition: transform 0.3s ease-in-out;

  &::after {
    content: "";
    position: absolute;
    top: -3px;
    left: -3px;
    width: 100%;
    height: 100%;
    background-color: transparent;
    border: 3px solid #fff;
    border-radius: 7px;
    opacity: 0;
    z-index: -1;
    transform: scaleX(1.1) scaleY(1.3);
    transition: transform 0.3s;
    animation: ${flicker} 0.5s ease-in-out infinite alternate;
  }
`;

export default function Home() {
  const { changePage } = useContext(PageContext);
  const ref = useRef();

  function handleClick(e) {
    e.preventDefault();
    ref.current.classList.add("animation");
    ref.current.addEventListener("animationend", () => {
      changePage("Search");
    });
  }

  return (
    <StyledSection ref={ref}>
      <StyledImageContainer>
        <StyledImage src={require("../images/rick_sanchez.webp")} />
        <StyledImage
          className="portal"
          src={require("../images/portal.webp")}
          absolute="absolute"
        />
        <StyledImage src={require("../images/morty_smith.webp")} small />
      </StyledImageContainer>
      <StyledTextContainer>
        <StyledWrapper>
          <h1>Rick and Morty</h1>
          <p>
            Rick and Morty is an animated science fiction series created by
            Justin Roiland and Dan Harmon. It follows the adventures of drunken
            scientist Rick Sanchez and his grandson Morty Smith as they travel
            through the multiverse in search of wild scientific experiences and
            adventures. With absurd and satirical humor, the show pokes fun at
            themes such as science, pop culture, and family. In addition to its
            intriguing plot, the series is known for its innovative animation
            and complex, well-developed characters. Rick and Morty is a show
            that will make you laugh, think, and keep you on the edge of your
            seat.
          </p>
        </StyledWrapper>
      </StyledTextContainer>
      <StartBtn onClick={handleClick}>START</StartBtn>
    </StyledSection>
  );
}
