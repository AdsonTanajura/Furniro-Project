import { styled } from 'styled-components';

export const NewsletterInputContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`;

export const NewsletterInputTitle = styled.h2`
  color: #9f9f9f;
  font-size: 16px;
  font-weight: 500;
  min-height: 55px;
`;

export const NewsletterFormContainer = styled.form`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  gap: 11px;
`;

export const NewsletterInputArea = styled.input`
  color: #9f9f9f;
  border: none;
  font-weight: 400;
  border: 2px solid transparent;
  border-bottom: 2px solid #000000;
  font-size: 14px;
  min-width: 200px;
  background-color: transparent;
  transition: border 0.2s;

  &:hover {
    border: 2px solid #000000;
    border-radius: 4px;
  }
`;

export const NewsLetterSubscribeButton = styled.button`
  color: #000000;
  background-color: transparent;
  border: 2px solid transparent;
  border-bottom: 2px solid #000000;
  font-size: 14px;
  transition: border 0.2s;

  &:hover {
    border: 2px solid #000000;
    border-radius: 4px;
  }
`;
