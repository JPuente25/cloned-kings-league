import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { TeamsData, WeeksProps } from '../../../types';
import { ButtonsContainer, SelectButton, ShowAllButton } from './index.styled';

interface Props {
   teamsData: Array<TeamsData>;
   teamFilter: string | undefined;
   weekData: WeeksProps;
   weekFilter: number | undefined;
   loadingTeams: boolean;
   loadingWeeks: boolean;
   errorTeams: any;
   errorWeeks: any;
   handleClick: () => void;
   handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Player12ButtonsContainer = ({
   teamsData,
   teamFilter,
   weekData,
   weekFilter,
   loadingTeams,
   loadingWeeks,
   errorTeams,
   errorWeeks,
   handleClick,
   handleChange,
}: Props) => {
   return (
      <ButtonsContainer>
         <ShowAllButton
            onClick={handleClick}
            filter={weekFilter || teamFilter}>
            Ver todos
         </ShowAllButton>

         <div>
            <span>Jornada</span>
            <SelectButton
               name="week"
               value={weekFilter || 'Todas'}
               onChange={handleChange}
               selected={weekFilter}>
               <option disabled>Todas</option>
               {!loadingWeeks &&
                  !errorWeeks &&
                  new Array(weekData.weeks_played).fill(null).map((week, i) => (
                     <option
                        value={i + 1}
                        key={uuidv4()}>
                        {i + 1}
                     </option>
                  ))}
            </SelectButton>
         </div>

         <div>
            <span>Equipo</span>

            <SelectButton
               name="team"
               value={teamFilter || 'Todos'}
               onChange={handleChange}
               selected={teamFilter}>
               <option disabled>Todos</option>
               {!loadingTeams &&
                  !errorTeams &&
                  teamsData.map((team) => (
                     <option
                        value={team.name}
                        key={uuidv4()}>
                        {team.name}
                     </option>
                  ))}
            </SelectButton>
         </div>
      </ButtonsContainer>
   );
};

export { Player12ButtonsContainer };
