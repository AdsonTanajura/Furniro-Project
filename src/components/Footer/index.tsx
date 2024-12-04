import { FooterContainer, FooterContent, RightsReverved } from './styles';
import SocialData from './components/SocialData';
import LinkNavBar from './components/LinkNavBar';
import HelpNavBar from './components/HelpNavBar';
import NewsletterInput from './components/NewsletterInput';

function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <SocialData />
        <LinkNavBar />
        <HelpNavBar />
        <NewsletterInput />
      </FooterContent>
      <RightsReverved>2023 furino. All rights reverved</RightsReverved>
    </FooterContainer>
  );
}

export default Footer;
