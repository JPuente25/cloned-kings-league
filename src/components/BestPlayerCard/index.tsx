import React from 'react';
import { AssistsProps, BestPlayerProps, GoalsProps, MvpProps } from '../../types';
import { BgFilter, Container, DataText, PlayerInfo } from './index.styled';

interface DataProps {
   logo: String;
   background: string;
   team: string;
   player: string;
   player_img: string;
   played_games: number;
   goals?: number;
   mvp_games?: number;
   assists?: number;
}

interface Props {
   data: BestPlayerProps;
   subtitle: string;
}

const BestPlayerCard = ({data, subtitle}: Props) => {
   const dataNumerics = data.mvp_games || data.goals || data.assists; 

   return (
      <Container bg_img={data.background}>
         <BgFilter />

         <div className='player-info'>
            <DataText>
               <h1>{dataNumerics}</h1>
               <h2>{subtitle}</h2>
            </DataText>

            <PlayerInfo>
               <h3>{data.player}</h3>
               <span>{data.team}</span>
            </PlayerInfo>
         </div>

         <img src={data.player_img} alt={`${data.player} pic`} height="100%"/>

      </Container>
   );
};

export { BestPlayerCard };
