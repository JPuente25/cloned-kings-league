import { v4 as uuidv4 } from "uuid";
import { PlayersContainer } from './index.styled';

const SkeletonPlayersContainer = () => {
   return (
      <PlayersContainer>
         {new Array(20).fill(1).map((card) => (
            <div key={uuidv4()}></div>
         ))}
      </PlayersContainer>
   );
};

export { SkeletonPlayersContainer };

