import React from 'react';
import { Container } from './index.styled';

interface Props {
   active: boolean
   setActive: () => void;
}

const ModalIcon = ({active, setActive}: Props) => {
   return (
      <Container onClick={setActive}>
         <div className={`first-bar ${active ? 'active' : ""}`}></div>
         <div className={`second-bar ${active ? 'active' : ""}`}></div>
         <div className={`third-bar ${active ? 'active' : ""}`}></div>
      </Container>
   );
};

export { ModalIcon };

