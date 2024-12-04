import {
  NewsletterFormContainer,
  NewsletterInputArea,
  NewsletterInputContainer,
  NewsletterInputTitle,
  NewsLetterSubscribeButton,
} from './styles';

const NewsletterInput = () => {
  return (
    <NewsletterInputContainer>
      <NewsletterInputTitle>Links</NewsletterInputTitle>
      <NewsletterFormContainer>
        <NewsletterInputArea
          type="text"
          placeholder="Enter Your Email Address"
        />
        <NewsLetterSubscribeButton type="submit">
          SUBSCRIBE
        </NewsLetterSubscribeButton>
      </NewsletterFormContainer>
    </NewsletterInputContainer>
  );
};

export default NewsletterInput;
