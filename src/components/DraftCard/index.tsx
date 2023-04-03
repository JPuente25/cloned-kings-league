import React from 'react';
import { DraftGoalkeeper, DraftPlayer } from '../../types';
import {
   Container,
   PersonalData,
   PlayerPicture,
   StatisticsPoints,
   TopSection,
} from './index.styled';

interface Props {
   type: string;
   data: DraftPlayer | DraftGoalkeeper;
   number: number;
}

const DraftCard = ({ type, data, number }: Props) => {
   const getDorsalNumber = (number: number) =>
      number.toString().length === 1
         ? `00${number}`
         : number.toString().length === 2
         ? `0${number}`
         : `${number}`;

   return (
      <Container>
         <TopSection>
            <PlayerPicture playerImg={data.img}>
               <div className="player-number">
                  <img
                     src="https://kingsleague.pro/wp-content/uploads/2022/12/dorsal-mask.png"
                     alt="mask dorsal"
                  />
                  <h2>{getDorsalNumber(number)}</h2>
               </div>
            </PlayerPicture>

            <PersonalData>
               <div className="data">
                  <h3 className="name">{data.name}</h3>
                  <div className="role">
                     <span>{data.role.toUpperCase()}</span>
                     <img
                        src="https://kingsleague.pro/wp-content/uploads/2022/12/youtube.svg"
                        alt="youtube logo"
                     />
                  </div>
               </div>

               <ul className="numerics">
                  <li>
                     <h4>EDAD</h4>
                     <p>{data.age}</p>
                  </li>
                  <li>
                     <h4>PIE</h4>
                     <p>{data.foot}</p>
                  </li>
                  <li>
                     <h4>ALTURA</h4>
                     <p>{data.height} cm</p>
                  </li>
                  <li>
                     <h4>PESO</h4>
                     <p>{data.weight} kg</p>
                  </li>
               </ul>
            </PersonalData>
         </TopSection>

         <StatisticsPoints>
            {type === 'players' ? (
               <React.Fragment>
                  <li>
                     <h3>{(data as DraftPlayer).physical}</h3>
                     <p>FISICO</p>
                  </li>
                  <li>
                     <h3>{(data as DraftPlayer).speed}</h3>
                     <p>VELOCIDAD</p>
                  </li>
                  <li>
                     <h3>{(data as DraftPlayer).shoot}</h3>
                     <p>TIRO</p>
                  </li>
                  <li>
                     <h3>{(data as DraftPlayer).skill}</h3>
                     <p>TALENTO</p>
                  </li>
                  <li>
                     <h3>{(data as DraftPlayer).pass}</h3>
                     <p>PASE</p>
                  </li>
                  <li>
                     <h3>{(data as DraftPlayer).defense}</h3>
                     <p>DEFENSA</p>
                  </li>
               </React.Fragment>
            ) : (
               <React.Fragment>
                  <li>
                     <h3>{(data as DraftGoalkeeper).reflex}</h3>
                     <p>REFLEJOS</p>
                  </li>
                  <li>
                     <h3>{(data as DraftGoalkeeper).block}</h3>
                     <p>PARADAS</p>
                  </li>
                  <li>
                     <h3>{(data as DraftGoalkeeper).kick}</h3>
                     <p>SAQUE</p>
                  </li>
                  <li>
                     <h3>{(data as DraftGoalkeeper).stretch}</h3>
                     <p>ESTIRADA</p>
                  </li>
               </React.Fragment>
            )}
         </StatisticsPoints>
      </Container>
   );
};

export { DraftCard };
