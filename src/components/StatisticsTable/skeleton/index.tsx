import React from 'react';
import { v4 as uuidv4 } from "uuid";
import { Container, TableContainer, TableData, TableHeader } from './index.styled';

const SkeletonStatisticsTable = () => {

   return (
      <Container>
         <TableContainer>
            <TableHeader>
               <span></span>
               <span></span>
               <span></span>
               <span className="name"></span>
               <span className="name"></span>
               <span></span>
            </TableHeader>

            {new Array(30).fill(1).map((item) => (
               <TableData key={uuidv4()}>
                  <span></span>
                  <span></span>
                  <span className="team"></span>
                  <span className="name"></span>
                  <span className="name"></span>
                  <span></span>
               </TableData>
            ))}
         </TableContainer>
      </Container>
   );
};

export { SkeletonStatisticsTable };