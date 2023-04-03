import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import KL_logo from '../../assets/logo-oficial.svg';
import twitchLogo from '../../assets/social-media/twitch.svg';
import { getTeamsData } from '../../features/KingsLeague/homeSlice';
import { ModalIcon } from '../ModalIcon';
import { HeaderLinks } from './HeaderLinks';
import {
   ButtonsContainer,
   Container,
   MainSection,
   Modal,
   SocialMarketingSection,
   StyledButton,
   TeamSection,
} from './index.styled';
import { SocialMediaLinks } from './SocialMediaLinks';

interface HeaderState {
   lastScrollY: number;
   hideTeamSection: boolean;
   activeModal: boolean;
}

const Header = () => {
   const navigate = useNavigate();
   const [lastScrollY, setLastScrollY] = useState<HeaderState['lastScrollY']>(0);
   const [hideTeamSection, setHideTeamSection] = useState<HeaderState['hideTeamSection']>(false);
   const [activeModal, setActiveModal] = useState<HeaderState['activeModal']>(false);

   const dispatch = useAppDispatch();
   const { teamsData, loadingTeamsData, errorTeamsData } = useAppSelector((state) => state.home);

   const controlNavBar = () => {
      if (window.scrollY === 0) {
         setHideTeamSection(false);
      } else if (window.scrollY >= 50 && lastScrollY < window.scrollY) {
         setHideTeamSection(true);
      } else if (window.scrollY < 50 && (lastScrollY > window.scrollY || lastScrollY === 0)) {
         setHideTeamSection(false);
      }
      setLastScrollY(window.scrollY);
   };

   const handleClickModal = () => {
      setActiveModal((prev) => !prev);
   };

   const handleNavigate = (path: string) => {
      setActiveModal(false);
      navigate(path);
   };

   const handleNavigateOtherTab = (path: string) => {
      setActiveModal(false);
      window.open(path, '_blank');
   };

   useEffect(() => {
      dispatch(getTeamsData());
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);

   useEffect(() => {
      if (window.innerWidth > 768) {
         window.addEventListener('scroll', controlNavBar);
         return () => {
            window.removeEventListener('scroll', controlNavBar);
         };
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [lastScrollY]);

   return (
      <Container fixSection={hideTeamSection.toString()}>

         <TeamSection fixSection={hideTeamSection.toString()}>
            {!loadingTeamsData &&
               teamsData.map((team) => (
                  <img
                     src={team.logo}
                     alt={team.name}
                     key={uuidv4()}
                     onClick={() => handleNavigate(`/equipos/${team.key}`)}
                  />
               ))}
         </TeamSection>

         <MainSection fixSection={hideTeamSection.toString()}>
            <div className="links-container">
               <img
                  src={KL_logo}
                  alt="logo oficial"
                  className="logo-oficial"
                  onClick={() => handleNavigate('/')}
               />
               <HeaderLinks
                  fixed={hideTeamSection}
                  modal={false}
                  handleClick={handleNavigate}
                  handleNewTab={handleNavigateOtherTab}
               />
            </div>

            <SocialMarketingSection>
               <ButtonsContainer>
                  <StyledButton
                     className="entradas"
                     onClick={() => handleNavigate('/entradas')}>
                     Entradas
                  </StyledButton>

                  <StyledButton
                     className="kingsleaguetv"
                     onClick={() => handleNavigateOtherTab('https://www.twitch.tv/kingsleague')}>
                     <img
                        src={twitchLogo}
                        alt="twitch logo"
                     />
                     <h4>
                        KINGSLEAGUE <span>TV</span>
                     </h4>
                  </StyledButton>
               </ButtonsContainer>

               <SocialMediaLinks modal={false} handleClick={handleNavigateOtherTab}/>

               <ModalIcon
                  active={activeModal}
                  setActive={handleClickModal}
               />
            </SocialMarketingSection>
         </MainSection>

         <Modal
            fixSection={hideTeamSection.toString()}
            active={activeModal.toString()}>
            <HeaderLinks modal={true} handleClick={handleNavigate} handleNewTab={handleNavigateOtherTab}/>
            <SocialMediaLinks modal={true} handleClick={handleNavigateOtherTab}/>
         </Modal>

      </Container>
   );
};

export { Header };
