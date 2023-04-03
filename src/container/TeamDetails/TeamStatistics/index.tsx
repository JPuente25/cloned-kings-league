import React from 'react';
import { TeamsData } from '../../../types';
import { StyledSection, TeamName, TextBox } from './index.styled';

interface Props {
   data: TeamsData;
   rank: number;
}

const TeamStatistics = ({data, rank}: Props) => {
   return (
      <StyledSection>
         <TeamName>
            <h2>{data.name}</h2>
         </TeamName>
         <TextBox>
            <h4>CLASIFICACIÓN</h4>
            <h1>{rank}</h1>
         </TextBox>
         <TextBox>
            <h4>VICTORIAS</h4>
            <h1>{data.win}</h1>
         </TextBox>
         <TextBox>
            <h4>DERROTAS</h4>
            <h1>{data.loss}</h1>
         </TextBox>
         <TextBox>
            <h4>GF</h4>
            <h1>{data.goals}</h1>
         </TextBox>
         <TextBox>
            <h4>GC</h4>
            <h1>{data.received_goals}</h1>
         </TextBox>
         <TextBox>
            <h4>ASIST. TOTALES</h4>
            <h1>{data.assists}</h1>
         </TextBox>
         <TextBox>
            <h4>T. AMARILLAS</h4>
            <h1>{data.yellow_cards}</h1>
         </TextBox>
         <TextBox>
            <h4>T. ROJAS</h4>
            <h1>{data.red_cards}</h1>
         </TextBox>
      </StyledSection>
   );
};

export { TeamStatistics };
