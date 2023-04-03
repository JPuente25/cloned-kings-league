import styled from 'styled-components';

export const Container = styled.article`
   display: flex;
   justify-content: center;
   align-items: center;
   width: 100%;

   @media only screen and (max-width: 991px) {
      flex-direction: column;
   }
`;

export const QueensBanner = styled.div`
   width: 100%;
   height: 300px;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: space-between;
   padding: 40px;
   background: url('https://kingsleague.pro/wp-content/uploads/2023/03/bg-queens.jpg') center center
      no-repeat;
   background-size: cover;

   img {
      height: 148px;
   }

   @media only screen and (max-width: 480px) {
      height: 250px;
      img {
         height: 111px;
      }
   }
`;

export const PrinceBanner = styled.div`
   width: 100%;
   height: 300px;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: space-between;
   padding: 40px;
   background: url('https://kingsleague.pro/wp-content/uploads/2023/03/bg-prince.jpg') center center
      no-repeat;
   background-size: cover;

   img {
      height: 120px;
   }

   @media only screen and (max-width: 480px) {
      height: 250px;
      img {
         height: 90px;
      }
   }
`;

export const SignupButton = styled.button`
   width: 100%;
   height: 56px;
   max-width: 225px;
   font-size: 20px;
   font-family: var(--font-family1);
   font-weight: 700;
   border-radius: 8px;
   color: #39165c;
   border: 2px solid #39165c;
   box-shadow: 0 0 10px #00ccbdde;
   text-align: center;
   cursor: pointer;
   transition: all ease 0.2s;

   &.queens {
      background-color: #00ccbd;
   }

   &.prince {
      background-color: #a2f200;
   }

   &:hover {
      background-color: #39165c !important;
      color: white;
   }

   @media only screen and (max-width: 480px) {
      font-size: 16px;
      height: 46px;
   }
`;
