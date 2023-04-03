import React from 'react';
import { useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { TeamCardContainer } from '../../container/TeamCardContainer';
import { TeamMembersCarousel } from '../../container/TeamDetails/TeamMembersCarousel';
import { SkeletonTeamMembersCarousel } from '../../container/TeamDetails/TeamMembersCarousel/skeleton';
import { TeamStatistics } from '../../container/TeamDetails/TeamStatistics';
import { SkeletonTeamStatistics } from '../../container/TeamDetails/TeamStatistics/skeleton';
import { getTeamsData } from '../../features/KingsLeague/homeSlice';
import getTeamsQualification from '../../utils/functions/getTeamsQualification';

const TeamDetails = () => {
   const { key } = useLocation();
   const params = useParams();
   const teamNameKey = params.teamName!;
   const dispatch = useAppDispatch();
   const { teamsData, loadingTeamsData, errorTeamsData } = useAppSelector((state) => state.home);
   //ALREADY LOADED ON HEADER

   const rankPosition =
      getTeamsQualification(teamsData).findIndex((team) => team.key === teamNameKey) + 1;
   const teamData = teamsData.find((item) => item.key === teamNameKey)!;

   useEffect(() => {
      window.document.title = `${teamData.name} - Kings League`;
      window.scrollTo(0, 0);
      dispatch(getTeamsData());
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [key]);

   return (
      <main>
         {loadingTeamsData ? (
            <React.Fragment>
               <SkeletonTeamMembersCarousel />
               <SkeletonTeamStatistics />
            </React.Fragment>
         ) : !errorTeamsData ? (
            <React.Fragment>
               <TeamMembersCarousel data={teamData} />
               <TeamStatistics
                  data={teamData}
                  rank={rankPosition}
               />
            </React.Fragment>
         ) : (
            <React.Fragment>
               <p>error</p>
               <p>error</p>
            </React.Fragment>
         )}

         <TeamCardContainer /> {/* Has loading states in component */}
      </main>
   );
};

export { TeamDetails };
