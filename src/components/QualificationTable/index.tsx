import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import {v4 as uuidv4} from 'uuid';
import { TeamsData } from '../../types';
import getTeamsQualification from '../../utils/functions/getTeamsQualification';
import { ArrowSVG } from '../Svg/ArrowSVG';
import { TableContainer } from '../TableContainer';
import { MoreTeams, TeamBox, TeamTable, TitleTable } from './index.styled';

interface Props {
   teamsData: Array<TeamsData>;
}

interface State {
   showMore: boolean;
}

const QualificationTable = ({teamsData}: Props) => {
   const navigate = useNavigate();
   const [showMore, setShowMore] = useState<State['showMore']>(false);
   const teamsOrdered = getTeamsQualification(teamsData);

   const handleClick = (path: string) => {
      navigate(`/equipos/${path}`);
   }

   return (
      <TableContainer title="CLASIFICACIÓN">
         <TitleTable>
            <span>POS</span>
            <span>EQUIPO</span>
            <span>PG</span>
            <span>PP</span>
         </TitleTable>

         <TeamTable toggle={showMore.toString()}>
            {teamsOrdered.map((team, i) => (
                  <TeamBox key={uuidv4()}>
                     <h4>{i + 1}</h4>
                     <img
                        src={team.logo}
                        alt={`${team.name} logo`}
                        onClick={() => handleClick(team.key)}
                     />
                     <h4>{team.name}</h4>
                     <h5>{team.win}</h5>
                     <h5>{team.loss}</h5>
                  </TeamBox>
               ))}
         </TeamTable>

         <MoreTeams onClick={() => setShowMore(prev => !prev)} toggle={showMore.toString()}>
            <ArrowSVG />
         </MoreTeams>
      </TableContainer>
   );
};

export { QualificationTable };
