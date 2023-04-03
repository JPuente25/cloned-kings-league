import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { Player12ButtonsContainer } from '../../container/Player12/ButtonsContainer';
import { Player12CardContainer } from '../../container/Player12/CardContainer';
import { getTeamsData } from '../../features/KingsLeague/homeSlice';
import { getPlayer12Data, getWeeks } from '../../features/KingsLeague/player12Slice';
import { Player12Props } from '../../types';
import { BackgroundImage, Container } from './index.styled';

interface States {
   players: Array<Player12Props> | undefined;
   weekFilter: number | undefined;
   teamFilter: string | undefined;
}

const Player12 = () => {
   const dispatch = useAppDispatch();
   const [players, setPlayers] = useState<States['players']>(undefined);
   const [weekFilter, setWeekFilter] = useState<States['weekFilter']>(undefined);
   const [teamFilter, setTeamFilter] = useState<States['teamFilter']>(undefined);
   const { player12Data, weeks, loadingPlayer12Data, loadingWeeks, errorPlayer12Data, errorWeeks } =
      useAppSelector((state) => state.player12);
   const { teamsData, loadingTeamsData, errorTeamsData } = useAppSelector((state) => state.home);

   const showPlayers = players || [...player12Data];

   const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      let week = weekFilter;
      let team = teamFilter;

      if (e.target.name === 'week') {
         week = Number(e.target.value);
      } else {
         team = e.target.value;
      }

      setPlayers(
         player12Data
            .filter((player) => (week ? player.week.includes(week) : player))
            .filter((player) => (team ? player.team === team : player))
      );

      setWeekFilter(week);
      setTeamFilter(team);
   };

   const handleClick = () => {
      setWeekFilter(undefined);
      setTeamFilter(undefined);
      setPlayers(undefined);
   };

   useEffect(() => {
      window.document.title = "Jugador 12 - Kings League";
      window.scrollTo(0, 0);
      dispatch(getPlayer12Data());
      dispatch(getWeeks());
      dispatch(getTeamsData());
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);

   return (
      <Container>
         <BackgroundImage />

         <h1>Jugador 12</h1>

         <Player12ButtonsContainer
            teamsData={teamsData}
            teamFilter={teamFilter}
            weekData={weeks}
            weekFilter={weekFilter}
            loadingTeams={loadingTeamsData}
            loadingWeeks={loadingWeeks}
            errorTeams={errorTeamsData}
            errorWeeks={errorWeeks}
            handleClick={handleClick}
            handleChange={handleChange}
         />

         <Player12CardContainer
            data={showPlayers}
            loading={loadingPlayer12Data}
            error={errorPlayer12Data}
         />
      </Container>
   );
};

export { Player12 };
