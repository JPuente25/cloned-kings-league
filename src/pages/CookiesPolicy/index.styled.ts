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

   h1 {
      font-size: 32px;
      font-weight: 400;
      margin-bottom: 20px;
   }

   h2 {
      font-size: 24px;
      font-weight: 700;
      margin-bottom: 30px;
   }

   h3 {
      font-size: 14px;
      font-weight: 700;
      margin: 40px 0 20px;
   }

   p,
   a {
      font-size: 12px;
      font-weight: 400;
      margin-bottom: 20px;
   }

   a {
      text-decoration: none;
      color: var(--orange2);
   }

   ol {
      padding-left: 30px;
      margin-bottom: 20px;

      li::marker {
         font-size: 11px;
      }

      p {
         margin: 0;
      }

      &.conditions {
         h3 {
            font-size: 12px;
            font-weight: 700;
            margin: 60px 0;
            line-height: 1.5;
         }

         p {
            margin: 0px 0px 20px -30px;
         }

         ul {
            list-style-type: square;
            margin-bottom: 20px;
            p {
               margin: 0;
            }
         }
      }
   }

   article {
      width: 100%;
      margin: 20px 0;

      @media only screen and (max-width: 991px) {
         overflow-x: scroll;
      }

      table {
         max-width: 1000px;
         margin: 20px 0;
         border-collapse: collapse;

         tr {
            border-top: 1px solid #dee2e6;
         }

         td {
            padding: 5px;
         }

         td:nth-of-type(1) {
            min-width: 120px;
         }
         td:nth-of-type(2) {
            min-width: 460px;
         }
         td:nth-of-type(3) {
            min-width: 130px;
         }
         td:nth-of-type(4) {
            min-width: 80px;
         }
         td:nth-of-type(5) {
            min-width: 80px;
         }
         td:nth-of-type(6) {
            min-width: 140px;
         }
      }
   }

   @media only screen and (max-width: 991px) {
      padding: 40px 30px;
   }
`;
