import { Link } from 'react-router-dom';
import KL_LOGO_LANDSCAPE from '../../assets/KL_landscape.svg';
import instagramLogo from '../../assets/social-media/instagram.svg';
import tiktokLogo from '../../assets/social-media/tiktok.svg';
import twitchLogo from '../../assets/social-media/twitch.svg';
import twitterLogo from '../../assets/social-media/twitter.svg';
import youtubeLogo from '../../assets/social-media/youtube.svg';
import { Container, LinkSection, LogoSection } from './index.styled';

const Footer = () => {
   const handleNavigateNewTab = (path: string) => {
      window.open(path, '_blank');
   };

   return (
      <Container>
         <p className="warning">
            This is not the real Kings League page, it is just a practical project. Real page is{' '}
            <a
               href="https://kingsleague.pro/"
               target="_blank"
               rel="noreferrer">
               https://kingsleague.pro/
            </a>
         </p>
         <LogoSection>
            <img
               src={KL_LOGO_LANDSCAPE}
               alt="logo Kings League"
               className="kl-logo"
            />

            <div className="social">
               <img
                  src={twitchLogo}
                  alt="twitch logo"
                  className="social-logo"
                  onClick={() => handleNavigateNewTab('https://www.twitch.tv/kingsleague')}
               />
               <img
                  src={twitterLogo}
                  alt="twitter logo"
                  className="social-logo"
                  onClick={() => handleNavigateNewTab('https://twitter.com/kingsleague')}
               />
               <img
                  src={tiktokLogo}
                  alt="tiktok logo"
                  className="social-logo"
                  onClick={() => handleNavigateNewTab('https://www.tiktok.com/@kingsleague')}
               />
               <img
                  src={instagramLogo}
                  alt="instagram logo"
                  className="social-logo"
                  onClick={() => handleNavigateNewTab('https://www.instagram.com/kingsleague/')}
               />
               <img
                  src={youtubeLogo}
                  alt="youtube logo"
                  className="social-logo"
                  onClick={() =>
                     handleNavigateNewTab('https://www.youtube.com/@KingsLeagueOfficial')
                  }
               />
            </div>
         </LogoSection>

         <LinkSection>
            <ul className="pages-link">
               <li>
                  <Link to="/draft">Draft</Link>
               </li>
               <li>
                  <Link to="/reglamento">Reglamento</Link>
               </li>
               <li>
                  <Link to="/contacto">Contacto</Link>
               </li>
            </ul>

            <ul className="legal-link">
               <li>
                  <Link to="/politica-de-privacidad">Política de Privacidad</Link>
               </li>
               <li>
                  <Link to="/aviso-legal">Aviso legal</Link>
               </li>
               <li>
                  <Link to="/politica-de-cookies">Política de Cookies</Link>
               </li>
            </ul>
         </LinkSection>
      </Container>
   );
};

export { Footer };
