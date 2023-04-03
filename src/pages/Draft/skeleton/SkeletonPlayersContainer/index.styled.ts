import styled from "styled-components";

export const PlayersContainer = styled.section`
   display: grid;
   grid-template-columns: repeat(3, 1fr);
   gap: 15px;
   padding: 40px 0px;

   @media only screen and (max-width: 991px) {
      grid-template-columns: repeat(2, 1fr);
   }

   @media only screen and (max-width: 640px) {
      grid-template-columns: 1fr;
   }

   div {
      background-color: var(--gray-skeleton-1);
      width: 100%;
      height: 200px;
      border-radius: 8px;
   }
`;