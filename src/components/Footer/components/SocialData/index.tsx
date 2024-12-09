import { IoLogoInstagram } from 'react-icons/io';
import { BiLogoFacebook } from 'react-icons/bi';
import { FaTwitter } from 'react-icons/fa';
import { TiSocialLinkedin } from 'react-icons/ti';
import {
  BusinessAddress,
  BusinessName,
  SocialDataContainer,
  SocialMideaLinks,
  SocialMideaStyleLine,
} from './styles';

const SocialData = () => {
  return (
    <SocialDataContainer>
      <BusinessName>Funiro.</BusinessName>

      <BusinessAddress>
        400 University Drive Suite 200 Coral <br />
        Gables, <br />
        FL 33134 USA
      </BusinessAddress>

      <SocialMideaLinks>
        <SocialMideaStyleLine href="https://www.facebook.com/" target="_blank">
          <BiLogoFacebook />
        </SocialMideaStyleLine>

        <SocialMideaStyleLine href="https://www.instagram.com/" target="_blank">
          <IoLogoInstagram />
        </SocialMideaStyleLine>

        <SocialMideaStyleLine href="https://x.com/?lang=pt-br" target="_blank">
          <FaTwitter />
        </SocialMideaStyleLine>

        <SocialMideaStyleLine
          href="https://www.linkedin.com/in/adson-nunes/"
          target="_blank"
        >
          <TiSocialLinkedin />
        </SocialMideaStyleLine>
      </SocialMideaLinks>
    </SocialDataContainer>
  );
};

export default SocialData;
