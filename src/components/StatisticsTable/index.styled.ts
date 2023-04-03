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
      font-size: 10px;
      color: #7e7e7e;
      font-weight: 400;
      text-align: center;

      &:nth-child(2),
      &:nth-child(4) {
         text-align: left;
      }
   }

   @media only screen and (max-width: 640px) {
      grid-template-columns: 1fr 1fr 2fr 2fr 1fr 1fr;
   }
`;

export const TableData = styled.div`
   width: 100%;
   display: grid;
   grid-template-columns: 1fr 1fr 3fr 3fr 2fr 1fr;
   font-size: 12px;
   text-align: center;
   padding: 10px 0;
   gap: 10px;

   img {
      width: 30px;
      height: 30px;
   }

   span {
      margin: auto 0;
   }

   span:nth-of-type(1),
   span:nth-of-type(3) {
      font-weight: 700;
   }

   span:nth-of-type(2),
   span:nth-of-type(3) {
      text-align: left;
   }

   &:nth-child(even) {
      background-color: rgba(157, 157, 157, 0.08);
   }

   @media only screen and (max-width: 640px) {
      grid-template-columns: 1fr 1fr 2fr 2fr 1fr 1fr;
   }
`;
