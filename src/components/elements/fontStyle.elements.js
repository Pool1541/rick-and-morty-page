import { createGlobalStyle } from "styled-components";
import KavoonWoff from "../../fonts/Kavoon-Regular.woff";
import KavoonWoff2 from "../../fonts/Kavoon-Regular.woff2";
import CalibreLightWoff from "../../fonts/Calibre-Light.woff";
import CalibreLightWoff2 from "../../fonts/Calibre-Light.woff2";
import CalibreMediumWoff from "../../fonts/Calibre-Medium.woff";
import CalibreMediumWoff2 from "../../fonts/Calibre-Medium.woff2";
import CalibreRegularWoff from "../../fonts/Calibre-Regular.woff";
import CalibreRegularWoff2 from "../../fonts/Calibre-Regular.woff2";
import CalibreSemiboldWoff from "../../fonts/Calibre-Semibold.woff";
import CalibreSemiboldWoff2 from "../../fonts/Calibre-Semibold.woff2";

const FontStyle = createGlobalStyle`
  @font-face {
    font-family: 'Kavoon-Regular';
    src: url(${KavoonWoff2}) format('woff2'),
        url(${KavoonWoff}) format('woff');
  }

  @font-face {
    font-family: 'Calibre-Light';
    src: url(${CalibreLightWoff2}) format('woff2'),
        url(${CalibreLightWoff}) format('woff');
  }

  @font-face {
    font-family: 'Calibre-Medium';
    src: url(${CalibreMediumWoff2}) format('woff2'),
        url(${CalibreMediumWoff}) format('woff');
  }

  @font-face {
    font-family: 'Calibre-Regular';
    src: url(${CalibreRegularWoff2}) format('woff2'),
        url(${CalibreRegularWoff}) format('woff');
  }

  @font-face {
    font-family: 'Calibre-Semibold';
    src: url(${CalibreSemiboldWoff2}) format('woff2'),
        url(${CalibreSemiboldWoff}) format('woff');
  }
`;

export default FontStyle;
