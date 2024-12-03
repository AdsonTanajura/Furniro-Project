import styled from 'styled-components';

export const CarouselContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
  width: 80%;
  margin: auto;
`;

export const ImageContainer = styled.div<{ offset: number }>`
  display: flex;
  transition: transform 0.5s ease-in-out;
  transform: translateX(${(props) => -props.offset * 20}%);
`;

export const ImageWrapper = styled.div<{ size: number; zIndex: number }>`
  flex: 0 0 auto;
  width: ${(props) => props.size}%;
  margin: 0 10px;
  transition: all 0.5s ease-in-out;
  position: relative;
  z-index: ${(props) => props.zIndex};
  img {
    width: 100%;
    height: auto;
    border-radius: 10px;
  }
`;

export const Button = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  cursor: pointer;
  &:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }
`;
