import styled from 'styled-components';

export const StyledSection = styled.section<{bgImg: string}>`
   width: 100%;
   background: url(${props => props.bgImg}) center center
      no-repeat;
   background-size: cover;
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

      img {
         width: 84px;
      }

      h1 {
         font-size: 54px;
         font-family: var(--font-family-2);
         color: white;
      }
   }

   div.social-media {
      img {
         filter: invert();

         &:hover {
            filter: inherit;
         }
      }

      @media only screen and (max-width: 1280px) {
         display: flex;
      }
   }
`;

export const SliderContainer = styled.div`
   width: 100%;
   display: flex;
   align-items: center;
   justify-content: center;

   div.slick-slider {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;

      button.slick-arrow {
         z-index: 3;
         width: 30px;
         height: 30px;

         &::before {
            font-family: 'slick';
            font-size: 30px;
            opacity: 1;
            color: var(--orange1);
         }

         &.slick-prev {
            left: 25px;
         }

         &.slick-next {
            right: 25px;
         }
      }

      div.slick-list {
         div.slick-track {
            padding: 130px 0 100px 0;
            display: flex;
            justify-content: flex-start;
            align-items: center;

            @media only screen and (max-width: 640px) {
               padding: 80px 0 50px 0;
            }

            div.slick-slide {
               display: flex;
               justify-content: center;
               align-items: center;

               &.slick-current {
                  transition: all linear 0.15s;

                  @media only screen and (min-width: 640px) {
                     transform: scale(1.5);
   
                     img {
                        transform: scale(1.2);
                     }
                  }
               }
            }
         }
      }
   }
`;