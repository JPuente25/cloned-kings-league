import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlinePlus } from 'react-icons/ai';
import { ValueRangeSlider } from '../../components/ValueRangeSlider';
import { DraftGoalkeeper, DraftPlayer, RangeValues } from '../../types';
import {
   ButtonsContainer,
   Container,
   OptionsContainer,
   PositionSelector,
   RangeContainer,
   SliderContainer,
   TypePlayer,
} from './index.styled';

interface Props {
   type: 'players' | 'goalkeepers';
   setType: (value: 'players' | 'goalkeepers') => void;
   draftPlayers: Array<DraftPlayer>;
   draftGoalkeepers: Array<DraftGoalkeeper>;
   searchValue: string;
   setSearchValue: (value: string) => void;
   setPlayers: (players: Array<DraftPlayer> | Array<DraftGoalkeeper>) => void;
   setMobileFilter: () => void;
}

interface States {
   physicalValue: RangeValues;
   speedValue: RangeValues;
   shootValue: RangeValues;
   skillValue: RangeValues;
   passValue: RangeValues;
   defenseValue: RangeValues;
   playerHeightValue: RangeValues;
   goalkeeperHeightValue: RangeValues;
   reflexValue: RangeValues;
   blockValue: RangeValues;
   kickValue: RangeValues;
   stretchValue: RangeValues;
   playerPosition: Array<string>;
   playerFoot: 'any' | 'diestro' | 'zurdo';
   restartTrigger: boolean;
}

