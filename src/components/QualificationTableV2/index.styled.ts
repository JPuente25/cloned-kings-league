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

   img {
      width: 30px;
      height: 30px;
      cursor: pointer;
   }

   h4 {
      font-size: 12px;
      font-weight: 400;

      &.rank {
         font-weight: 700;
      }

      &:last-of-type {
         place-self: center;
         justify-self: start;
         cursor: pointer;
         &:hover {
            color: var(--orange1);
         }
      }
   }

   h5 {
      font-size: 12px;
      font-weight: 400;

      &:first-of-type {
         font-weight: 700;
      }
   }

   &:nth-child(1):before,
   &:nth-child(2):before,
   &:nth-child(3):before,
   &:nth-child(4):before,
   &:nth-child(5):before,
   &:nth-child(6):before,
   &:nth-child(7):before,
   &:nth-child(8):before {
      content: '';
      width: 5px;
      height: 90%;
      position: absolute;
      top: 5%;
      left: 2px;
      background-image: linear-gradient(236.07deg, #f7ab35 0.09%, #e8521e 102.47%);
   }
`;
