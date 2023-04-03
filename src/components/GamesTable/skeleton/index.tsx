import React from 'react';
import { ArrowSVG } from '../../Svg/ArrowSVG';
import { TableContainer } from '../../TableContainer';
import { GameContainer } from './index.styled';
import { Header, TableGames } from './index.styled';

const SkeletonGamesTable = () => {
   return (
      <TableContainer title="PARTIDOS">
         <Header>
            <div className='previous'>
               <ArrowSVG />
            </div>

            <div className='text'>
               <div className='title'></div>
               <div className='date'></div>
            </div>

            <div className='next'>
               <ArrowSVG />
            </div>
         </Header>

         <TableGames>
            <GameContainer />
            <GameContainer />
            <GameContainer />
            <GameContainer />
            <GameContainer />
            <GameContainer />
         </TableGames>

      </TableContainer>
   );
};

export { SkeletonGamesTable };