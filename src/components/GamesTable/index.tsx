import { useState } from 'react';
import { GamesContainer } from '../../container/GamesContainer';
import { GamesProps } from '../../types';
import spanishDateFormatter from '../../utils/functions/spanishDateFormatter';
import { ArrowSVG } from '../Svg/ArrowSVG';
import { TableContainer } from '../TableContainer';
import { Header } from './index.styled';

interface Props {
   gamesData: Array<GamesProps>;
}

interface States {
   games: GamesProps | null;
}

const GamesTable = ({ gamesData }: Props) => {
   const [games, setGames] = useState<States['games']>(null);
   const nextGames = gamesData.find((item) => !item.played); //GETS FIRST SET OF GAMES NOT PLAYED TO SHOW
   const gameData =  games || nextGames!;//DISPLAYS FIRST SET OF GAMES, THEN SELECTED ONE

   const handleClick = (nextIndex: number) => {
      if (nextIndex >= 0 && nextIndex < gamesData.length) {
         setGames(gamesData[nextIndex]);
      } else if (nextIndex < 0) {
         const realNextIndex = gamesData.length + nextIndex;
         setGames(gamesData[realNextIndex]);
      } else {
         const realNextIndex = nextIndex - gamesData.length;
         setGames(gamesData[realNextIndex]);
      }
   };

   return (
      <TableContainer title="PARTIDOS">
         <Header>
            <div
               onClick={() => handleClick(gameData!.week - 2)}
               className="previous">
               <ArrowSVG />
            </div>

            <div>
               <h4>Jornada {gameData?.week}</h4>
               <span>{spanishDateFormatter(gameData?.date)}</span>
            </div>

            <div
               onClick={() => handleClick(gameData!.week)}
               className="next">
               <ArrowSVG />
            </div>
         </Header>

         <GamesContainer data={gameData} className="mode-home"/>
         
      </TableContainer>
   );
};

export { GamesTable };

