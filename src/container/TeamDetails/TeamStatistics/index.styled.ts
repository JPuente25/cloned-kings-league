import styled from 'styled-components';

export const StyledSection = styled.section`
   display: grid;
   grid-template-columns: repeat(auto-fill, 160px);
   background-color: black;
   gap: 30px;
   padding: 70px 30px 40px 30px;
   /* place-content: center; */
   position: relative;

   @media only screen and (max-width: 480px) {
      place-items: center;
      grid-template-columns: repeat(auto-fill, 120px);
   }
`;

export const TeamName = styled.div`
   position: absolute;
   top: -20px;
   left: 30px;
   padding: 10px 20px;
   background-color: var(--orange1);
   border: none;
   border-radius: 4px;

   h2 {
      color: white;
      font-size: 20px;
      font-family: var(--font-family-1);
      font-weight: 700;
   }
`;

export const TextBox = styled.div`
   width: min-content;
   display: flex;
   flex-direction: column;
   align-items: flex-start;
   justify-content: flex-start;

   @media only screen and (max-width: 480px) {
      align-items: center;
   }

   h1 {
      font-size: 96px;
      font-family: var(--font-family-2);
      text-align: left;
      color: white;

      @media only screen and (max-width: 480px) {
         text-align: center;
         font-size: 72px;
      }
   }

   h4 {
      white-space: nowrap;
      text-align: left;
      font-size: 20px;
      font-family: var(--font-family-1);
      color: var(--orange1);
      font-weight: 400;

      @media only screen and (max-width: 480px) {
         text-align: center;
         font-size: 14px;
      }
   }
`;
