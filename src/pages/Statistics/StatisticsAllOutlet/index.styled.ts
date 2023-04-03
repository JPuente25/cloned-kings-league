import styled from 'styled-components';

export const Container = styled.div`
   display: grid;
   grid-template-columns: repeat(3, 1fr);
   gap: 30px;

   @media only screen and (max-width: 1140px) {
      grid-template-columns: repeat(2, 1fr);

      article {
         //RANK CONTAINER

         article {
            //BEST PLAYER CARD
            aspect-ratio: 1.5 / 1;
            img {
               right: 0%;
            }

            h1 {
               font-size: 70px;
            }
         }

         &:nth-child(3) {
            //3RD RANK CONTAINER
            grid-column: 1 / 3;
            grid-row: 2 / 3;

            article div.player-info {
               justify-content: center;
               gap: 40px;
            }

            div.table-header,
            div.table-data {
               grid-template-columns: 1fr 1fr 6fr 1fr;
            }
         }
      }
   }

   @media only screen and (max-width: 640px) {
      grid-template-columns: 1fr;
      grid-template-rows: repeat(3, 1fr);

      article {
         //RANK CONTAINER
         grid-column: 1 / 3;

         article div.player-info {
            justify-content: center;
            gap: 40px;
         }

         div.table-header,
         div.table-data {
            grid-template-columns: 1fr 1fr 4fr 1fr !important;
            
            span {
               padding: 10px 0px;
            }
         }
      }
   }


   @media only screen and (max-width: 480px) {
      article div.table-header,
      article div.table-data {
         grid-template-columns: 1fr 1fr 3fr 1fr !important;
      }
   }
`;
