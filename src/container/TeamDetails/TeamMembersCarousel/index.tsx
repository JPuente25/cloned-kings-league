import Slider from 'react-slick';
import {v4 as uuidv4} from 'uuid';
import { SocialMediaLinks } from '../../../components/Header/SocialMediaLinks';
import { PlayerTeamView } from '../../../components/PlayerTeamView';
import { TeamsData } from '../../../types';
import { Header, SliderContainer, StyledSection } from './index.styled';

interface Props {
   data: TeamsData;
}

const TeamMembersCarousel = ({data}: Props) => {
   const slidesToShow = window.innerWidth >= 991 ? 5 : window.innerWidth >= 640 ? 3 : 1;

   const settings = {
      className: 'center',
      centerMode: true,
      infinite: true,
      slidesToShow: slidesToShow,
      speed: 400,
   };

   const members = [{...data.president, role: 'Presidente'}, {...data.trainer, role: 'Entrenador'}, ...data.players];

   const handleNavigateOtherTab = (path: string) => {
      window.open(path, '_blank');
   };

   return (
      <StyledSection bgImg={data.background}>
         <Header>
            <div className="team-info">
               <img
                  src={data.logo_svg}
                  alt={data.name}
               />
               <h1>{data.name}</h1>
            </div>
            <SocialMediaLinks
               modal={false}
               handleClick={handleNavigateOtherTab}
            />
         </Header>

         <SliderContainer>
            <Slider {...settings}>
               {members.map((person) => (
                  <PlayerTeamView data={person} key={uuidv4()}/>
               ))}
            </Slider>
         </SliderContainer>
      </StyledSection>
   );
};

export { TeamMembersCarousel };

