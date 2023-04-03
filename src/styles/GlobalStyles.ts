import { createGlobalStyle } from "styled-components";
const carouselWidth = window.innerWidth * 0.4;
const translateAmmount = carouselWidth + 200;

export const GlobalStyles = createGlobalStyle`
  :root {
     font-family: 'Archivo', sans-serif;
     font-size: 16px;
      line-height: 1;
      font-weight: 400;
      height: 100%;

      font-synthesis: none;
      text-rendering: optimizeLegibility;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      -webkit-text-size-adjust: 100%;

      --font-family-1: 'Archivo', sans-serif;
      --font-family-2: 'Arial Black', sans-serif;
      --orange1: #eca333;
      --orange2: #e8521e;
      --orange3: #f7ab35;
      --light1: #ffffff80;
      --light2: #5c5c5c20;
      --gradient1: linear-gradient(236.07deg,#f7ab35 .09%,#e8521e 102.47%);
      --dark1: #311d09;
      --sponsors-translate: ${window.innerWidth <= 991 ? -window.innerWidth - 200 : -translateAmmount}px;
      --gray-skeleton-1: #E9E9E9;
      --gray-skeleton-2: #BFBFBF;

      /* --black: #04152d;
      --black2: #041226;
      --black3: #020c1b;
      --black-lighter: #1c4b91;
      --black-light: #173d77;
      --pink: #da2f68;
      --orange: #f89e00;
      --gradient: linear-gradient(98.37deg, #f89e00 0.99%, #da2f68 100%);
      --skeleton: rgba(178, 170, 181, 0.7); */
   }

   ::selection {
      background-color: var(--orange1);
   }

   html {
      height: 100%;
   }

   * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
   }
   
   body {
      height: 100%;
   }

   p {
      line-height: 1.5;
   }
`;