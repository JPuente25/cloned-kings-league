import styled from 'styled-components';

const delayInterval = 3; //speed
const time = 14 * delayInterval; //(14: number of sponsors ) * delayInterval
const windowWidth = window.innerWidth;
const carouselWidth = windowWidth * 0.4; //0.4: 40% of window width: Carousel witdth

export const Container = styled.article`
   width: 100%;
   padding: 40px 30px;
   background-image: linear-gradient(0deg, #202b64 0%, #05060d 80%, #000000 90.78%);
   display: grid;
   gap: 15px;
   grid-template-columns: 12.5% 12.5% 40% 12.5% 12.5%;

   @media only screen and (max-width: 991px) {
      grid-template-columns: repeat(2, 1fr);
   }

   h3 {
      font-family: var(--font-family-1);
      font-size: 14px;
      font-weight: 200;
      color: white;
      width: 100%;

      span {
         font-weight: 700;
      }
   }
`;

export const SponsorsContainer = styled.div`
   height: 92px;
   width: 100%;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: space-between;

   @media only screen and (max-width: 991px) {
      align-items: flex-start;

      &.main-partner {
         grid-column: 1 / 3;
      }
   }

   div.title {
      width: 100%;
      border-bottom: 1px solid var(--orange1);
      padding: 3px 0px;

      h3 {
         text-align: center;
      }
   }

   img {
      height: 50px;
      margin: 0 auto;
   }
`;

export const SponsorsCarousel = styled.div`
   width: 100%;
   height: 50px;
   display: flex;
   justify-content: space-between;
   align-items: center;
   overflow: hidden;
   position: relative;

   @keyframes moving {
      0% {
         transform: translateX(0px);
      }

      ${windowWidth > 991 ? `${50000 / windowWidth}%` : `40%`}, //LESS %, BIGGER SEPARATION
      100% {
         transform: translateX(var(--sponsors-translate));
      }
   }

   div.sponsor-container {
      aspect-ratio: 3 / 1;
      position: absolute;
      top: 10%;
      right: ${`-${
         (3 * carouselWidth) / 13
      }px`}; //13: aspect ratio: container width / img height, 3: aspect ratio img width/height
      animation: moving ${time}s linear infinite;
      display: flex;
      align-items: center;
      justify-content: center;

      @media only screen and (max-width: 991px) {
         right: -135px;
      }
   }

   img {
      height: ${carouselWidth / 13}px; //13: aspect ratio: container width / img height
      max-height: 50px;
      max-width: 150px;

      @media only screen and (max-width: 991px) {
         height: 45px;
      }
   }

   ${new Array(14).fill(true).map(
      //14: number of sponsors
      (sponsor, i) =>
         `div.sponsor-container:nth-child(${i + 1}) {
            animation-delay: ${delayInterval * i}s;
         }`
   )}
`;
