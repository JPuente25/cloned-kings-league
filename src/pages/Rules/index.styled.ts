import styled from 'styled-components';

export const Container = styled.main`
   width: 100%;
   padding: 70px 40px;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: flex-start;
   background-color: #f8f8f8;

   @media only screen and (max-width: 991px) {
      padding: 40px 30px;
   }
`;

export const Subtitle = styled.section`
   width: 100%;
   max-width: 900px;
   padding-bottom: 40px;

   p {
      text-align: center;
      font-size: 20px;
      line-height: 1.5;
   }
`;

export const RulesSection = styled.section`
   width: 100%;
   max-width: 1200px;
   display: flex;
   flex-direction: column;
   align-items: flex-start;
   justify-content: flex-start;
   align-self: flex-start;
`;

export const RuleText = styled.div`
   display: flex;
   gap: 15px;
   align-items: center;
   justify-content: flex-start;
   padding-bottom: 30px;

   h2 {
      font-family: var(--font-family-2);
      font-size: 32px;
      color: var(--orange3);
   }

   p {
      font-size: 20px;
   }

   &:last-of-type {
      flex-direction: column;
      align-items: flex-start;

      div.rule {
         display: flex;
         gap: 15px;
         align-items: center;
         justify-content: flex-start;
         padding-bottom: 20px;
      }
   }
`;

export const CardText = styled.div`
   width: calc(100% - 75px);
   max-width: 1200px;
   display: flex;
   flex-direction: column;
   justify-content: flex-start;
   gap: 30px;
   margin-left: 75px;

   div {
      display: flex;
      gap: 15px;
      align-items: flex-start;
      justify-content: flex-start;

      h3 {
         font-family: var(--font-family-2);
         font-size: 20px;
         color: var(--orange3);
         white-space: nowrap;
      }

      p {
         font-size: 20px;
      }
   }
`;

export const RulesButton = styled.button`
   font-family: var(--font-family-2);
   font-size: 12px;
   color: white;
   background-color: var(--orange3);
   border: none;
   border-radius: 4px;
   padding: 10px 15px;
   cursor: pointer;
`;
