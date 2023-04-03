import styled from 'styled-components';

export const StyledSection = styled.section`
   width: 100%;
   background-color: var(--gray-skeleton-1);
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: start;
   padding-top: 90px;
`;

export const Header = styled.div`
   width: 100%;
   height: 137px;
   flex-shrink: 0;
   display: flex;
   align-items: center;
   justify-content: space-between;
   padding: 0 40px;
   z-index: 1;

   @media only screen and (max-width: 640px) {
      flex-direction: column;
      justify-content: center;
      gap: 15px;
   }

   div.team-info {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 40px;

      div.image {
         width: 100px;
         height: 100px;
         background-color: var(--gray-skeleton-2);
         border-radius: 50%;
      }

      div.title {
         height: 44px;
         width: 200px;
         background-color: var(--gray-skeleton-2);
         border-radius: 4px;
      }
   }

   div.social-media {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 30px;

      span {
         width: 30px;
         height: 30px;
         border-radius: 50%;
         background-color: var(--gray-skeleton-2);
      }
   }
`;

export const SliderContainer = styled.div`
   width: 100%;
   display: flex;
   flex-direction: row;
   align-items: center;
   justify-content: center;
   gap: 30px;
   padding: 90px 30px 20px 30px;
   position: relative;

      div.person {
         width: 80%;
         aspect-ratio: 1 / 1;
         border-radius: 50%;
         background-color: var(--gray-skeleton-2);
         
         @media only screen and (min-width: 480px) {
            width: 70%;
            margin-bottom: 50px;
         }
         
         @media only screen and (min-width: 640px) {
            &:nth-child(2) {
               width: 150%;
            }
         }

         @media only screen and (min-width: 991px) {
            &:nth-child(3) {
               width: 150%;
            }

            &:nth-child(2) {
               width: 80%;
            }
         }

      }
`;
