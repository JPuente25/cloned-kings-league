import React from 'react';
import { useAppSelector } from '../../../app/hooks';
import { StatisticsTable } from '../../../components/StatisticsTable';
import { SkeletonStatisticsTable } from '../../../components/StatisticsTable/skeleton';
import getGoalsPlayer from '../../../utils/functions/getGoalsPlayer';
import { Title } from './index.styled';

const StatisticsGoalsOutlet = () => {
   const { goalsData, loadingGoalsData, errorGoalsData } = useAppSelector((state) => state.home);
   const orderedGoalsData = getGoalsPlayer(goalsData);

   return (
      <article>
         <Title>
            <h2>Goles</h2>
         </Title>

         {loadingGoalsData ? (
            <SkeletonStatisticsTable />
         ) : !errorGoalsData ? (
            <StatisticsTable
               data={orderedGoalsData}
               fieldName={'GOLES'}
            />
         ) : (
            <p>error</p>
         )}
      </article>
   );
};

export { StatisticsGoalsOutlet };
