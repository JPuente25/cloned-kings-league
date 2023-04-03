import styled from 'styled-components';

export const Main = styled.div`
   padding: 70px 40px;
   background-color: #f8f8f8;

   @media only screen and (max-width: 480px) {
      padding: 30px 15px;
   }
`;

export const Container = styled.div`
   display: flex;
   width: 100%;
   max-width: 1200px;
   margin: 0 auto;
   border-radius: 8px;
   contain: content;
   box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
   background-color: white;

   @media only screen and (max-width: 991px) {
      flex-direction: column;
   }
`;

export const CupraImg = styled.div`
   width: 60%;
   background: url('https://kingsleague.pro/wp-content/uploads/2023/02/cupra-arena.jpg') center
      center no-repeat;
   background-size: cover;
   background-color: var(--gray-skeleton-1);

   @media only screen and (max-width: 991px) {
      width: 100%;
      aspect-ratio: 1.5 / 1;
   }
`;

export const Formulary = styled.form`
   width: 40%;
   padding: 30px;

   @media only screen and (max-width: 991px) {
      width: 100%;
   }

   h2 {
      font-size: 25.2px;
      margin-bottom: 20px;
   }

   p {
      font-size: 12px;
   }

   div.ticket-msg {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      margin-top: 20px;
      gap: 5px;

      p {
         white-space: nowrap;

         @media only screen and (max-width: 480px) {
            white-space: normal;
         }
      }

      img {
         margin-bottom: 10px;
         height: 20px;
      }
   }
`;

export const Field = styled.div`
   width: 100%;
   display: flex;
   flex-direction: column;
   margin-top: 20px;
   gap: 5px;

   label {
      font-size: 13px;
      font-weight: 700;
   }

   input,
   select {
      height: 48px;
      width: 100%;
      border-radius: 8px;
      border: 1px solid black;
      padding: 0px 15px;
      font-size: 12px;

      &:focus-visible {
         outline: 0;
         background-color: #f8f8f8;
      }
   }

   &.birth_date div {
      display: flex;
      align-items: center;
      gap: 5px;

      h4 {
         font-weight: 400;
      }

      input {
         height: 35px;
         width: 70px;

         &::-webkit-outer-spin-button,
         &::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
         }

         /* Firefox */
         &[type='number'] {
            -moz-appearance: textfield;
         }

         @media only screen and (max-width: 991px) {
            padding: 0 5px;
            width: 40px;
            &:last-child {
               width: 70px;
            }
         }
      }
   }

   &.terms_and_conditions {
      flex-direction: row;
      align-items: center;

      input {
         cursor: pointer;
         width: 15px;
         height: 15px;
      }

      a {
         text-decoration: none;
         color: var(--orange2);
      }
   }
`;

export const SubmitButton = styled.button`
   height: 53px;
   width: 100%;
   border-radius: 8px;
   background-color: black;
   color: white;
   font-weight: 700;
   font-size: 18px;
   margin-top: 20px;
   cursor: pointer;
   transition: all ease 0.15s;

   &:hover {
      background-color: var(--orange1);
      border: none;
   }
`;
