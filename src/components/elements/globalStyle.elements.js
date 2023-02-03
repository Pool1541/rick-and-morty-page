import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-size: 18px;
    font-family: "Calibre-Medium", sans-serif;
  }

  body {
    min-height: 100vh;
    background-image: linear-gradient(
    to left top,
    #2ab212,
    #48be16,
    #60c91a,
    #76d51f,
    #8be024,
    #86e84c,
    #82f06b,
    #81f886,
    #77fbb6,
    #87fbd9,
    #aaf8ee,
    #d4f3f4
  );
    background-repeat: no-repeat;
    scroll-behavior: smooth;
  }

  input::selection, a::selection, h1::selection, h2::selection, h3::selection, h4::selection, p::selection, button::selection, span::selection, li::selection, img::selection {
  background-color: rgb(195, 240, 225);
  color: rgb(63, 185, 185);
  }

  a {
    cursor: pointer;
    text-decoration: none;
  } 

  img {
    pointer-events: none;
    user-select: none;
  }

  ul {
    list-style: none;
  }

  &::-webkit-scrollbar {
    -webkit-appearance: none;
  }

  &::-webkit-scrollbar:vertical {
    width: 10px;
  }

  &::-webkit-scrollbar-button:increment {
    display: none;
  }

  &::-webkit-scrollbar:horizontal {
    height: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #8be024;
    border-radius: 20px;
    border: 2px solid #ffffff;
  }

  &::-webkit-scrollbar-track {
    background-color: #dadada;
    border-radius: 0px;
  }
`;

export default GlobalStyle;
