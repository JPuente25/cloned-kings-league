import styled from 'styled-components';

export const CardContainer = styled.div`
   width: 100%;
   display: grid;
   grid-template-columns: repeat(3, 1fr);
   gap: 30px;
   padding: 70px 40px;

   @media only screen and (max-width: 991px) {
   grid-template-columns: repeat(2, calc(50% - 15px));
   padding: 40px 30px;
   }

   @media only screen and (max-width: 640px) {
   grid-template-columns: 1fr;
   padding: 40px 30px;
   }
`;