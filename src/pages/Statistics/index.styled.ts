import styled from 'styled-components';

export const Container = styled.main`
   background-image: linear-gradient(236.07deg, #f7ab35 0.09%, #e8521e 102.47%);
   font-family: var(--font-family-1);
   padding-top: 70px;

   @media only screen and (max-width: 991px) {
      padding-top: 40px;
   }
`;

export const Title = styled.div`
   width: 100%;
   max-width: 1240px;
   padding-left: 40px;
   margin: 0 auto 70px;

   
   h1 {
      width: min-content;
      font-size: 39.6px;
      font-weight: 700;
      color: white;
      cursor: pointer;
      
      &:hover {
         color: black;
      }
   }

   @media only screen and (max-width: 991px) {
      margin: 0 auto 60px;
   }

   @media only screen and (max-width: 480px) {
      padding: 0 30px;

      h1 {
         width: 100%;
         text-align: center;
      }
   }
`;

export const MainSection = styled.section`
   display: flex;
   align-items: flex-start;
   justify-content: flex-start;

   @media only screen and (max-width: 991px) {
      flex-direction: column;
   }
`;

export const Tabs = styled.div`
   width: 20%;
   display: flex;
   flex-direction: column;
   gap: 10px;
   padding-top: 70px;

   span {
      width: 100%;
      padding: 15px 20px;
      font-size: 18px;
      font-weight: 700;
      color: white;
      text-align: left;
      background-color: rgba(0, 0, 0, 0.15);
      cursor: pointer;
      white-space: nowrap;

      &.active, &:hover {
         background-color: black;
      }
   }

   @media only screen and (max-width: 991px) {
      flex-direction: row;
      gap: 20px;
      width: auto;
      padding-top: 0px;
      flex-wrap: wrap;

      span {
         width: min-content;
      }
   }

   @media only screen and (max-width: 480px) {
      width: 100%;
      padding: 10px;
      gap: 10px;

      span {
         font-size: 14px;
         padding: 10px 15px;
      }
   }
`;

export const OutletContainer = styled.div`
   width: 80%;
   background-color: #f8f8f8;
   padding: 40px;

   @media only screen and (max-width: 991px) {
      width: 100%;
   }

   @media only screen and (max-width: 640px) {
      padding: 40px 15px;

   }
`;
