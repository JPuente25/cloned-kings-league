import styled from 'styled-components';

export const Container = styled.article`
   background: url(https://kingsleague.pro/wp-content/uploads/2023/03/bg-banner-vip-scaled.jpg)
      center center no-repeat;
   background-size: cover;
   background-color: var(--gray-skeleton-1);
   display: flex;
   justify-content: center;
   align-items: center;
   padding: 20px 40px;
   gap: 10%;
   font-family: var(--font-family1);
   min-height: 180px;

   @media only screen and (max-width: 991px) {
      flex-direction: column;
      gap: 20px;
      padding: 10px 0px;
   }

   svg:not(.ticket) {
      width: 100%;
      max-width: 480px;
   }

   span {
      font-size: 12px;
      font-weight: 700;
      color: white;
   }
`;

export const BuyTicketsContainer = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   gap: 10px;
`;

export const ButtonsContainer = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   gap: 15px;

   @media only screen and (max-width: 480px) {
      flex-direction: column;
   }

   button {
      height: 36px;
      font-size: 12px;
      font-family: var(--font-family-2);
      font-weight: 900;
      color: black;
      padding: 0 15px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 4px;
      gap: 10px;
      border: none;
      width: 150px;
      transition: all ease 0.2s;
      cursor: pointer;

      a {
         text-decoration: none;
         color: black;
      }

      &.regular {
         background-color: white;

         &:hover {
            background-color: black;
            color: white;

            a {
               color: white;
            }
         }
      }

      &.vip {
         background-color: #fab600;

         &:hover {
            background-color: black;

            color: #fab600;

            a {
               color: #fab600;
            }
         }
      }
   }
`;
