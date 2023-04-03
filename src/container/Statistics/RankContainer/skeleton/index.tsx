import React from 'react';
import { v4 as uuidv4 } from "uuid";
import { Container, RankOne, Title, Top5Table } from './index.styled';

const SkeletonRankContainer = () => {
   return (
      <Container>
         <Title>
            <span></span>
         </Title>

         <RankOne />

         <Top5Table>
            <div className="table-header">
               <span></span>
               <span></span>
               <span className="name"></span>
               <span></span>
            </div>

            {new Array(4).fill(1).map((item) => (
               <div className="table-data" key={uuidv4()}>
                  <span></span>
                  <span></span>
                  <span className="name"></span>
                  <span></span>
               </div>
            ))}
         </Top5Table>
      </Container>
   );
};

export { SkeletonRankContainer };
