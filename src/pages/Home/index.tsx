import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { BestPlayerCard } from '../../components/BestPlayerCard';
import { SkeletonBestPlayerCard } from '../../components/BestPlayerCard/skeleton';
import { FinalFourBanner } from '../../components/FinalFourBanner';
import { GamesTable } from '../../components/GamesTable';
import { SkeletonGamesTable } from '../../components/GamesTable/skeleton';
import { OtherCupsBanner } from '../../components/OtherCupsBanner';
import { Partners } from '../../components/Partners';
import { QualificationTable } from '../../components/QualificationTable';
import { SkeletonQualificationTable } from '../../components/QualificationTable/skeleton';
import { VideosCarousel } from '../../container/VideosCarousel';
import { SkeletonVideosCarousel } from '../../container/VideosCarousel/skeleton';
import {
   getAssistsData,
   getGamesData,
   getGoalsData,
   getMvpData,
   getVideosData,
} from '../../features/KingsLeague/homeSlice';
import getAssistsPlayer from '../../utils/functions/getAssistsPlayer';
import getGoalsPlayer from '../../utils/functions/getGoalsPlayer';
import getMvpPlayer from '../../utils/functions/getMvpPlayer';
import {
   BackgroundImage,
   CardsContainer,
   Container,
   MainSection,
   TablesContainer,
} from './index.styled';

const Home = () => {
   const {
      teamsData,
      gamesData,
      mvpData,
      assistsData,
      goalsData,
      videosData,
      loadingTeamsData,
      loadingGamesData,
      loadingMvpData,
      loadingAssistsData,
      loadingGoalsData,
      loadingVideosData,
      errorTeamsData,
      errorGamesData,
      errorMvpData,
      errorAssistsData,
      errorGoalsData,
      errorVideosData,
   } = useAppSelector((state) => state.home);
   const dispatch = useAppDispatch();

   useEffect(() => {
      window.document.title = "Kings League | Fútbol Real";
      window.scrollTo(0, 0);
      dispatch(getGamesData());
      dispatch(getMvpData());
      dispatch(getAssistsData());
      dispatch(getGoalsData());
      dispatch(getVideosData());
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);

   return (
      <Container>
         <FinalFourBanner />

         <MainSection>
            <BackgroundImage />

            <TablesContainer>
               {loadingGamesData ? (
                  <SkeletonGamesTable />
               ) : !errorGamesData ? (
                  <GamesTable gamesData={gamesData} />
               ) : (
                  <p>error</p>
               )}

               {loadingTeamsData ? (
                  <SkeletonQualificationTable />
               ) : !errorTeamsData ? (
                  <QualificationTable teamsData={teamsData} />
               ) : (
                  <p>error</p>
               )}
            </TablesContainer>

            <CardsContainer>
               {loadingMvpData ? (
                  <SkeletonBestPlayerCard />
               ) : !errorMvpData ? (
                  <BestPlayerCard
                     data={getMvpPlayer(mvpData)[0]}
                     subtitle="MVP"
                  />
               ) : (
                  <p>error</p>
               )}

               {loadingGoalsData ? (
                  <SkeletonBestPlayerCard />
               ) : !errorGoalsData ? (
                  <BestPlayerCard
                     data={getGoalsPlayer(goalsData)[0]}
                     subtitle="GOLES"
                  />
               ) : (
                  <p>error</p>
               )}

               {loadingAssistsData ? (
                  <SkeletonBestPlayerCard />
               ) : !errorAssistsData ? (
                  <BestPlayerCard
                     data={getAssistsPlayer(assistsData)[0]}
                     subtitle="ASISTENCIAS"
                  />
               ) : (
                  <p>error</p>
               )}

               {loadingVideosData ? (
                  <SkeletonVideosCarousel />
               ) : !errorVideosData ? (
                  <VideosCarousel videosData={videosData} />
               ) : (
                  <p>error</p>
               )}
            </CardsContainer>
         </MainSection>

         <OtherCupsBanner />

         <Partners />
      </Container>
   );
};

export { Home };
