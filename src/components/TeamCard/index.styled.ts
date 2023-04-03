import styled from "styled-components";

export const CardBox = styled.div<{ bg: string }>`
   width: 100%;
   background: url(${(props) => props.bg}) center center no-repeat;
   background-size: cover;
   background-color: var(--gray-skeleton-1);
   height: 140px;
   width: 100%;
   border-radius: 8px;
   display: flex;
   align-items: center;
   justify-content: space-around;
   padding: 15px;
   cursor: pointer;

   div {
      flex: 50%;
      display: flex;
      align-items: center;
      justify-content: center;

      &.name {
         justify-content: flex-start;
      }
   }

   img {
      max-height: 100px;
      width: 100%;
      max-width: 115px;
   }

   h3 {
      font-size: 18px;
      font-family: var(--font-family-2);
      color: white;
   }
`;