import React from 'react';
import { v4 as uuidv4 } from "uuid";
import {
   ButtonsContainer,
   Container,
   OptionsContainer,
   PositionSelector,
   RangeContainer,
   SliderContainer,
   TypePlayer,
} from './index.styled';

const SkeletonFilterSection = () => {
   return (
      <Container>
         <TypePlayer>
            <button></button>
            <button></button>
         </TypePlayer>

         <RangeContainer>
            {new Array(6).fill(1).map((item) => (
               <SliderContainer key={uuidv4()}>
                  <div className="title"></div>
                  <div className="slider">
                     <span></span>
                     <span></span>
                     <span></span>
                  </div>
               </SliderContainer>
            ))}
         </RangeContainer>

         <OptionsContainer>
            <PositionSelector>
               <div className="title"></div>
               <div className="options">
                  <span></span>
                  <span></span>
                  <span></span>
               </div>
            </PositionSelector>

            <div className="pie-dominante">
               <div className="title"></div>
               <div className="select"></div>
            </div>
         </OptionsContainer>

         <ButtonsContainer>
            <button></button>
            <button></button>
         </ButtonsContainer>
      </Container>
   );
};

export { SkeletonFilterSection };
