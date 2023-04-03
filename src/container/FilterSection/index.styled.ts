import styled from 'styled-components';

export const Container = styled.section`
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
      color: #aeaeae;
      font-weight: 700;
      border: none;
      background-color: white;
      font-weight: 700;
      font-size: 12px;
      padding: 10px 15px;
      border-radius: 4px;
      box-shadow: rgba(0, 0, 0, 0.25) 0px 0px 4px 0px;
      cursor: pointer;
      transition: all ease 0.3s;

      &.active {
         background-color: var(--orange1);
         color: white;
      }

      &:hover:not(.active) {
         box-shadow: var(--orange1) 0px 0px 4px 0px;
         color: var(--orange1);
      }
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
   display: none;
   flex-direction: column;
   gap: 30px;
   padding: 0px 10px 40px;

   h4 {
      font-size: 12px;
   }

   &.active {
      display: flex;
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

      h4 {
         font-size: 12px;
      }

      select {
         background-color: white;
         box-shadow: rgba(0, 0, 0, 0.25) 0px 0px 4px 0px;
         border: none;
         border-radius: 4px;
         padding: 10px 13px;
         font-size: 12px;
         color: #6b6d81;
      }
   }
`;

export const PositionSelector = styled.div`
   display: flex;
   flex-direction: column;
   gap: 20px;

   h4 {
      font-size: 12px;
   }

   div {
      display: flex;
      gap: 10px;

      span {
         display: flex;
         align-items: center;
         justify-content: center;
         background-color: white;
         box-shadow: rgba(0, 0, 0, 0.25) 0px 0px 4px 0px;
         border-radius: 4px;
         padding: 10px 13px;
         cursor: pointer;

         p {
            font-size: 12px;
            color: #6b6d81;
         }

         svg {
            color: rgba(0, 0, 0, 0.75);
            margin-left: 5px;
         }

         &:hover,
         &.active {
            background-color: var(--orange1);

            p,
            svg {
               color: white;
            }
         }
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
      color: #00000080;
      border: 1px solid #00000030;
      background-color: transparent;
      font-weight: 700;
      font-size: 12px;
      padding: 10px 15px;
      border-radius: 4px;
      transition: all ease 0.3s;
      cursor: pointer;

      &:hover {
         background-color: black;
         color: white;
      }
   }
`;
