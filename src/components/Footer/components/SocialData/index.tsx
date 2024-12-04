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
        <SocialMideaStyleLine>
          <BiLogoFacebook />
        </SocialMideaStyleLine>

        <SocialMideaStyleLine>
          <IoLogoInstagram />
        </SocialMideaStyleLine>

        <SocialMideaStyleLine>
          <FaTwitter />
        </SocialMideaStyleLine>

        <SocialMideaStyleLine>
          <TiSocialLinkedin />
        </SocialMideaStyleLine>
      </SocialMideaLinks>
    </SocialDataContainer>
  );
};

export default SocialData;
