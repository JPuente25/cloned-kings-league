import { AiOutlineSearch } from 'react-icons/ai';
import { TitleBox } from './index.styled';

const SkeletonTitleBox = () => {
   return (
      <TitleBox>
         <h2>2022/23 Jugadores Draft</h2>
         <div>
            <AiOutlineSearch />
            <input
               type="search"
               placeholder="Buscador"
            />
         </div>
      </TitleBox>
   );
};

export { SkeletonTitleBox };

