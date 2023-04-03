import styled from 'styled-components';

export const TitleTable = styled.div`
   width: 100%;
   padding: 10px 0;
   display: grid;
   grid-template-columns: 15% 15% 40% 15% 15%;
   padding: 10px 0px;
   border-bottom: 1px solid white;
   box-shadow: 0 0 5px 0.5px #5c5c5c30;

   div:nth-child(3) {
      grid-column: 4 / 5;
   }

   div {
      width: 40px;
      height: 10px;
      background-color: var(--gray-skeleton-1);
   }
`;

export const TeamTable = styled.div`
   width: 100%;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: start;
   gap: 10px;
   padding-bottom: 40px;
`;

export const TeamBox = styled.div`
   width: 95%;
   height: 35px;
   background-color: var(--gray-skeleton-1);
   margin-top: 10px;
`;