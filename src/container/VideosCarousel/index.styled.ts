import styled from 'styled-components';

export const Container = styled.section`
   display: flex;
   flex-direction: column;
   align-items: flex-start;
   justify-content: space-between;
   position: relative;
`;

export const Header = styled.div`
   display: flex;
   align-items: center;
   gap: 8px;
   margin-bottom: 10px;
   cursor: pointer;

   h3 {
      font-size: 25.2px;
   }

   img {
      width: 31px;
   }
`;

export const Carousel = styled.div`
   display: flex;
   gap: 15px;
   overflow: scroll;
   width: 100%;
   scrollbar-width: 0;

   &::-webkit-scrollbar {
      display: none;
   }

   iframe {
      height: 200px;
      aspect-ratio: 1.2 / 1;
      flex-shrink: 0;
      border-radius: 8px;

      @media only screen and (max-width: 768px) {
         width: 100%;
         height: auto;
      }
   }

   div.previous-arrow,
   div.next-arrow {
      position: absolute;
      width: 40px;
      height: 40px;
      background-color: #ffffff80;
      display: flex;
      align-items: center;
      justify-content: center;
      top: 50%;
      cursor: pointer;
      border-radius: 50%;

      svg {
         width: 30px;
         height: 30px;
      }
   }

   div.next-arrow {
      right: 20px;
      transform: rotate(90deg);
   }

   div.previous-arrow {
      left: 20px;
      transform: rotate(-90deg);
   }
`;
