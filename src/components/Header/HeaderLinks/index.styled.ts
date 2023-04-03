import styled from 'styled-components';
import MarcaLogo from '../../../assets/sponsors/Marca-M.svg';
import MarcaLogoGray from '../../../assets/sponsors/Marca-M--gray.svg';

export const LinksList = styled.ul<{ fixSection?: boolean; modal: boolean }>`
   display: flex;
   flex-direction: ${(props) => (props.modal ? 'column' : 'row')};
   justify-content: space-between;
   align-items: ${(props) => (props.modal ? 'center' : 'flex-start')};
   gap: ${(props) => (props.modal ? '15px' : '0')};
   margin: ${(props) => (props.modal ? '0 auto' : '0')};
   margin-left: ${(props) => (!props.modal ? (props.fixSection ? '15px' : '80px') : 'auto')};
   white-space: nowrap;
   list-style: none;

   li {
      margin: ${(props) => (props.modal ? '20px 15px 0 15px' : 'auto 15px')};
      color: ${(props) => (props.modal ? '#aeaeae' : 'var(--light1)')};
      cursor: pointer;

      &:hover {
         color: ${(props) => (props.modal ? 'var(--orange2)' : 'white')};
      }

      &:first-child {
         display: none;

         @media only screen and (max-width: 480px) {
            display: ${(props) => (props.modal ? 'block' : 'none')};
         }
      }

      &:last-child::after {
         margin-left: 3px;
         content: ${(props) => (props.modal ? `url(${MarcaLogoGray})` : `url(${MarcaLogo})`)};
         color: ${(props) => (props.modal ? '#aeaeae' : 'var(--light1)')};
      }
   }

   @media only screen and (max-width: 991px) {
      display: ${(props) => (props.modal ? 'flex' : 'none')};
   }
`;
