import { css, styled } from 'styled-components';
import { TitlePorps } from './types';

export const SectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 65px 100px;
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 130px;
  margin-bottom: 36px;
`;

export const Title = styled.button<TitlePorps>`
  background-color: transparent;
  border: none;
  font-size: 24px;
  border-bottom: 2px solid transparent;
  transition: border-bottom 0.2s;

  ${(props) =>
    props.isOpen
      ? css`
          color: #000000;
          font-weight: 500;
        `
      : css`
          color: #9f9f9f;
          font-weight: 300;
        `}

  &:hover {
    border-bottom: 2px solid #000000;
  }
`;

export const DetailsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 30px;
`;

export const DescriptionTabs = styled.p`
  color: #9f9f9f;
  font-size: 16px;
  font-weight: 400;
  max-width: 1026px;
`;

export const ImagemContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 28px;
`;
