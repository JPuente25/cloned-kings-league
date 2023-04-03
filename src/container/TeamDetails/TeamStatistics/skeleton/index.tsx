import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { StyledSection, TeamName, TextBox } from './index.styled';

const SkeletonTeamStatistics = () => {
   return (
      <StyledSection>
         <TeamName></TeamName>
         {new Array(8).fill(1).map((item) => (
            <TextBox key={uuidv4()}>
               <div className='title'></div>
               <div className='numerics'></div>
            </TextBox>
         ))}
      </StyledSection>
   );
};

export { SkeletonTeamStatistics };
