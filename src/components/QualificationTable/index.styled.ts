import styled from 'styled-components';

export const TitleTable = styled.div`
   width: 100%;
   font-family: var(--font-family1);
   font-size: 10px;
   color: #5c5c5c;
   padding: 10px 0;
   display: grid;
   grid-template-columns: 15% 15% 40% 15% 15%;
   padding: 10px 0px;
   text-align: center;
   border-bottom: 1px solid white;
   box-shadow: 0 0 5px 0.5px #5c5c5c30;

   span:nth-child(3) {
      grid-column: 4 / 5;
   }
`;

export const TeamTable = styled.div<{ toggle: string }>`
   width: 100%;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: start;
   overflow: hidden;
   scrollbar-width: 0px;
   transition: height ease 0.5s;
   height: ${(props) => (props.toggle === 'true' ? '600px' : '400px')};
   
   &::-webkit-scrollbar {
      display: none;
   }
`;

export const TeamBox = styled.div`
   width: 100%;
   height: 50px;
   display: grid;
   grid-template-columns: 15% 15% 40% 15% 15%;
   align-items: center;
   place-items: center;
   border-bottom: 1px solid var(--light2);
   padding: 10px 0px;
   position: relative;

   img {
      width: 30px;
      height: 30px;
      cursor: pointer;
   }

   h4 {
      font-size: 10px;
      font-weight: 900;

      &:last-of-type {
         place-self: center;
         justify-self: start;
         cursor: pointer;
         &:hover {
            color: var(--orange1);
         }
      }
   }

   h5 {
      font-size: 12px;
      font-weight: normal;
   }

   &:nth-child(1):before,
   &:nth-child(2):before,
   &:nth-child(3):before,
   &:nth-child(4):before,
   &:nth-child(5):before,
   &:nth-child(6):before,
   &:nth-child(7):before,
   &:nth-child(8):before {
      content: '';
      width: 5px;
      height: 80%;
      position: absolute;
      top: 10%;
      left: 2px;
      background-image: linear-gradient(236.07deg, #f7ab35 0.09%, #e8521e 102.47%);
   }
`;

export const MoreTeams = styled.div<{ toggle: string }>`
display: flex;
justify-content: center;
align-items: center;
   transform: rotate(180deg);
   margin-bottom: 20px;
   
   svg {
      cursor: pointer;
      transform: ${(props) => (props.toggle === 'true' ? 'rotate(180deg)' : 'rotate(0deg)')};
      transition: all ease 0.5s;
   }
`;
