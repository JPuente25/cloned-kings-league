import styled from 'styled-components';

export const Container = styled.article`
   display: flex;
   flex-direction: column;
   justify-content: flex-start;
   width: 100%;
   border-radius: 8px;
   box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
`;

export const Title = styled.div`
   padding: 15px 10px;

   span {
      display: block;
      height: 20px;
      width: 100px;
      background-color: var(--gray-skeleton-1);
      border-radius: 4px;
   }
`;

export const RankOne = styled.div`
   width: 100%;
   aspect-ratio: 1.5 / 1;
   background-color: var(--gray-skeleton-1);
`;

export const Top5Table = styled.div`
   width: 100%;
   display: flex;
   flex-direction: column;

   div.table-header {
      display: grid;
      grid-template-columns: 20% 20% 40% 20%;
      margin-top: 10px;

      span {
         height: 10px;
         width: 80%;
         padding: 10px;
         background-color: var(--gray-skeleton-1);
         margin: 0 auto;
         margin-bottom: 10px;
      }
   }

   div.table-data {
      display: grid;
      grid-template-columns: 20% 20% 40% 20%;
      border-top: 1px solid #00000020;
      padding: 10px 0px;

      span {
         height: 12px;
         width: 80%;
         padding: 10px;
         background-color: var(--gray-skeleton-1);
         margin: 0 auto;
      }

      span:nth-of-type(2) {
         width: 30px;
         height: 30px;
         border-radius: 50%;
      }
   }
`;