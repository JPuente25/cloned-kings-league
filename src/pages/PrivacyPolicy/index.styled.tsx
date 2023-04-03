import styled from 'styled-components';

export const Container = styled.main`
   width: 100%;
   padding: 70px 40px;
   background-color: #f8f8f8;

   div {
      width: 100%;
      max-width: 1240px;
      margin: 0 auto;
   }


   h2 {
      font-size: 24px;
      font-weight: 700;
   }

   h3 {
      font-size: 20px;
      font-weight: 400;
      padding: 30px 0px 20px;
   }

   p,
   a {
      font-size: 12px;
      font-weight: 400;
      margin-top: 20px;
   }

   a {
      text-decoration: none;
      color: var(--orange2);
   }

   ul {
      margin-top: 20px;
      padding-left: 30px;
      list-style: square outside;

      p {
         margin: 0;
      }

      li::marker {
         font-size: 12px;
         text-align: center;
      }
   }

   table {
      text-align: left;
      border-collapse: collapse;
      width: 100%;
      max-width: 600px;
      margin-top: 20px;

      p {
         margin: 0px 0px 20px;
      }

      td,
      th {
         padding: 5px;
         border: 1px solid black;
      }

      &.company tr {
         td:nth-of-type(1) {
            width: 30%;
         }

         td:nth-of-type(2) {
            width: 70%;
         }
      }

      &.laws tr {
         td:nth-of-type(1) {
            width: 35%;
         }

         td:nth-of-type(2) {
            width: 30%;
         }

         td:nth-of-type(3) {
            width: 35%;
         }
      }

      &.personal-info tr td, &.rights tr td{
            width: 50%;
      }
   }

   @media only screen and (max-width: 991px) {
      padding: 40px 30px;
   }
`;
