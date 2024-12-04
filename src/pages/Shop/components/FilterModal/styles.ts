import { styled } from 'styled-components';

export const FilterModalContainer = styled.div`
  position: absolute;
  justify-content: space-between;
  z-index: 10;
  display: flex;
  flex-direction: row;
  background-color: #f9f1e7;
  padding: 8px;
  border-radius: 0px 0px 8px 8px;
  min-width: 300px;
  min-height: 300px;
  margin-left: 30px;
`;

export const LeftSideModal = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
`;

export const RightSideModalButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: transparent;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  padding: 4px;
  font-size: 29px;

  &:hover {
    background-color: #000;
    color: #fff;
    border: 1px solid #fff;
  }
`;
