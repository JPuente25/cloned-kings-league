import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaFilter } from 'react-icons/fa';
import { MdFilterAltOff } from 'react-icons/md';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { DraftCard } from '../../components/DraftCard';
import { getDraftGoalkeepers, getDraftPlayers } from '../../features/KingsLeague/draftSlice';
import { DraftGoalkeeper, DraftPlayer } from '../../types';
import {
   Container,
   FilterDesktopContainer,
   FilterMobileContainer,
   PlayersContainer,
   TitleBox,
} from './index.styled';
import { FilterSection } from '../../container/FilterSection';
import { SkeletonPlayersContainer } from './skeleton/SkeletonPlayersContainer';
import { SkeletonTitleBox } from './skeleton/SkeletonTitleBox';
import { SkeletonFilterSection } from '../../container/FilterSection/skeleton';

interface States {
   players: Array<DraftPlayer> | Array<DraftGoalkeeper> | null;
   type: 'players' | 'goalkeepers';
   searchValue: string;
   mobileFilter: boolean;
}

const Draft = () => {
   const dispatch = useAppDispatch();
   const {
      draftPlayers,
      draftGoalkeepers,
      loadingDraftPlayers,
      loadingDraftGoalkeepers,
      errorDraftPlayers,
      errorDraftGoalkeepers,
   } = useAppSelector((state) => state.draft);

   const [players, setPlayers] = useState<States['players']>(null);
   const [type, setType] = useState<States['type']>('players');
   const [searchValue, setSearchValue] = useState<States['searchValue']>('');
   const [mobileFilter, setMobileFilter] = useState<States['mobileFilter']>(false);

   const handleSetType = (payload: typeof type) => {
      setType(payload);
   };

   const handleSetPlayers = (payload: typeof players) => {
      setPlayers(payload);
   };

   const handleSetSearchValue = (payload: typeof searchValue) => {
      setSearchValue(payload);
   };

   const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchValue(e.target.value);
   };

   const handleMobileFilter = () => {
      setMobileFilter((prev) => !prev);
   };

   useEffect(() => {
      window.document.title = 'Draft - Kings League';
      window.scrollTo(0, 0);
      dispatch(getDraftPlayers());
      dispatch(getDraftGoalkeepers());
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);

   return (
      <Container>
         {loadingDraftPlayers || loadingDraftGoalkeepers ? (
            <SkeletonTitleBox />
         ) : !errorDraftPlayers && !errorDraftGoalkeepers ? (
            <TitleBox>
               <h2>2022/23 {type === 'players' ? 'Jugadores' : 'Porteros'} Draft</h2>
               <div>
                  <AiOutlineSearch />
                  <input
                     type="search"
                     placeholder="Buscador"
                     onChange={handleSearch}
                     value={searchValue}
                  />
               </div>
            </TitleBox>
         ) : (
            <p>error</p>
         )}

         <FilterMobileContainer active={mobileFilter}>
            <div
               className="filter"
               onClick={handleMobileFilter}>
               <h4>Filtros</h4>
               {mobileFilter ? (
                  <MdFilterAltOff className="filter-icon-1" />
               ) : (
                  <FaFilter className="filter-icon-2" />
               )}
            </div>

            {loadingDraftPlayers || loadingDraftGoalkeepers ? (
               <SkeletonFilterSection />
            ) : !errorDraftPlayers && !errorDraftGoalkeepers ? (
               <FilterSection
                  type={type}
                  setType={handleSetType}
                  setPlayers={handleSetPlayers}
                  searchValue={searchValue}
                  setSearchValue={handleSetSearchValue}
                  draftPlayers={draftPlayers}
                  draftGoalkeepers={draftGoalkeepers}
                  setMobileFilter={handleMobileFilter}
               />
            ) : (
               <p>error</p>
            )}
         </FilterMobileContainer>

         <FilterDesktopContainer>
            {loadingDraftPlayers || loadingDraftGoalkeepers ? (
               <SkeletonFilterSection />
            ) : !errorDraftPlayers && !errorDraftGoalkeepers ? (
               <FilterSection
                  type={type}
                  setType={handleSetType}
                  setPlayers={handleSetPlayers}
                  searchValue={searchValue}
                  setSearchValue={handleSetSearchValue}
                  draftPlayers={draftPlayers}
                  draftGoalkeepers={draftGoalkeepers}
                  setMobileFilter={handleMobileFilter}
               />
            ) : (
               <p>error</p>
            )}
         </FilterDesktopContainer>

         {loadingDraftPlayers || loadingDraftGoalkeepers ? (
            <SkeletonPlayersContainer />
         ) : !errorDraftGoalkeepers && !errorDraftPlayers ? (
            <PlayersContainer>
               {players?.map((player, i) => (
                  <DraftCard
                     type={type}
                     data={player}
                     number={i}
                     key={uuidv4()}
                  />
               ))}
            </PlayersContainer>
         ) : (
            <p>error</p>
         )}
      </Container>
   );
};

export { Draft };
