import { useContext } from "react";
import styled from "styled-components";
import { PageContext } from "../context/pageContext";
import StyledDiv from "./elements/div.elements";
import StyledHeader from "./elements/header.elements";
import StyledNavBar from "./elements/navBar.elements";

const LogoContainer = styled(StyledDiv)`
  overflow: hidden;
  max-height: 100%;
  outline: none;

  img {
    width: min(30vw, 200px);
    height: 100px;
    object-fit: cover;
  }
`;

const LinksContainer = styled.ul`
  display: flex;
  gap: min(3vw, 2rem);
  text-transform: uppercase;
  position: relative;
  z-index: 30;

  a {
    font-size: min(3.5vw, 1rem);
    color: #ffffff;
    font-family: "Kavoon-Regular", sans-serif;
  }
`;

export default function Header() {
  const { changePage } = useContext(PageContext);
  return (
    <StyledHeader>
      <StyledNavBar>
        <LogoContainer as="a" href="#">
          <img
            src={require("../images/logo.png")}
            title="Logo"
            alt="Logo de Rick&Morty"
          />
        </LogoContainer>
        <LinksContainer>
          <li>
            <a onClick={() => changePage("Home")}>Home</a>
          </li>
          <li>
            <a onClick={() => changePage("Search")}>Search</a>
          </li>
          <li>
            <a onClick={() => changePage("Contact")}>Contact</a>
          </li>
        </LinksContainer>
      </StyledNavBar>
    </StyledHeader>
  );
}
