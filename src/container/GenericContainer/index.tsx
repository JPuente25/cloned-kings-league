import React from 'react';
import { Container } from './index.styled';

interface Props {
   title: string;
   children: React.ReactNode;
}

const GenericContainer = ({title, children}: Props) => {

   return (
      <Container>

         <div className='title'>
            <h1>{title}</h1>
         </div>

         <div className='children'>{children}</div>
      </Container>
   );
};

export { GenericContainer };