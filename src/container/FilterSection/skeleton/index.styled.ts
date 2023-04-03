import styled from 'styled-components';

export const Container = styled.section`
   width: 100%;
   display: flex;
   flex-direction: column;
`;

export const TypePlayer = styled.div`
   display: flex;
   gap: 15px;
   padding: 15px 0px;

   @media only screen and (max-width: 640px) {
      align-items: center;
      justify-content: center;
   }

   button {
      width: 100px;
      height: 30px;
      color: #aeaeae;
      border: none;
      background-color: var(--gray-skeleton-1);
      border-radius: 4px;
      box-shadow: rgba(0, 0, 0, 0.25) 0px 0px 4px 0px;
      cursor: pointer;
   }
`;

export const RangeContainer = styled.div`
   display: flex;
   flex-wrap: wrap;
   gap: 30px;
   justify-content: space-around;
   padding: 15px 0px;
`;

export const SliderContainer = styled.div`
display: flex;
flex-direction: column;
   gap: 30px;
   padding: 0px 10px 40px;

   div.title {
      height: 12px;
      width: 50px;
      background-color: var(--gray-skeleton-1);
      border-radius: 2px;
   }

   div.slider {
      display: flex;
      align-items: center;
      justify-content: center;
      span:nth-child(1) {
         height: 25px;
         width: 25px;
         border-radius: 50%;
         background-color: var(--gray-skeleton-1);
      }
      span:nth-child(2) {
         height: 10px;
         width: 90px;
         background-color: var(--gray-skeleton-1);
      }
      span:nth-child(3) {
         height: 25px;
         width: 25px;
         border-radius: 50%;
         background-color: var(--gray-skeleton-1);
      }
   }
`;

export const OptionsContainer = styled.div`
   display: flex;
   flex-wrap: wrap;
   gap: 30px;
   padding: 15px 0px;

   @media only screen and (max-width: 640px) {
      &,
      div {
         align-items: center;
         justify-content: center;
      }
   }

   div.pie-dominante {
      display: flex;
      flex-direction: column;
      gap: 20px;

      div.title {
         height: 12px;
         width: 50px;
         background-color: var(--gray-skeleton-1);
         border-radius: 2px;
      }

      div.select {
         background-color: var(--gray-skeleton-1);
         box-shadow: rgba(0, 0, 0, 0.25) 0px 0px 4px 0px;
         border: none;
         border-radius: 4px;
         width: 80px;
         height: 30px;
      }
   }
`;

export const PositionSelector = styled.div`
   display: flex;
   flex-direction: column;
   gap: 20px;

   div.title {
      height: 12px;
      width: 50px;
      background-color: var(--gray-skeleton-1);
      border-radius: 2px;
   }

   div.options {
      display: flex;
      gap: 10px;

      span {
         height: 20px;
         width: 70px;
         background-color: var(--gray-skeleton-1);
         box-shadow: rgba(0, 0, 0, 0.25) 0px 0px 4px 0px;
         border-radius: 4px;
      }
   }
`;

export const ButtonsContainer = styled.div`
   display: flex;
   gap: 15px;
   margin-top: 30px;

   @media only screen and (max-width: 640px) {
      align-items: center;
      justify-content: center;
   }

   button {
      border: 1px solid #00000030;
      background-color: var(--gray-skeleton-1);
      height: 20px;
      width: 80px;
      border-radius: 4px;
   }
`;
