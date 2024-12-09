import { styled } from 'styled-components';

export const SocialDataContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 48px;
`;

export const BusinessName = styled.h2`
  color: #000000;
  font-weight: bold;
  font-size: 24px;
  min-height: 55px;
`;

export const BusinessAddress = styled.address`
  color: #9f9f9f;
  margin: 0;
  font-size: 16px;
`;

export const SocialMideaLinks = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  list-style: none;
  margin-top: 55px;
  gap: 16px;
`;

export const SocialMideaStyleLine = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 34px;
  height: 34px;
  border-radius: 50%; /* Torna a div redonda */
  background-color: #fff;
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.2);
  transition: border 0.2s;
  color: #000000;

  &:hover {
    border: 2px solid #000000;
  }
`;
