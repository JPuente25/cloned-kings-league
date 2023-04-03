import styled from 'styled-components';

export const TitleBox = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
   padding-bottom: 30px;

   @media only screen and (max-width: 640px) {
      flex-direction: column;
      gap: 20px;
   }

   h2 {
      font-size: 25.2px;
   }

   div {
      display: flex;
      align-items: center;
      background-color: white;
      padding: 10px;
      border-radius: 4px;
      border: 1px solid #00000020;

      input {
         border: none;

         &:focus-visible {
            outline: 0;
         }
      }

      svg {
         font-size: 14px;
         margin-right: 5px;
      }
   }
`;
