// global.ts
import { createGlobalStyle } from 'styled-components';
import HelveticaNeueWoff from '../vendor/fonts/HelveticaNeueCyr-Thin.woff';
import HelveticaNeueWoff2 from '../vendor/fonts/HelveticaNeueCyr-Thin.woff2';

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Helvetica Neue';
    src: url(${HelveticaNeueWoff}) format('woff2'),
      url(${HelveticaNeueWoff2}) format('woff');
    font-weight: 300;
    font-style: normal;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }
`;

export default GlobalStyles;
