import React from 'react';
import { v4 as uuidv4 } from "uuid";
import { BestPlayerProps } from '../../types';
import { Container, TableData, TableHeader, TableContainer } from './index.styled';

interface Props {
   data: Array<BestPlayerProps>;
   fieldName: string;
}

const StatisticsTable = ({ data, fieldName }: Props) => {
   return (
      <Container>
         <TableContainer>
            <TableHeader>
               <span>RANKING</span>
               <span>EQUIPO</span>
               <span></span>
               <span className="name">NOMBRE</span>
               <span className="name">PARTIDOS</span>
               <span>{fieldName}</span>
            </TableHeader>

            {data.map((item, i) => (
               <TableData key={uuidv4()}>
                  <span>{i + 1}</span>
                  <img
                     src={item.logo}
                     alt={item.team}
                     className="logo"
                  />
                  <span className="team">{item.team}</span>
                  <span className="name">{item.player}</span>
                  <span className="name">{item.played_games}</span>
                  <span>{item.mvp_games || item.goals || item.assists}</span>
               </TableData>
            ))}
         </TableContainer>
      </Container>
   );
};

export { StatisticsTable };
