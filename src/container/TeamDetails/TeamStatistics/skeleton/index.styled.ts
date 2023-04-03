import styled from 'styled-components';

export const StyledSection = styled.section`
   display: grid;
   grid-template-columns: repeat(auto-fill, 160px);
   background-color: black;
   gap: 30px;
   padding: 70px 30px 40px 30px;
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
   height: 40px;
   width: 100px;
   background-color: var(--orange1);
   border: none;
   border-radius: 4px;
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

   div.numerics {
      height: 96px;
      width: 130px;
      background-color: var(--gray-skeleton-2);
      border-radius: 4px;
      opacity:0.3;


      @media only screen and (max-width: 480px) {
         height: 72px;
         width: 100px;
      }
   }

   div.title {
      height: 20px;
      width: 150px;
      background-color: var(--gray-skeleton-2);
      margin-bottom: 10px;
      border-radius: 4px;
      opacity:0.3;


      @media only screen and (max-width: 480px) {
         height: 14px;
         width: 120px;
      }
   }
`;
