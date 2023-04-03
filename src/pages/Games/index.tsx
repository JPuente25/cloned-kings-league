import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { GamesContainer } from '../../container/GamesContainer';
import { SkeletonGamesContainer1 } from '../../container/GamesContainer/skeleton/SkeletonGamesContainer1';
import { SelectButton } from '../../container/Player12/ButtonsContainer/index.styled';
import { getGamesData } from '../../features/KingsLeague/homeSlice';
import { getWeeks } from '../../features/KingsLeague/player12Slice';
import { GamesProps } from '../../types';
// import { SelectButton } from '../Player12/index.styled';
import { Container, GamesSection, GamesWeek, HeaderTitle } from './index.styled';

interface States {
   weekFilter: number | undefined;
   games: Array<GamesProps>;
}

const Games = () => {
   const dispatch = useAppDispatch();
   const [weekFilter, setWeekFilter] = useState<States['weekFilter']>(undefined);
   const [games, setGames] = useState<States['games']>([]);
   const { gamesData, loadingGamesData, errorGamesData } = useAppSelector((state) => state.home);
   const { weeks, loadingWeeks, errorWeeks } = useAppSelector((state) => state.player12);

   if (games.length === 0 && gamesData.length !== 0) {
      setGames(gamesData);
   } //First Data

   const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      if (e.target.value === 'Jornadas') {
         setGames(gamesData);
         setWeekFilter(undefined);
      } else {
         setGames(gamesData.filter((game) => game.week === Number(e.target.value)));
         setWeekFilter(Number(e.target.value));
      }
   };

   useEffect(() => {
      window.document.title = "Partidos - Kings League";
      window.scrollTo(0, 0);
      dispatch(getWeeks());
      dispatch(getGamesData());
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);

   return (
      <Container>
         <HeaderTitle>
            <div>
               <h1>Partidos</h1>

               <div className="select">
                  <SelectButton
                     name="week"
                     value={weekFilter || 'Jornadas'}
                     onChange={handleChange}
                     selected={weekFilter}>
                     <option>Jornadas</option>
                     {!loadingWeeks &&
                        !errorWeeks &&
                        new Array(weeks.weeks_total).fill(null).map((week, i) => (
                           <option
                              value={i + 1}
                              key={uuidv4()}>
                              {`Jornada ${i + 1}`}
                           </option>
                        ))}
                  </SelectButton>
               </div>
            </div>
         </HeaderTitle>

         <GamesSection>
            {loadingGamesData
               ? new Array(8).fill(1).map((item) => (
                    <GamesWeek key={uuidv4()}>
                       <h2>Jornada ---</h2>
                       <SkeletonGamesContainer1 />
                    </GamesWeek>
                 ))
               : !errorGamesData &&
                 games!.map((weekGames) => (
                    <GamesWeek key={uuidv4()}>
                       <h2>
                          Jornada {weekGames.week} – {weekGames.date}
                       </h2>
                       <GamesContainer
                          data={weekGames}
                          mode={2}
                          className="mode-games"
                       />
                    </GamesWeek>
                 ))}
            {games.length > 1 && (
               <GamesWeek>
                  <h2>Playoff – 24-26/03/2023</h2>

                  <img
                     src="https://kingsleague.pro/wp-content/uploads/2023/01/AF_Bracket-1.png"
                     alt="playoff"
                     className="playoff"
                  />
               </GamesWeek>
            )}
         </GamesSection>
      </Container>
   );
};

export { Games };
