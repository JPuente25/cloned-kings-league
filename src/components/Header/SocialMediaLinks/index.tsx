import instagramLogo from '../../../assets/social-media/instagram.svg';
import tiktokLogo from '../../../assets/social-media/tiktok.svg';
import twitterLogo from '../../../assets/social-media/twitter.svg';
import youtubeLogo from '../../../assets/social-media/youtube.svg';
import twitchLogo from '../../../assets/social-media/twitch.svg';
import { SocialMedia } from './index.styled';

interface Props {
   modal: boolean;
   handleClick: (path: string) => void;
}

const SocialMediaLinks = ({ modal, handleClick }: Props) => {
   return (
      <SocialMedia
         modal={modal}
         className="social-media">
         <img
            src={twitchLogo}
            alt="twitch logo"
            className="social-logo"
            onClick={() => handleClick('https://www.twitch.tv/kingsleague')}
         />
         <img
            src={twitterLogo}
            alt="twitter logo"
            onClick={() => handleClick('https://twitter.com/kingsleague')}
         />
         <img
            src={instagramLogo}
            alt="instagram logo"
            onClick={() => handleClick('https://www.instagram.com/kingsleague/')}
         />
         <img
            src={tiktokLogo}
            alt="tiktok logo"
            onClick={() => handleClick('https://www.tiktok.com/@kingsleague')}
         />
         <img
            src={youtubeLogo}
            alt="youtube logo"
            onClick={() => handleClick('https://www.youtube.com/@KingsLeagueOfficial')}
         />
      </SocialMedia>
   );
};

export { SocialMediaLinks };
