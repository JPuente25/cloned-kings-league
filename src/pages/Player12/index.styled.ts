import styled from 'styled-components';

export const Container = styled.main`
   display: flex;
   flex-direction: column;
   align-items: flex-start;
   justify-content: space-between;
   width: 100%;
   padding: 70px;
   padding-top: 0;
   font-family: var(--font-family-1);
   position: relative;

   h1 {
      font-size: 42px;
      color: white;
      font-weight: 700;
      margin: 120px 0;

      @media only screen and (max-width: 991px) {
         margin: 60px 0;
      }

      @media only screen and (max-width: 480px) {
         margin: 30px 0;
      }
   }

   @media only screen and (max-width: 1140px) {
      padding: 40px;
      padding-top: 0;
   }

   @media only screen and (max-width: 768px) {
      padding: 30px;
      padding-top: 0;
      align-items: center;
   }
`;

export const BackgroundImage = styled.div`
   background-image: linear-gradient(236.07deg, #f7ab35 0.09%, #e8521e 102.47%);
   width: 100%;
   height: 420px;
   position: absolute;
   top: 0;
   left: 0;
   z-index: -1;

   @media only screen and (max-width: 991px) {
      height: 280px;
   }

   @media only screen and (max-width: 480px) {
      height: 360px;
   }
`;