const FilterSection = ({
   type,
   setType,
   draftPlayers,
   draftGoalkeepers,
   searchValue,
   setSearchValue,
   setPlayers,
   setMobileFilter,
}: Props) => {
   const startRange = {
      min: 0,
      max: 1,
   };
   const [physicalValue, setPhysicalValue] = useState<States['physicalValue']>(startRange);
   const [speedValue, setSpeedValue] = useState<States['speedValue']>(startRange);
   const [shootValue, setShootValue] = useState<States['shootValue']>(startRange);
   const [skillValue, setSkillValue] = useState<States['skillValue']>(startRange);
   const [passValue, setPassValue] = useState<States['passValue']>(startRange);
   const [defenseValue, setDefenseValue] = useState<States['defenseValue']>(startRange);
   const [playerHeightValue, setPlayerHeightValue] =
      useState<States['playerHeightValue']>(startRange);
   const [goalkeeperHeightValue, setGoalkeeperHeightValue] =
      useState<States['goalkeeperHeightValue']>(startRange);
   const [reflexValue, setReflexValue] = useState<States['reflexValue']>(startRange);
   const [blockValue, setBlockValue] = useState<States['blockValue']>(startRange);
   const [kickValue, setKickValue] = useState<States['kickValue']>(startRange);
   const [stretchValue, setStretchValue] = useState<States['stretchValue']>(startRange);

   const [playerPosition, setPlayerPosition] = useState<States['playerPosition']>([]);
   const [playerFoot, setPlayerFoot] = useState<States['playerFoot']>('any');
   const [restartTrigger, setRestartTrigger] = useState<States['restartTrigger']>(true);

   const rangeValues = {
      physical: {
         min: Math.min(...draftPlayers.map((player) => player.physical)),
         max: Math.max(...draftPlayers.map((player) => player.physical)),
      },
      speed: {
         min: Math.min(...draftPlayers.map((player) => player.speed)),
         max: Math.max(...draftPlayers.map((player) => player.speed)),
      },
      shoot: {
         min: Math.min(...draftPlayers.map((player) => player.shoot)),
         max: Math.max(...draftPlayers.map((player) => player.shoot)),
      },
      skill: {
         min: Math.min(...draftPlayers.map((player) => player.skill)),
         max: Math.max(...draftPlayers.map((player) => player.skill)),
      },
      pass: {
         min: Math.min(...draftPlayers.map((player) => player.pass)),
         max: Math.max(...draftPlayers.map((player) => player.pass)),
      },
      defense: {
         min: Math.min(...draftPlayers.map((player) => player.defense)),
         max: Math.max(...draftPlayers.map((player) => player.defense)),
      },
      playerHeight: {
         min: Math.min(...draftPlayers.map((player) => player.height)),
         max: Math.max(...draftPlayers.map((player) => player.height)),
      },
      reflex: {
         min: Math.min(...draftGoalkeepers.map((player) => player.reflex)),
         max: Math.max(...draftGoalkeepers.map((player) => player.reflex)),
      },
      block: {
         min: Math.min(...draftGoalkeepers.map((player) => player.block)),
         max: Math.max(...draftGoalkeepers.map((player) => player.block)),
      },
      kick: {
         min: Math.min(...draftGoalkeepers.map((player) => player.kick)),
         max: Math.max(...draftGoalkeepers.map((player) => player.kick)),
      },
      stretch: {
         min: Math.min(...draftGoalkeepers.map((player) => player.stretch)),
         max: Math.max(...draftGoalkeepers.map((player) => player.stretch)),
      },
      goalkeeperHeight: {
         min: Math.min(...draftGoalkeepers.map((player) => player.height)),
         max: Math.max(...draftGoalkeepers.map((player) => player.height)),
      },
   };

   const handleChangeType = (type: 'players' | 'goalkeepers') => {
      setType(type);
      cleanFilters(type);
   };

   const handleSetPosition = (position: string) => {
      const copyPlayerPosition = [...playerPosition];
      const index = copyPlayerPosition.findIndex((item) => item === position);

      if (index !== -1) {
         copyPlayerPosition.splice(index, 1);
         setPlayerPosition(copyPlayerPosition);
      } else {
         setPlayerPosition([...playerPosition, position]);
      }
   };

   const handleChangeFoot = (e: React.ChangeEvent<HTMLSelectElement>) => {
      setPlayerFoot(e.target.value as 'diestro' | 'zurdo' | 'any');
   };

   const filterPlayers = (searchValue: string = '') => {
      if (type === 'players') {
         const newPlayers = (draftPlayers as Array<DraftPlayer>).filter(
            (player) =>
               player.height >= playerHeightValue.min &&
               player.height <= playerHeightValue.max &&
               player.physical >= physicalValue.min &&
               player.physical <= physicalValue.max &&
               player.speed >= speedValue.min &&
               player.speed <= speedValue.max &&
               player.shoot >= shootValue.min &&
               player.shoot <= shootValue.max &&
               player.skill >= skillValue.min &&
               player.skill <= skillValue.max &&
               player.pass >= passValue.min &&
               player.pass <= passValue.max &&
               player.defense >= defenseValue.min &&
               player.defense <= defenseValue.max &&
               (playerPosition.includes(player.role.toLowerCase()) ||
                  playerPosition.length === 0) &&
               (player.foot.toLowerCase() === playerFoot || playerFoot === 'any') &&
               player.name.toLowerCase().includes(searchValue)
         );
         setPlayers(newPlayers);
      } else {
         const newPlayers = (draftGoalkeepers as Array<DraftGoalkeeper>).filter(
            (player: DraftGoalkeeper) =>
               player.height >= goalkeeperHeightValue.min &&
               player.height <= goalkeeperHeightValue.max &&
               player.reflex >= reflexValue.min &&
               player.reflex <= reflexValue.max &&
               player.block >= blockValue.min &&
               player.block <= blockValue.max &&
               player.kick >= kickValue.min &&
               player.kick <= kickValue.max &&
               player.stretch >= stretchValue.min &&
               player.stretch <= stretchValue.max &&
               (player.foot.toLowerCase() === playerFoot || playerFoot === 'any') &&
               player.name.toLowerCase().includes(searchValue)
         );

         setPlayers(newPlayers);
      }
   };

   const cleanFilters = (hardType?: string) => {
      setRestartTrigger((prev) => !prev);
      setPlayerPosition([]);
      setPlayerFoot('any');
      setSearchValue('');
      hardType
         ? setPlayers(hardType === 'players' ? [...draftPlayers] : [...draftGoalkeepers])
         : setPlayers(type === 'players' ? [...draftPlayers] : [...draftGoalkeepers]);
   };

   useEffect(() => {
      filterPlayers(searchValue);
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [searchValue]);

   useEffect(() => {
      setPlayers(draftPlayers);
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);

   return (
      <Container>
         <TypePlayer>
            <button
               className={`${type === 'players' && 'active'}`}
               onClick={() => handleChangeType('players')}>
               Jugadores
            </button>
            <button
               className={`${type === 'goalkeepers' && 'active'}`}
               onClick={() => handleChangeType('goalkeepers')}>
               Porteros
            </button>
         </TypePlayer>

         <RangeContainer>
            <SliderContainer className={`${type === 'players' && 'active'}`}>
               <h4>Altura</h4>
               <ValueRangeSlider
                  restartTrigger={restartTrigger}
                  trailWidth={90}
                  min={rangeValues.playerHeight.min}
                  max={rangeValues.playerHeight.max}
                  value={playerHeightValue}
                  setValue={setPlayerHeightValue}
               />
            </SliderContainer>
            <SliderContainer className={`${type === 'players' && 'active'}`}>
               <h4>Físico</h4>
               <ValueRangeSlider
                  restartTrigger={restartTrigger}
                  trailWidth={90}
                  min={rangeValues!.physical.min}
                  max={rangeValues!.physical.max}
                  value={physicalValue}
                  setValue={setPhysicalValue}
               />
            </SliderContainer>
            <SliderContainer className={`${type === 'players' && 'active'}`}>
               <h4>Velocidad</h4>
               <ValueRangeSlider
                  restartTrigger={restartTrigger}
                  trailWidth={90}
                  min={rangeValues!.speed.min}
                  max={rangeValues!.speed.max}
                  value={speedValue}
                  setValue={setSpeedValue}
               />
            </SliderContainer>
            <SliderContainer className={`${type === 'players' && 'active'}`}>
               <h4>Tiro</h4>
               <ValueRangeSlider
                  restartTrigger={restartTrigger}
                  trailWidth={90}
                  min={rangeValues!.shoot.min}
                  max={rangeValues!.shoot.max}
                  value={shootValue}
                  setValue={setShootValue}
               />
            </SliderContainer>
            <SliderContainer className={`${type === 'players' && 'active'}`}>
               <h4>Talento</h4>
               <ValueRangeSlider
                  restartTrigger={restartTrigger}
                  trailWidth={90}
                  min={rangeValues!.skill.min}
                  max={rangeValues!.skill.max}
                  value={skillValue}
                  setValue={setSkillValue}
               />
            </SliderContainer>
            <SliderContainer className={`${type === 'players' && 'active'}`}>
               <h4>Pase</h4>
               <ValueRangeSlider
                  restartTrigger={restartTrigger}
                  trailWidth={90}
                  min={rangeValues!.pass.min}
                  max={rangeValues!.pass.max}
                  value={passValue}
                  setValue={setPassValue}
               />
            </SliderContainer>
            <SliderContainer className={`${type === 'players' && 'active'}`}>
               <h4>Defensa</h4>
               <ValueRangeSlider
                  restartTrigger={restartTrigger}
                  trailWidth={90}
                  min={rangeValues!.defense.min}
                  max={rangeValues!.defense.max}
                  value={defenseValue}
                  setValue={setDefenseValue}
               />
            </SliderContainer>
            <SliderContainer className={`${type === 'goalkeepers' && 'active'}`}>
               <h4>Altura</h4>
               <ValueRangeSlider
                  restartTrigger={restartTrigger}
                  trailWidth={90}
                  min={rangeValues!.goalkeeperHeight.min}
                  max={rangeValues!.goalkeeperHeight.max}
                  value={goalkeeperHeightValue}
                  setValue={setGoalkeeperHeightValue}
               />
            </SliderContainer>
            <SliderContainer className={`${type === 'goalkeepers' && 'active'}`}>
               <h4>Reflejos</h4>
               <ValueRangeSlider
                  restartTrigger={restartTrigger}
                  trailWidth={90}
                  min={rangeValues!.reflex.min}
                  max={rangeValues!.reflex.max}
                  value={reflexValue}
                  setValue={setReflexValue}
               />
            </SliderContainer>
            <SliderContainer className={`${type === 'goalkeepers' && 'active'}`}>
               <h4>Paradas</h4>
               <ValueRangeSlider
                  restartTrigger={restartTrigger}
                  trailWidth={90}
                  min={rangeValues!.block.min}
                  max={rangeValues!.block.max}
                  value={blockValue}
                  setValue={setBlockValue}
               />
            </SliderContainer>
            <SliderContainer className={`${type === 'goalkeepers' && 'active'}`}>
               <h4>Saque</h4>
               <ValueRangeSlider
                  restartTrigger={restartTrigger}
                  trailWidth={90}
                  min={rangeValues!.kick.min}
                  max={rangeValues!.kick.max}
                  value={kickValue}
                  setValue={setKickValue}
               />
            </SliderContainer>
            <SliderContainer className={`${type === 'goalkeepers' && 'active'}`}>
               <h4>Estirada</h4>
               <ValueRangeSlider
                  restartTrigger={restartTrigger}
                  trailWidth={90}
                  min={rangeValues!.stretch.min}
                  max={rangeValues!.stretch.max}
                  value={stretchValue}
                  setValue={setStretchValue}
               />
            </SliderContainer>
         </RangeContainer>

         <OptionsContainer>
            {type === 'players' && (
               <PositionSelector>
                  <h4>Posición</h4>
                  <div>
                     <span
                        className={`${playerPosition.includes('defensa') && 'active'}`}
                        onClick={() => handleSetPosition('defensa')}>
                        <p>Defensa</p>
                        {playerPosition.includes('defensa') ? (
                           <AiOutlineClose />
                        ) : (
                           <AiOutlinePlus />
                        )}
                     </span>
                     <span
                        className={`${playerPosition.includes('delantero') && 'active'}`}
                        onClick={() => handleSetPosition('delantero')}>
                        <p>Delantero</p>
                        {playerPosition.includes('delantero') ? (
                           <AiOutlineClose />
                        ) : (
                           <AiOutlinePlus />
                        )}
                     </span>
                     <span
                        className={`${playerPosition.includes('medio') && 'active'}`}
                        onClick={() => handleSetPosition('medio')}>
                        <p>Medio</p>
                        {playerPosition.includes('medio') ? <AiOutlineClose /> : <AiOutlinePlus />}
                     </span>
                  </div>
               </PositionSelector>
            )}

            <div className="pie-dominante">
               <h4>Pie Domininante</h4>
               <select
                  onChange={handleChangeFoot}
                  value={playerFoot}>
                  <option
                     defaultValue="any"
                     value="any">
                     Cualquiera
                  </option>
                  <option value="diestro">Diestro</option>
                  <option value="zurdo">Zurdo</option>
               </select>
            </div>
         </OptionsContainer>

         <ButtonsContainer>
            <button
               onClick={() => {
                  setMobileFilter();
                  filterPlayers();
               }}>
               Aplicar filtros
            </button>
            <button onClick={() => cleanFilters()}>Limpiar filtros</button>
         </ButtonsContainer>
      </Container>
   );
};

export { FilterSection };
