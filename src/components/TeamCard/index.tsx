import React from 'react';
import { useNavigate } from 'react-router-dom';
import { TeamsData } from '../../types';
import { CardBox } from './index.styled';

interface Props {
   team: TeamsData;
}

const TeamCard = ({team}: Props) => {
   const navigate = useNavigate();

   return (
      <CardBox bg={team.background} onClick={() => navigate(`/equipos/${team.key}`)}>
      <div className='logo'>
         <img
            src={team.logo_svg}
            alt={team.name}
         />
      </div>

      <div className='name'>
         <h3>{team.name}</h3>
      </div>
   </CardBox>
   );
};

export { TeamCard };