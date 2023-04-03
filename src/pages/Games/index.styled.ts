import styled from 'styled-components';

export const Container = styled.main`
   width: 100%;
   display: flex;
   flex-direction: column;
   align-items: flex-start;
`;

export const HeaderTitle = styled.div`
   background-image: linear-gradient(236.07deg, #f7ab35 0.09%, #e8521e 102.47%);
   width: 100%;
   padding: 70px 0px 20px;

   div {
      width: 100%;
      padding: 0 40px;
      max-width: 1200px;
      margin: 0 auto;

      h1 {
         width: 100%;
         font-family: var(--font-family-1);
         color: white;
         font-size: 39.6px;
         margin-bottom: 30px;
      }

      div.select {
         padding: 0;

         select {
            border: 1px solid black;
         }
      }

      @media only screen and (max-width: 480px) {
         padding: 0 30px;

         h1 {
            text-align: center;
         }

         div.select {
            padding: 0;

            select {
               margin: 0;
               border: 1px solid black;
            }
         }
      }
   }
`;

export const GamesSection = styled.section`
   width: 100%;
   padding: 30px 0;
   max-width: 1240px;
   margin: 0 auto;

   h2 {
      font-family: var(--font-family-1);
      font-size: 24px;
      font-weight: 600;
      margin: 20px 0 20px 30px;
   }
`;

export const GamesWeek = styled.div`
   padding: 30px 0;
   display: flex;
   flex-direction: column;

   img.playoff {
      width: 100%;
      max-width: 1200px;
      margin: 0 auto;
   }
`;
