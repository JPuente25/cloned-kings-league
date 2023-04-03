import styled from 'styled-components';

export const SocialMedia = styled.div< {modal: boolean}>`
   display: flex;
   justify-content: space-between;
   align-items: center;
   gap: 15px;

   img {
      height: 20px;
      width: 20px;
      cursor: pointer;
      transition: all ease 0.1s;

      &:hover {
         filter: ${props => props.modal ? "drop-shadow(0px 0px 10px red)" : "invert()"};
      }
   }

   @media only screen and (max-width: 1280px) {
      display: ${props => props.modal ? "flex" : "none"};
   }
`;
