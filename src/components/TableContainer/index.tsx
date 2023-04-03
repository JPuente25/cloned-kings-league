import React from 'react';
import { ChildrenBox, Container, TitleBox } from './index.styled';

interface Props {
   title: string;
   children: React.ReactNode;
}

const TableContainer = ({title, children}: Props) => {

   return (
      <Container>
         <TitleBox>
            <h4>{title}</h4>
         </TitleBox>

         <ChildrenBox>
            {children}
         </ChildrenBox>
      </Container>
   );
};

export { TableContainer };