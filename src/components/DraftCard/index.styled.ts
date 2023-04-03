import styled from 'styled-components';

export const Container = styled.div`
   display: flex;
   flex-direction: column;
   color: white;
   border-radius: 8px;
   box-shadow: 0 0 4px 0 rgba(0,0,0,.25);
   contain: content;
`;

export const TopSection = styled.div`
   display: flex;
`;

export const PlayerPicture = styled.div<{playerImg: string}>`
   position: relative;
   min-width: 100px;
   background: url(${props => props.playerImg}) no-repeat center center;
   background-size: cover;
   background-color: var(--gray-skeleton-1);

   .player-number {
      width: 100%;
      aspect-ratio: 1.35 / 1;
      position: absolute;
      bottom: 0px;
      display: flex;
      align-items: center;
      justify-content: center;

      img {
         position: absolute;
         bottom: 0px;
         width: 100%;
      }

      h2 {
         font-family: var(--font-family-2);
         font-size: 25.2px;
         color: var(--orange1);
         z-index: 2;
         padding-top: 20%;
      }
   }
`;

export const PersonalData = styled.div`
   width: 100%;
   display: flex;
   flex-direction: column;
   justify-content: space-between;

   .data {
      background-color: #f1f1f1;
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 30px;
      padding: 15px 15px 20px;

      .name {
         font-family: var(--font-family-2);
         color: black;
         height: 36px;
         font-size: 18px;
      }

      .role {
         display: flex;
         justify-content: space-between;

         span {
            font-size: 12px;
            font-weight: 700;
            background-color: black;
            width: 70%;
            height: min-content;
            padding: 3px 0px;
            text-align: center;
            border-radius: 2px;
         }

         img {
            height: 20px;
            width: min-content;
            margin-right: 15px;
         }
      }
   }

   .numerics {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      justify-content: space-between;
      list-style: none;
      font-size: 12px;
      font-weight: 700;
      padding: 10px 15px;
      background-color: white;

      h4 {
         color: var(--orange1);
      }

      p {
         color: black;
      }

      li {
         display: flex;
         flex-direction: column;
      }
   }
`;

export const StatisticsPoints = styled.ul`
   display: flex;
   flex-wrap: wrap;
   justify-content: space-around;
   list-style: none;
   padding: 15px;
   gap: 15px;
   background-image: var(--gradient1);

   h3 {
      font-size: 20px;
      font-weight: 700;
   }

   p {
      font-size: 12px;
      color: black;
   }

   li {
      display: flex;
      flex-direction: column;
      align-items: center;
   }
`;
