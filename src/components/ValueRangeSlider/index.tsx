import { useEffect, useRef } from 'react';
import { Dot, Trail, ValueRangeBar, ValueText } from './index.styled';

interface Props {
   min: number;
   max: number;
   trailWidth: number;
   value: {
      min: number;
      max: number;
   };
   setValue: React.Dispatch<
      React.SetStateAction<{
         min: number;
         max: number;
      }>
   >;
   restartTrigger: boolean;
}

const ValueRangeSlider = ({ min, max, trailWidth, value, setValue, restartTrigger }: Props) => {
   const trailHeight = trailWidth / 30;
   const dotDiameter = trailWidth / 5;
   const valueRange = max - min;
   const initialMinLeft = -dotDiameter / 2;
   const initialMaxRight = -dotDiameter / 2;
   const conversionFactor = trailWidth / valueRange;
   let lastPositionMax = 0;
   let lastPositionMin = 0;
   let minValueTemp = min;
   let maxValueTemp = max;

   const minDot = useRef<HTMLDivElement>(null);
   const maxDot = useRef<HTMLDivElement>(null);
   const bar = useRef<HTMLDivElement>(null);

   const handleMouseDownMax = (e: MouseEvent) => {
      e.preventDefault();
      lastPositionMax = e.screenX;
      window.addEventListener('mousemove', handleMouseMoveMax);
   };

   const handleMouseMoveMax = (e: MouseEvent) => {
      const moveAmmount = e.screenX - lastPositionMax;
      lastPositionMax = e.screenX;

      if (maxDot.current?.style.right) {
         const oldValue = Number(maxDot.current.style.right.split('px')[0]);
         const nextValue = oldValue - moveAmmount;
         const newValue =
            nextValue < trailWidth + initialMaxRight
               ? nextValue > initialMaxRight
                  ? nextValue
                  : initialMaxRight
               : trailWidth + initialMaxRight;
         const purifiedNewValue = Math.min(
            newValue,
            trailWidth - ((minValueTemp - min) * conversionFactor + dotDiameter / 2)
         );
         const calcMaxValue = max - (purifiedNewValue - initialMaxRight) / conversionFactor;

         maxDot.current.style.right = `${purifiedNewValue}px`;
         maxValueTemp = Math.round(calcMaxValue);

         setValue({
            min: minValueTemp,
            max: Math.round(calcMaxValue),
         });
      }

      window.addEventListener('mouseup', handleMouseUpMax);
   };

   const handleMouseUpMax = () => {
      window.removeEventListener('mousemove', handleMouseMoveMax);
   };

   const handleMouseDownMin = (e: MouseEvent) => {
      e.preventDefault();
      lastPositionMin = e.screenX;
      window.addEventListener('mousemove', handleMouseMoveMin);
   };

   const handleMouseMoveMin = (e: MouseEvent) => {
      const moveAmmount = e.screenX - lastPositionMin;
      lastPositionMin = e.screenX;

      if (minDot.current?.style.left && bar.current?.style.left) {
         const oldValue = Number(minDot.current.style.left.split('px')[0]);
         const nextValue = oldValue + moveAmmount;
         const newValue =
            nextValue > initialMinLeft
               ? nextValue < trailWidth + initialMinLeft
                  ? nextValue
                  : trailWidth + initialMinLeft
               : initialMinLeft;
         const purifiedNewValue = Math.min(
            newValue,
            trailWidth - ((max - maxValueTemp) * conversionFactor + dotDiameter / 2)
         );
         const calcMinValue = min + (purifiedNewValue - initialMinLeft) / conversionFactor;

         minDot.current.style.left = `${purifiedNewValue}px`;
         bar.current.style.left = `${purifiedNewValue}px`;
         minValueTemp = Math.round(calcMinValue);

         setValue({
            min: Math.round(calcMinValue),
            max: maxValueTemp,
         });
      }

      window.addEventListener('mouseup', handleMouseUpMin);
   };

   const handleMouseUpMin = () => {
      window.removeEventListener('mousemove', handleMouseMoveMin);
   };

   const resetAll = () => {
      setValue({
         min: min,
         max: max,
      });

      minDot.current!.style.left = `${initialMinLeft}px`;
      maxDot.current!.style.right = `${initialMaxRight}px`;
      bar.current!.style.width = `${(max - min) * conversionFactor + dotDiameter / 2}px`
      bar.current!.style.left = "0px"
   } 

   useEffect(() => {
      minDot.current!.addEventListener('mousedown', handleMouseDownMin);
      maxDot.current!.addEventListener('mousedown', handleMouseDownMax);
      resetAll();
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [restartTrigger]);

   return (
      <Trail
         style={{
            width: `${trailWidth}px`,
            height: `${trailHeight}px`,
         }}>
         <ValueText style={{ top: `${dotDiameter}px`, left: '-10px' }}>{value.min}</ValueText>

         <Dot
            ref={minDot}
            style={{
               width: `${dotDiameter}px`,
               height: `${dotDiameter}px`,
               top: `-${dotDiameter / 2 - trailHeight / 2}px`,
               left: `${initialMinLeft}px`,
            }}
         />

         <ValueRangeBar
            ref={bar}
            style={{
               height: `${trailHeight}px`,
               width: `${(value.max - value.min) * conversionFactor + dotDiameter / 2}px`,
               left: '0px',
            }}
         />

         <Dot
            ref={maxDot}
            style={{
               width: `${dotDiameter}px`,
               height: `${dotDiameter}px`,
               top: `-${dotDiameter / 2 - trailHeight / 2}px`,
               right: `${initialMaxRight}px`,
            }}
         />

         <ValueText style={{ top: `${dotDiameter}px`, right: '-10px' }}>{value.max}</ValueText>
      </Trail>
   );
};

export { ValueRangeSlider };
