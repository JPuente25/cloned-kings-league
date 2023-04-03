import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { GamesProps } from '../../types';
import { getGamesScoreText } from '../../utils/functions/getGamesScoreText';
import { Container, GameBox, GameScore, TeamLogo, TeamName } from './index.styled';

interface Props {
   data: GamesProps;
   mode?: number; //1: PAGINA HOME, 2: PAGINA PARTIDOS
   className: string;
}

const GamesContainer = ({ data, mode = 1, className }: Props) => {
   const navigate = useNavigate();
   const fullName = mode === 2 && window.innerWidth >= 640;

   const handleClick = () => {
      navigate(`/equipos`);
   }

   return (
      <Container mode={mode}>
         {data?.results.map((game) => {
            const text = getGamesScoreText(game);

            return (
               <GameBox mode={mode} key={uuidv4()}>
                  <TeamName className={`${mode === 1 ? 'home' : 'games'}`}>
                     {fullName ? game.team_a : game.team_a_red}
                  </TeamName>

                  <TeamLogo
                     src={game.logo_a}
                     alt={`${game.team_a} logo`}
                     className={`${mode === 1 ? 'home' : 'games'}`}
                     onClick={handleClick}
                  />

                  <GameScore
                     className={`${
                        data.played
                           ? 'played'
                           : !data.played && !game.time
                           ? 'not-played-not-time'
                           : 'not-played-time'
                     } ${mode === 1 ? 'home' : 'games'}`}>
                     {text}
                  </GameScore>

                  <TeamLogo
                     src={game.logo_b}
                     alt={`${game.team_b} logo`}
                     className={`${mode === 1 ? 'home' : 'games'}`}
                  />

                  <TeamName className={`${mode === 1 ? 'home' : 'games'}`}>
                     {fullName ? game.team_b : game.team_b_red}
                  </TeamName>

                  {mode === 2 && (
                     <img
                        src="https://kingsleague.pro/wp-content/uploads/2022/12/youtube.svg"
                        alt="youtube"
                        className="youtube-logo"
                     />
                  )}
               </GameBox>
            );
         })}
      </Container>
   );
};

export { GamesContainer };
