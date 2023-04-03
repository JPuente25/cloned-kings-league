import styled from 'styled-components';

const windowWidth = window.innerWidth;

export const Container = styled.div`
   height: 100%;
   width: 100%;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   z-index: 2;

   h3 {
      font-family: var(--font-family-2);
      font-size: 18px;
      font-weight: 700;
      text-align: center;
      margin-bottom: 10px;
   }

   h4 {
      font-family: var(--font-family-1);
      font-size: 12px;
      font-weight: 700;
      text-align: center;
   }
`;

export const ImageBox = styled.div`
   height: ${windowWidth >= 991
      ? windowWidth / 6
      : windowWidth >= 640
      ? windowWidth / 4
      : windowWidth / 1.5}px;
   aspect-ratio: 1 / 1.2;
   display: flex;
   align-items: center;
   justify-content: center;
   background: url('https://kingsleague.pro/wp-content/uploads/2022/12/player-bg-ok.svg') center
      center no-repeat;
   background-size: contain;
   position: relative;
   flex-shrink: 1;
   z-index: 2;
`;

export const GradientPlayer = styled.div`
   display: flex;
   height: ${windowWidth >= 991
      ? windowWidth / 6
      : windowWidth >= 640
      ? windowWidth / 4
      : windowWidth / 1.5}px;
   align-items: center;
   justify-content: center;
   position: absolute;
   top: -20px;

   img {
      height: 100%;
      -webkit-mask-image: linear-gradient(black 80%, transparent 90%);
      mask-image: linear-gradient(black 80%, transparent 90%);
      z-index: 2;
   }
`;
