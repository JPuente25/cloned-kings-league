import { v4 as uuidv4 } from 'uuid';
import { Header, SliderContainer, StyledSection } from './index.styled';

const SkeletonTeamMembersCarousel = () => {
   const slidesToShow = window.innerWidth >= 991 ? 5 : window.innerWidth >= 640 ? 3 : 1;

   return (
      <StyledSection>
         <Header>
            <div className="team-info">
               <div className="image"></div>
               <div className="title"></div>
            </div>

            <div className="social-media">
               <span></span>
               <span></span>
               <span></span>
               <span></span>
            </div>
         </Header>

         <SliderContainer>
            {new Array(slidesToShow).fill(1).map((person) => (
                  <div
                     className="person"
                     key={uuidv4()}></div>
            ))}
         </SliderContainer>
      </StyledSection>
   );
};

export { SkeletonTeamMembersCarousel };

