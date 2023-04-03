import React from 'react';
import { GenericCardContainer } from '../../container/GenericCardContainer';
import { Player12Props } from '../../types';
import { CardInfo, PlayerImg, TeamLogo } from './index.styled';

interface Props {
   data: Player12Props;
}

const Player12Card = ({data}: Props) => {
   return (
      <GenericCardContainer bgImg={data.background}>
         <PlayerImg
            src={data.player_img}
            alt={data.player}
            className="player"
            loading='lazy'
         />

         <CardInfo>
            <div className='team-info'>
               <TeamLogo
                  src={data.team_logo}
                  alt="logo equipo"
                  className="logo"
                  loading='lazy'
               />
               <span>{data.team}</span>
            </div>

            <h3>{data.player}</h3>

            <div className="role">
               <span>{data.role}</span>
            </div>
         </CardInfo>
      </GenericCardContainer>
   );
};

export { Player12Card };
