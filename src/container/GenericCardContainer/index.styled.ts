import styled, { keyframes } from "styled-components";

export const showing = keyframes`
   0% {
      opacity: 0;
   }

   100% {
      opacity: 1;
   }
`;

export const Container = styled.div<{ bg: string }>`
   background-color: white;
   background: url(${(props) => props.bg}) center center no-repeat;
   background-size: cover;
   background-color: var(--gray-skeleton-1);
   width: 100%;
   aspect-ratio: 2 / 1;
   position: relative;
   margin: 0 auto;
   border-radius: 8px;
   contain: content;
   padding: 10px 15px;
   animation: ${showing} 0.2s linear;

   @media only screen and (max-width: 480px) {
      aspect-ratio: unset;
   }
`;