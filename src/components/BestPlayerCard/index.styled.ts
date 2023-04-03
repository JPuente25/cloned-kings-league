import styled from "styled-components";

export const Container = styled.article<{bg_img: string}>`
   width: 100%;
   aspect-ratio: 1.4 / 1;
   display: flex;
   align-items: center;
   justify-content: space-between;
   background-image: url(${props => props.bg_img});
   background-position: center;
   background-repeat: no-repeat;
   background-size: cover;
   background-color: var(--gray-skeleton-1);
   position: relative;
   border-radius: 8px;
   contain: content;
   cursor: pointer;

   div.player-info {
      display: flex;
      height: 100%;
      flex-direction: column;
      align-items: space-between;
      justify-content: space-between;
      padding: 20px;
      z-index: 2;
   }

   img {
      z-index: 2;
      position: absolute;
      right: 0%;
   }
`;

export const BgFilter = styled.div`
   background-image: linear-gradient(242.1deg, rgba(255, 255, 255, 0) 2.19%, rgba(0, 0, 0, 60%) 76.64%);
   position: absolute;
   top: 0;
   right: 0;
   bottom: 0;
   left: 0;
`;

export const DataText = styled.div`
   display: flex;
   flex-direction: column;
   align-items: flex-start;
   justify-content: center;

   h1 {
      font-size: 96px;
      font-family: var(--font-family-2);
      color: white;
   }

   h2 {
      font-size: 25.2px;
      font-family: var(--font-family-1);
      color: var(--orange2);
      font-weight: 900;
   }
`;

export const PlayerInfo = styled.div`
   display: flex;
   flex-direction: column;
   align-items: flex-start;
   justify-content: center;
   font-family: var(--font-family-1);
   color: white;

   h3 {
      font-size: 20px;
      font-weight: 700;
   }

   span {
      font-size: 14px;
      font-weight: 400;
   }
`;