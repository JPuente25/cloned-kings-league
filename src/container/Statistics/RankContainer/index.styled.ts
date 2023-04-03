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
   h3 {
      font-size: 20px;
   }
`;

export const RankOne = styled.div`
   article {
      border-radius: 0;
      aspect-ratio: 1.25 / 1;

      img {
         right: -10%;
      }

      div.player-info {
         h2 {
            color: white;
            font-weight: 700;
            font-size: 20px;
         }
      }
   }
`;

export const Top5Table = styled.div`
   width: 100%;
   display: flex;
   flex-direction: column;

   div.table-header {
      display: grid;
      grid-template-columns: 20% 20% 40% 20%;

      span {
         font-family: var(--font-family-2);
         font-size: 10px;
         font-weight: 700;
         text-align: center;
         padding: 10px;

         &.name {
            padding-left: 20px;
            text-align: left;
         }
      }
   }

   div.table-data {
      display: grid;
      grid-template-columns: 20% 20% 40% 20%;
      border-top: 1px solid #00000020;
      padding: 10px 0px;

      span {
         font-family: var(--font-family-2);
         font-size: 12px;
         font-weight: 700;
         text-align: center;
         padding: 10px;

         &:first-of-type {
            color: #5c5c5c;
         }

         &.name {
            padding-left: 20px;
            text-align: left;
         }
      }

      img.logo {
         width: 30px;
         height: 30px;
         margin: 0 auto;
      }
   }
`;
