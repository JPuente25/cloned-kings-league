import styled from "styled-components";

export const CardsContainer = styled.section`
   width: calc(100% - 50px);
   display: grid;
   place-content: center;
   grid-template-columns: 33% 33% 33%;
   gap: 30px;
   margin: 0 auto;

   h1.no-players {
      color: var(--gray-skeleton-1);
      font-size: 92px;
      font-weight: 900;
      font-family: var(--font-family-1);
      text-align: center;
      grid-column: 1 / 4;
      place-self: 50%;
      margin: 170px 0 100px 0;

      @media only screen and (max-width: 768px) {
         font-size: 60px;
         margin: 130px 0 80px 0;
      }

      @media only screen and (max-width: 480px) {
         font-size: 36px;
         margin-top: 100px 0 50px 0;
      }
   }

   @media only screen and (max-width: 1140px) {
      width: calc(100% - 30px);
      grid-template-columns: 50% 50%;
   }

   @media only screen and (max-width: 768px) {
      width: 100%;
      grid-template-columns: 100%;
      gap: 0;
      row-gap: 20px;
   }
`;