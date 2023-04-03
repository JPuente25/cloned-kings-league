import styled from 'styled-components';

export const Container = styled.section`
   display: flex;
   flex-direction: column;
   align-items: flex-start;
   justify-content: space-between;
`;

export const Header = styled.div`
   width: 100%;
   display: flex;
   align-items: center;
   margin-bottom: 10px;

   div {
      height: 25.2px;
      width: 30%;
      background-color: var(--gray-skeleton-1);
   }
`;

export const Carousel = styled.div`
   display: flex;
   gap: 15px;
   width: 100%;
   overflow: hidden;

   div {
      height: 200px;
      aspect-ratio: 1.2 / 1;
      flex-shrink: 0;
      border-radius: 8px;
      background-color: var(--gray-skeleton-1);


      @media only screen and (max-width: 768px) {
         width: 100%;
         height: auto;
      }
   }
`;
