import styled, { keyframes } from 'styled-components';

export const showing = keyframes`
   0% {
      opacity: 0;
   }

   100% {
      opacity: 1;
   }
`;

export const Container = styled.div`
   background-color: var(--gray-skeleton-1);
   width: 100%;
   aspect-ratio: 2 / 1;
   margin: 0 auto;
   border-radius: 8px;
   contain: content;
   padding: 10px 15px;
`;