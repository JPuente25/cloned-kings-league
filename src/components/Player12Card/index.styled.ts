import styled from 'styled-components';
import { showing } from './skeleton/index.styled';

export const PlayerImg = styled.img`
   position: absolute;
   height: 140%;
   top: 0;
   left: -7%;
   animation: ${showing} 0.5s linear;
`;

export const TeamLogo = styled.img`
   width: 40px;
   height: 40px;
   animation: ${showing} 0.5s linear;
`;

export const CardInfo = styled.div`
   height: 100%;
   margin-left: 40%;
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   font-family: var(--font-family-2);
   color: white;
   gap: 20px;

   div.team-info {
      display: flex;
      align-items: center;
      justify-content: start;
      font-size: 14px;
      gap: 15px;
   }

   h3 {
      font-size: 24px;
   }

   div.role {
      font-family: var(--font-family-1);
      font-size: 12px;
      font-weight: 700;
      background-color: black;
      text-align: center;
      padding: 5px;
      border-radius: 4px;
   }

   @media only screen and (max-width: 480px) {
      div.team-info {
         font-size: 12px;
      }

      h3 {
         font-size: 18px;
      }
   }
`;
