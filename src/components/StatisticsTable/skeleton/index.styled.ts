import styled from 'styled-components';

export const Container = styled.article`
   width: 100%;
   display: flex;
   flex-direction: column;
   margin-top: 40px;

   @media only screen and (max-width: 480px) {
      overflow-x: scroll;
   }
`;

export const TableContainer = styled.div`
   width: 100%;
   min-width: 420px;
`;

export const TableHeader = styled.div`
   width: 100%;
   display: grid;
   grid-template-columns: 1fr 1fr 3fr 3fr 2fr 1fr;
   padding: 10px 0;
   border-bottom: 1px solid black;
   gap: 10px;

   span {
      background-color: var(--gray-skeleton-1);
      height: 12px;
   }

   @media only screen and (max-width: 640px) {
      grid-template-columns: 1fr 1fr 2fr 2fr 1fr 1fr;
   }
`;

export const TableData = styled.div`
   width: 100%;
   display: grid;
   grid-template-columns: 1fr 1fr 3fr 3fr 2fr 1fr;
   text-align: center;
   padding: 10px 0;
   gap: 10px;

   span {
      width: 100%;
      background-color: var(--gray-skeleton-1);
      height: 14px;
      margin: auto 0;
   }

   span:nth-of-type(2) {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      margin: auto auto;
   }

   @media only screen and (max-width: 640px) {
      grid-template-columns: 1fr 1fr 2fr 2fr 1fr 1fr;
   }
`;
