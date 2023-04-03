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
      margin-bottom: 40px;
   }

   h3 {
      font-size: 14px;
      font-weight: 700;
      margin: 40px 0 20px;
   }

   h3 a {
      font-size: 14px !important;
      font-weight: 700 !important;
   }

   h4 {
      font-size: 12px;
      font-weight: 700;
      margin: 20px 0;
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

   span {
      color: red;
      font-style: italic;
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

   h5 {
      font-size: 12px;
      font-weight: 700;
      margin-bottom: 20px;
      line-height: 1.5;
   }

   @media only screen and (max-width: 991px) {
      padding: 40px 30px;
   }
`;
