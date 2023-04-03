import React from 'react';
import { v4 as uuidv4 } from "uuid";
import { BestPlayerCard } from '../../../components/BestPlayerCard';
import { BestPlayerProps } from '../../../types';
import { Container, RankOne, Title, Top5Table } from './index.styled';

interface Props {
   data: Array<BestPlayerProps>;
   title: string;
}

const RankContainer = ({ data, title }: Props) => {
   const tableHeaderName = title === 'MVP' ? 'MVPs' : title === 'Goles' ? 'GOLES' : 'ASIST.';

   return (
      <Container>
         <Title>
            <h3>{title}</h3>
         </Title>

         <RankOne>
            <BestPlayerCard
               subtitle={title}
               data={data[0]}
            />
         </RankOne>

         <Top5Table>
            <div className="table-header">
               <span>RANK</span>
               <span>EQUIPO</span>
               <span className="name">NOMBRE</span>
               <span>{tableHeaderName}</span>
            </div>

            {data.slice(1, 5).map((item, i) => (
               <div className="table-data" key={uuidv4()}>
                  <span>{i + 2}</span>
                  <img
                     src={item.logo}
                     alt={item.team}
                     className="logo"
                  />
                  <span className="name">{item.player}</span>
                  <span>{item.mvp_games || item.goals || item.assists}</span>
               </div>
            ))}
         </Top5Table>
      </Container>
   );
};

export { RankContainer };
