import { AssistsProps } from "../../types";
import { deepCopySubject } from "./deepCopySubject";

const getAssistsPlayer = (assistsList: Array<AssistsProps>) => {
   const copyList = deepCopySubject(assistsList);
   const orderedList = copyList.sort((a, b) => (
      (b.assists === a.assists)
         ? a.played_games - b.played_games
         : b.assists - a.assists
   ));

   return orderedList;
};

export default getAssistsPlayer;