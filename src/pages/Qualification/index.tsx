import React, {useEffect} from 'react';
import { useAppSelector } from '../../app/hooks';
import { QualificationTableV2 } from '../../components/QualificationTableV2';
import { SkeletonQualificationTableV2 } from '../../components/QualificationTableV2/skeleton';
import { GenericContainer } from '../../container/GenericContainer';
import { MainSection } from './index.styled';

const Qualification = () => {
   const { teamsData, loadingTeamsData, errorTeamsData } = useAppSelector((state) => state.home);

   useEffect(() => {
      window.document.title = "Clasificación - Kings League";
      window.scrollTo(0,0);
   }, []);

   return (
      <GenericContainer title="Clasificación">
         <MainSection>
            {loadingTeamsData ? (
               <SkeletonQualificationTableV2 />
            ) : !errorTeamsData ? (
               <QualificationTableV2 teamsData={teamsData} />
            ) : (
               <p>error</p>
            )}
         </MainSection>
      </GenericContainer>
   );
};

export { Qualification };
