import { TeamsData } from "../../types";
import { deepCopySubject } from "./deepCopySubject";

const getTeamsQualification = (teams: TeamsData[]) => {
   const teamsCopy = deepCopySubject(teams);
   const teamsOrdered = teamsCopy.sort((a, b) => {
      if (b.win !== a.win) {
         return (b.win - a.win);
      }
      
      if ((b.goals - b.received_goals) !== (a.goals - a.received_goals)) {
         return ((b.goals - b.received_goals) - (a.goals - a.received_goals))
      }

      return (((b.yellow_cards * -1) + (b.red_cards * -4)) - ((a.yellow_cards * -1) + (a.red_cards * -4)))
   })
   return teamsOrdered;
}

export default getTeamsQualification;