import { v4 as uuidv4 } from 'uuid';
import { useAppSelector } from '../../app/hooks';
import { TeamCard } from '../../components/TeamCard';
import { SkeletonTeamCard } from '../../components/TeamCard/skeleton';
import { CardContainer } from './index.styled';

const TeamCardContainer = () => {
   const { teamsData, loadingTeamsData, errorTeamsData } = useAppSelector((state) => state.home);
   //Data already loaded on Header

   return (
         <CardContainer>
            {loadingTeamsData 
               ? new Array(12).fill(0).map(card => <SkeletonTeamCard key={uuidv4()}/>)
               : !errorTeamsData && teamsData.map((team) => (
                  <TeamCard team={team} key={uuidv4()}/>
            ))}
         </CardContainer>
   );
};

export { TeamCardContainer };