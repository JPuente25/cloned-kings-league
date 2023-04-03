import styled from 'styled-components';

export const Header = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
   padding: 15px 20px 40px 20px;
   width: 100%;
   text-align: center;
   font-family: var(--font-family-1);
   border-bottom: 1px solid var(--light2);

   div.previous, div.next {
      width: 30px;
      height: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transform: rotate(-90deg);
   }

   div.next {
      transform: rotate(90deg);
   } 


   h4 {
      font-size: 14px;
      font-weight: 700;
      margin-bottom: 8px;
   }

   span {
      font-size: 12px;
      font-weight: normal;
   }
`;
