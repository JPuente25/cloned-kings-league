import styled from 'styled-components';

export const Container = styled.main`
   width: 100%;
   display: flex;
   flex-direction: column;
   align-items: flex-start;

   div.title {
      background-image: linear-gradient(236.07deg, #f7ab35 0.09%, #e8521e 102.47%);
      width: 100%;
      padding: 70px 0px;

      @media only screen and (max-width: 991px) {
         padding: 40px 0px;
      }
      
      @media only screen and (max-width: 768px) {
         text-align: center;
      }
   }

   h1 {
      width: 100%;
      max-width: 1200px;
      padding-left: 40px;
      margin: 0 auto;
      font-family: var(--font-family-1);
      color: white;
      font-size: 39.6px;

      @media only screen and (max-width: 768px) {
         padding: 0;
      }
   }

   div.children {
      width: 100%;
   }
`;
