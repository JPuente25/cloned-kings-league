import React from 'react';
import { useAppSelector } from '../../../app/hooks';
import { StatisticsTable } from '../../../components/StatisticsTable';
import { SkeletonStatisticsTable } from '../../../components/StatisticsTable/skeleton';
import getAssistsPlayer from '../../../utils/functions/getAssistsPlayer';
import { Title } from './index.styled';

const StatisticsAssistsOutlet = () => {
   const { assistsData, loadingAssistsData, errorAssistsData } = useAppSelector(
      (state) => state.home
   );
   const orderedAssistsData = getAssistsPlayer(assistsData);

   return (
      <article>
         <Title>
            <h2>Asistencias</h2>
         </Title>

         {loadingAssistsData ? (
            <SkeletonStatisticsTable />
         ) : !errorAssistsData ? (
            <StatisticsTable
               data={orderedAssistsData}
               fieldName={'ASIST.'}
            />
         ) : (
            <p>error</p>
         )}
      </article>
   );
};

export { StatisticsAssistsOutlet };
