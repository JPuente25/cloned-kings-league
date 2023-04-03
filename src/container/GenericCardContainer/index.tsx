import React from 'react';
import { Container } from './index.styled';

interface Props {
   children: React.ReactNode;
   bgImg: string;
}

const GenericCardContainer = ({children, bgImg}: Props) => {

   return (
      <Container bg={bgImg}>
         {children}
      </Container>
   );
};

export { GenericCardContainer };