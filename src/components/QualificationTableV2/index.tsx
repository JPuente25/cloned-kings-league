import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { TeamsData } from '../../types';
import getTeamsQualification from '../../utils/functions/getTeamsQualification';
import { Container, TeamBox, TeamTable, TitleTable } from './index.styled';

interface Props {
   teamsData: Array<TeamsData>;
}

const QualificationTableV2 = ({teamsData}: Props) => {
   const navigate = useNavigate();
   const teamsOrdered = getTeamsQualification(teamsData);

   const handleClick = (path: string) => {
      navigate(`/equipos/${path}`);
   }

   return (
      <Container>
         <TitleTable>
            <span>POS.</span>
            <span>EQUIPO</span>
            <span>PG</span>
            <span>PP</span>
            <span>GF</span>
            <span>GC</span>
            <span>DG</span>
         </TitleTable>

         <TeamTable>
            {teamsOrdered.map((team, i) => (
                  <TeamBox key={uuidv4()}>
                     <h4 className='rank'>{i + 1}</h4>
                     <img
                        src={team.logo}
                        alt={`${team.name} logo`}
                        onClick={() => handleClick(team.key)}
                     />
                     <h4>{team.name}</h4>
                     <h5>{team.win}</h5>
                     <h5>{team.loss}</h5>
                     <h5>{team.goals}</h5>
                     <h5>{team.received_goals}</h5>
                     <h5>{team.goals - team.received_goals}</h5>
                  </TeamBox>
               ))}
         </TeamTable>
      </Container>
   );
};

export { QualificationTableV2 };

