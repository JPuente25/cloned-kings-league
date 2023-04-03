import { MvpProps } from "../../types";
import { deepCopySubject } from "./deepCopySubject";

const getMvpPlayer = (mvpList: Array<MvpProps>) => {
   const copyList = deepCopySubject(mvpList);
   const orderedList = copyList.sort((a, b) => (
      (b.mvp_games === a.mvp_games)
         ? a.played_games - b.played_games
         : b.mvp_games - a.mvp_games
   ));

   return orderedList;
};

export default getMvpPlayer;