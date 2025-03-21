import { IoShareSocialSharp } from 'react-icons/io5';
import { IoIosHeartEmpty } from 'react-icons/io';
import { MdCompareArrows } from 'react-icons/md';
import { Container, StyledButton } from './styles';

const SocialMedia = () => {
  return (
    <Container>
      <StyledButton>
        <IoShareSocialSharp />
        Share
      </StyledButton>
      <StyledButton>
        <MdCompareArrows />
        Compare
      </StyledButton>
      <StyledButton>
        <IoIosHeartEmpty />
        Like
      </StyledButton>
    </Container>
  );
};

export default SocialMedia;
