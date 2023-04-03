import styled from 'styled-components';

export const Container = styled.div`
   padding: 90px 40px 0px;
   width: 100%;
   background-color: #f8f8f8;

   @media only screen and (max-width: 640px) {
      padding: 40px 20px 0px;
   }
`;

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

export const PlayersContainer = styled.section`
   display: grid;
   grid-template-columns: repeat(3, 1fr);
   gap: 15px;
   padding: 40px 0px;

   @media only screen and (max-width: 991px) {
      grid-template-columns: repeat(2, 1fr);
   }

   @media only screen and (max-width: 640px) {
      grid-template-columns: 1fr;
   }
`;

export const FilterDesktopContainer = styled.div`
   display: none;

   @media only screen and (min-width: 480px) {
      display: flex;
   }
`;

export const FilterMobileContainer = styled.div<{ active: boolean }>`
   display: none;
   padding: ${(props) => (props.active ? '40px 0' : '40px 0 0')};
   margin: 0 auto;
   width: ${(props) => (props.active ? '100%' : '70px')};
   height: ${(props) => (props.active ? '740px' : '50px')};
   overflow: hidden;
   position: relative;
   transition: all ease 0.75s;
   border: 1px solid #00000050;
   border-radius: 4px;

   @media only screen and (max-width: 480px) {
      display: flex;
   }

   @media only screen and (max-width: 448px) {
      height: ${(props) => (props.active ? '870px' : '50px')};
   }



   div.filter {
      position: absolute;
      top: 20px;
      left: calc(50% - 28px);
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 5px;
      cursor: pointer;

      h4 {
         font-size: 14px;
         font-weight: 400;
      }

      svg.filter-icon-1 {
         font-size: 18px;
      }

      svg.filter-icon-2 {
         font-size: 12px;
      }
   }
`;
