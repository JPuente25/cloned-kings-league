import styled from 'styled-components';

export const Container = styled.div`
   /* width: 100%; */
`;

export const BackgroundImage = styled.div`
   position: absolute;
   top: 0;
   background: url("https://kingsleague.pro/wp-content/uploads/2023/01/bg-home.jpg") center center no-repeat;
   background-size: cover;
   width: 100%;
   height: 420px;

   @media only screen and (max-width: 991px) {
      height: 280px;
   }
`;

export const MainSection = styled.section`
   width: 100%;
   display: flex;
   justify-content: center;
   padding: 140px 40px;
   gap: 30px;
   position: relative;

   @media only screen and (max-width: 991px) {
      padding: 120px 20px;
      gap: 15px;
   }

   @media only screen and (max-width: 640px) {
      flex-direction: column;
      align-items: center;
   }
`;

export const TablesContainer = styled.div`
   width: calc(37.5% - 20px);
   flex-shrink: 0;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: flex-start;
   gap: 15px;

   @media only screen and (max-width: 991px) {
      width: calc(50% - 20px);
   }

   @media only screen and (max-width: 640px) {
      width: 100%;
      margin-bottom: 20px;
   }
`;

export const CardsContainer = styled.div`
   width: calc(62.5% - 20px);
   height: min-content;
   display: grid;
   grid-template-columns: 50% 50%;
   gap: 15px;
   row-gap: 40px;

   @media only screen and (max-width: 991px) {
      width: calc(50% - 20px);
   }

   @media only screen and (max-width: 640px) {
      width: 100%;
      padding: 0 7.5px;
      place-content: center;
   }

   article:nth-child(1) {
      grid-column: 1 / 3;
      height: 350px;
      @media only screen and (max-width: 991px) {
         height: auto;
         aspect-ratio: 1.4 / 1;
      }
   }

   article:nth-child(2),
   article:nth-child(3) {
      @media only screen and (max-width: 1168px) {
         height: 242px;
      }
      @media only screen and (max-width: 991px) {
         grid-column: 1 / 3;
         height: auto;
         aspect-ratio: 1.4 / 1;
      }
   }

   section {
      grid-column: 1 / 3;
   }
`;
