import { css, styled } from 'styled-components';
import { FormInputProps, FormLabelProps } from './types';

export const FormList = styled.form`
  display: flex;
  flex-direction: column;
  gap: 36px;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 36px;
  padding: 35px 78px;
`;
export const FormFirtLastName = styled.div`
  display: flex;
  flex-direction: row;
  gap: 31px;
`;

export const FormTitle = styled.h2`
  font-size: 36px;
  font-weight: 600;
`;

export const FormLabel = styled.label<FormLabelProps>`
  margin-bottom: 34px;
  font-size: 16px;
  font-weight: 500;

  ${(props) =>
    props.isErro
      ? css`
          color: red;
        `
      : css`
          color: #000000;
        `}
`;

export const FormInput = styled.input<FormInputProps>`
  color: #9f9f9f;
  border: 2px solid #9f9f9f;
  border-radius: 10px;
  min-width: 454px;
  min-height: 75px;
  padding: 26px 28px;

  ${(props) =>
    props.isErro
      ? css`
          border: 2px solid red;
        `
      : css`
          border: 2px solid #9f9f9f;
        `}
`;

export const FormInputFristLastName = styled.input<FormInputProps>`
  color: #9f9f9f;
  border: 2px solid #9f9f9f;
  border-radius: 10px;
  min-width: 212px;
  min-height: 75px;
  padding: 26px 28px;

  ${(props) =>
    props.isErro
      ? css`
          border: 2px solid red;
        `
      : css`
          border: 2px solid #9f9f9f;
        `}
`;

export const FormInputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FormInputError = styled.div`
  color: red;
  font-size: 16px;
  font-weight: 300;
`;
