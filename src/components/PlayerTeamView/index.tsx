import React from 'react';
import { Container, GradientPlayer, ImageBox } from './index.styled';

interface Props {
   data: {
      image: string,
      name: string,
      role: string
   }
}

const PlayerTeamView = ({data}: Props) => {
   return (
      <Container>
         <ImageBox>
            <GradientPlayer>
               <img
                  src={data.image}
                  alt={data.name}
               />
            </GradientPlayer>
         </ImageBox>
         <div>
            <h3>{data.name}</h3>
            <h4>{data.role.toUpperCase()}</h4>
         </div>
      </Container>
   );
};

export { PlayerTeamView };
