import React from 'react';
import { useAppSelector } from '../../../app/hooks';
import { RankContainer } from '../../../container/Statistics/RankContainer';
import { SkeletonRankContainer } from '../../../container/Statistics/RankContainer/skeleton';
import getAssistsPlayer from '../../../utils/functions/getAssistsPlayer';
import getGoalsPlayer from '../../../utils/functions/getGoalsPlayer';
import getMvpPlayer from '../../../utils/functions/getMvpPlayer';
import { Container } from './index.styled';

const StatisticsAllOutlet = () => {
   const {
      mvpData,
      goalsData,
      assistsData,
      loadingMvpData,
      loadingGoalsData,
      loadingAssistsData,
      errorMvpData,
      errorGoalsData,
      errorAssistsData,
   } = useAppSelector((state) => state.home);

   const orderedMvpData = getMvpPlayer(mvpData);
   const orderedGoalsData = getGoalsPlayer(goalsData);
   const orderedAssistsData = getAssistsPlayer(assistsData);

   return (
      <Container>
         {loadingMvpData ? (
            <SkeletonRankContainer />
         ) : !errorMvpData ? (
            <RankContainer
               title="MVP"
               data={orderedMvpData}
            />
         ) : (
            <p>error</p>
         )}

         {loadingGoalsData ? (
            <SkeletonRankContainer />
         ) : !errorGoalsData ? (
            <RankContainer
               title="Goles"
               data={orderedGoalsData}
            />
         ) : (
            <p>error</p>
         )}

         {loadingAssistsData ? (
            <SkeletonRankContainer />
         ) : !errorAssistsData ? (
            <RankContainer
               title="Asistencias"
               data={orderedAssistsData}
            />
         ) : (
            <p>error</p>
         )}
      </Container>
   );
};

export { StatisticsAllOutlet };
