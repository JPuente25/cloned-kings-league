import {useEffect} from 'react';
import { GenericContainer } from '../../container/GenericContainer';
import { TeamCardContainer } from '../../container/TeamCardContainer';

const Equipos = () => {

   useEffect(() => {
      window.document.title = "Equipos - Kings League";
      window.scrollTo(0,0);
   }, []);

   return (
      <GenericContainer title="Equipos">
         <TeamCardContainer />
      </GenericContainer>
   );
};

export { Equipos };

