import { css, styled } from 'styled-components';
import {
  FormInputProps,
  FormLabelProps,
} from '../Checkout/components/Form/types';

export const MainDiv = styled.div`
  display: flex;
  flex-direction: row;
`;

export const FormInputContainer = styled.div`
  display: flex;
  flex-direction: column;
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
  border: 2px solid #9f9f9f;
  border-radius: 10px;
  min-width: 454px;
  min-height: 75px;

  ${(props) =>
    props.isErro
      ? css`
          border: 2px solid red;
        `
      : css`
          border: 2px solid #9f9f9f;
        `}
`;

export const FormInputError = styled.div`
  color: red;
  font-size: 16px;
  font-weight: 300;
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 531px;
  height: 741px;
  gap: 8px;
`;
