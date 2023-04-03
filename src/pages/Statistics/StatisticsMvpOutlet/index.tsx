import React from 'react';
import { useAppSelector } from '../../../app/hooks';
import { StatisticsTable } from '../../../components/StatisticsTable';
import { SkeletonStatisticsTable } from '../../../components/StatisticsTable/skeleton';
import getMvpPlayer from '../../../utils/functions/getMvpPlayer';
import { Title } from './index.styled';

const StatisticsMvpOutlet = () => {
   const { mvpData, loadingMvpData, errorMvpData } = useAppSelector((state) => state.home);
   const orderedMvpData = getMvpPlayer(mvpData);

   return (
      <article>
         <Title>
            <h2>simyo MVP</h2>
            <img
               src="https://kingsleague.pro/wp-content/uploads/2022/12/logo-simyo.svg"
               alt="simyo logo"
            />
         </Title>

         {loadingMvpData ? (
            <SkeletonStatisticsTable />
         ) : !errorMvpData ? (
            <StatisticsTable
               data={orderedMvpData}
               fieldName={'MVPS'}
            />
         ) : (
            <p>error</p>
         )}
      </article>
   );
};

export { StatisticsMvpOutlet };
