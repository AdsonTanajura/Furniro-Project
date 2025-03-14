import React from 'react';
import PagesButtonsProps from './Interfaces/PagesButtonsProps';
import { NextPageButton, PageButton, PageButtonContainer } from './styles';

const PagesButtons = ({
  dataObject,
  currentPage,
  setCurrentPage,
  firstButton,
  secondButton,
  setFirstButton,
  setSecondButton,
  setThirdButton,
  thirdButton,
}: PagesButtonsProps) => {
  const handleClickNexPage = (e: React.MouseEvent<HTMLButtonElement>) => {
    const isBack = e.currentTarget.textContent === 'Volta';
    if (isBack) {
      if (currentPage <= 1) return;
      setCurrentPage((currentValue) => currentValue - 1);

      if ((currentPage - 1) % 3 === 0) {
        setFirstButton((currentValue) => currentValue - 3);
        setSecondButton((currentValue) => currentValue - 3);
        setThirdButton((currentValue) => currentValue - 3);
      }
      return;
    }

    if (currentPage >= dataObject!.last) return;
    setCurrentPage((currentValue) => currentValue + 1);

    if (currentPage % 3 === 0) {
      setFirstButton((currentValue) => currentValue + 3);
      setSecondButton((currentValue) => currentValue + 3);
      setThirdButton((currentValue) => {
        return currentValue + 3;
      });
    }
  };

  const handleClickButtonPage = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (e.currentTarget.textContent) {
      setCurrentPage(Number(e.currentTarget.textContent));
      return;
    }
  };

  return (
    <PageButtonContainer>
      {!dataObject ? null : (
        <>
          {firstButton === dataObject.first ? null : (
            <NextPageButton onClick={handleClickNexPage}>Volta</NextPageButton>
          )}
          {firstButton > 0 && firstButton <= dataObject.last ? (
            <PageButton
              isCurrenPage={
                dataObject.next
                  ? dataObject.next - 1 === firstButton
                  : dataObject.last === firstButton
              }
              onClick={handleClickButtonPage}
            >
              {firstButton}
            </PageButton>
          ) : null}

          {secondButton > 0 && secondButton <= dataObject.last ? (
            <PageButton
              isCurrenPage={
                dataObject.next
                  ? dataObject.next - 1 === secondButton
                  : dataObject.last === secondButton
              }
              onClick={handleClickButtonPage}
            >
              {secondButton}
            </PageButton>
          ) : null}

          {thirdButton > 0 && thirdButton <= dataObject.last ? (
            <PageButton
              isCurrenPage={
                dataObject.next
                  ? dataObject.next - 1 === thirdButton
                  : dataObject.last === thirdButton
              }
              onClick={handleClickButtonPage}
            >
              {thirdButton}
            </PageButton>
          ) : null}
          <NextPageButton onClick={handleClickNexPage}>Next</NextPageButton>
        </>
      )}
    </PageButtonContainer>
  );
};

export default PagesButtons;
