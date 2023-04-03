import { GameData } from '../../types';

const getGamesScoreText = (game: GameData) => {
   return !game.goals_a && game.goals_a !== 0 && !game.time
      ? 'VS'
      : !game.goals_a && game.time
      ? `${game.time}`
      : game.goals_a === game.goals_b
      ? `(${game.penalti_a}) ${game.goals_a} – ${game.goals_b} (${game.penalti_b})`
      : `${game.goals_a} – ${game.goals_b}`;
};

export { getGamesScoreText };
