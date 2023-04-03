import styled from 'styled-components';

export const Trail = styled.div`
   background-color: #e9e9e9;
   position: relative;
`;

export const ValueText = styled.p`
   position: absolute;
   -webkit-user-select: none;
   -moz-user-select: none;
   -ms-user-select: none;
   user-select: none;
   font-size: 14px;
   color: rgba(50, 38, 81, 0.75);
   position: absolute;
   top: 150%;
`;

export const Dot = styled.div`
   background-color: orange;
   border-radius: 50%;
   position: absolute;
   cursor: pointer;
   z-index: 5;

   p {
   }
`;

export const ValueRangeBar = styled.div`
   background-color: orange;
   position: absolute;
`;
