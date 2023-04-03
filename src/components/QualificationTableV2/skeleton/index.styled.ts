import styled from 'styled-components';

export const Container = styled.div`
   width: 100%;
`;

export const TitleTable = styled.div`
   width: 100%;
   font-family: var(--font-family1);
   font-size: 10px;
   color: #7e7e7e;
   padding: 10px 0;
   display: grid;
   grid-template-columns: 1fr 1.2fr 10fr 1fr 1fr 1fr 1fr 1fr;
   padding: 10px 0px;
   text-align: center;
   border-bottom: 1px solid black;

   span:first-child {
      text-align: left;
   }

   span:nth-child(3) {
      grid-column: 4 / 5;
   }

   @media only screen and (max-width: 991px) {
      grid-template-columns: 1fr 1.2fr 6fr 1fr 1fr 1fr 1fr 1fr;
   }

   @media only screen and (max-width: 640px) {
      grid-template-columns: 1fr 1.2fr 4fr 1fr 1fr 1fr 1fr 1fr;
   }

   @media only screen and (max-width: 480px) {
      grid-template-columns: 1fr 1.2fr 2fr 1fr 1fr 1fr 1fr 1fr;
   }
`;

export const TeamTable = styled.div`
   width: 100%;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: start;
   overflow: hidden;
   scrollbar-width: 0px;
   transition: height ease 0.5s;
   height: 100%;

   &::-webkit-scrollbar {
      display: none;
   }
`;

export const TeamBox = styled.div`
   width: 100%;
   height: 50px;
   display: grid;
   grid-template-columns: 1fr 1.2fr 10fr 1fr 1fr 1fr 1fr 1fr;
   align-items: center;
   place-items: center;
   border: none;
   padding: 10px 0px;
   position: relative;

   &:nth-child(odd) {
      background-color: #f8f8f8;
   }

   @media only screen and (max-width: 991px) {
      grid-template-columns: 1fr 1.2fr 6fr 1fr 1fr 1fr 1fr 1fr;
   }

   @media only screen and (max-width: 640px) {
      grid-template-columns: 1fr 1.2fr 4fr 1fr 1fr 1fr 1fr 1fr;
   }

   @media only screen and (max-width: 480px) {
      grid-template-columns: 1fr 1.2fr 2fr 1fr 1fr 1fr 1fr 1fr;
   }

   div {
      width: 80%;
      height: 30px;
      background-color: var(--gray-skeleton-1);
      border-radius: 4px;

      &.logo {
         border-radius: 50%;
         width: 30px;
      }


   }
`;