import { GoalsProps } from "../../types";
import { deepCopySubject } from "./deepCopySubject";

const getGoalsPlayer = (goalsList: Array<GoalsProps>) => {
   const copyList = deepCopySubject(goalsList);
   const orderedList = copyList.sort((a, b) => (
      (b.goals === a.goals)
         ? a.played_games - b.played_games
         : b.goals - a.goals
   ));

   return orderedList;
};

export default getGoalsPlayer;