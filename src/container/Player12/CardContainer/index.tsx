import React from 'react';
import {v4 as uuidv4} from 'uuid';
import { Player12Card } from '../../../components/Player12Card';
import { SkeletonPlayer12Card } from '../../../components/Player12Card/skeleton';
import { Player12Props } from '../../../types';
import { CardsContainer } from './index.styled';

interface Props {
   data: Array<Player12Props>;
   loading: boolean;
   error: any;
}

const Player12CardContainer = ({data, loading, error}: Props) => {
   return (
      <CardsContainer>
      {loading ? (
         new Array(20).fill(0).map((box) => <SkeletonPlayer12Card key={uuidv4()} />)
      ) : !error ? (
         data.length === 0 ? (
            <h1 className="no-players">NO HAY JUGADORES</h1>
         ) : (
            data.map((player) => (
               <Player12Card
                  data={player}
                  key={uuidv4()}
               />
            ))
         )
      ) : (
         <p>error</p>
      )}
   </CardsContainer>
   );
};

export { Player12CardContainer };