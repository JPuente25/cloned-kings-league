import styled from 'styled-components';

export const Header = styled.div`
   width: 100%;
   display: flex;
   align-items: center;
   justify-content: space-between;
   padding: 15px 20px 40px 20px;
   width: 100%;
   border-bottom: 1px solid var(--light2);

   div.previous, div.next {
      width: 30px;
      height: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      transform: rotate(-90deg);

      &.next {
         transform: rotate(90deg);
      }
   }

   div.text {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      div.title {
         width: 50%;
         height: 16px;
         background-color: var(--gray-skeleton-1);
         margin-bottom: 8px;
      }

      div.date {
         width: 50%;
         height: 16px;
         background-color: var(--gray-skeleton-1);
         margin-bottom: 8px;
      }
   }
`;

export const TableGames = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: flex-start;
   width: 100%;
   padding-bottom: 20px;
`;

export const GameContainer = styled.div`
   width: 90%;
   height: 45px;
   margin: 10px 0;
   background-color: var(--gray-skeleton-1);
   border-radius: 4px;
`;
