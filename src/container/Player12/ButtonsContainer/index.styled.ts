import styled from 'styled-components';

export const ButtonsContainer = styled.div`
   display: flex;
   align-items: center;
   justify-content: flex-start;
   gap: 20px;
   margin-bottom: 40px;

   span {
      font-size: 14px;
      font-weight: 900;
      color: white;
      margin-bottom: 10px;
   }

   div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: start;
   }

   @media only screen and (max-width: 991px) {
      margin-bottom: 20px;
   }

   @media only screen and (max-width: 480px) {
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100%;

      div {
         width: 100%;
      }
   }
`;

export const ShowAllButton = styled.button<{ filter: any }>`
   align-self: flex-end;
   height: 40px;
   padding: 0 10px;
   font-size: 14px;
   font-family: var(--font-family-1);
   border-radius: 4px;
   box-shadow: 0 0 5px 0 #00000040;
   font-weight: ${(props) => (props.filter ? '400' : '700')};
   color: ${(props) => (props.filter ? 'black' : 'white')};
   background-color: ${(props) => (props.filter ? 'white' : 'black')};
   border: ${(props) => (props.filter ? '0.5px solid var(--gray-skeleton-1)' : 'none')};
   cursor: pointer;

   @media only screen and (max-width: 480px) {
      width: 100%;
   }
`;

export const SelectButton = styled.select<{ selected: any }>`
   background-color: ${(props) => (props.selected ? 'black' : 'white')};
   color: ${(props) => (props.selected ? 'white' : 'black')};
   font-weight: ${(props) => (props.selected ? '700' : '400')};
   height: 40px;
   padding: 0 10px;
   width: min-content;
   font-size: 14px;
   font-family: var(--font-family-1);
   border: 0.5px solid var(--gray-skeleton-1);
   border: ${(props) => (props.selected ? 'none' : '0.5px solid var(--gray-skeleton-1)')};
   border-radius: 4px;
   box-shadow: 0 0 5px 0 #00000040;
   cursor: pointer;
   outline: 0;

   &:hover {
      outline: 1px solid var(--gray-skeleton-1);
   }

   option {
      background-color: white;
      color: black;
      padding: 10px;

      &:hover {
         background-color: black;
         color: white;
         font-weight: 700;
      }
   }

   @media only screen and (max-width: 480px) {
      width: 100%;
   }
`;
