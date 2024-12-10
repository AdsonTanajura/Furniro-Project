import { css, styled } from 'styled-components';
import {
  FormInputProps,
  FormLabelProps,
} from '../Checkout/components/Form/types';

import { FaLocationDot } from 'react-icons/fa6';
import { FaPhoneAlt } from 'react-icons/fa';
import { FaClock } from 'react-icons/fa6';

export const IconLocantion = styled(FaLocationDot)`
  width: 22px;
  height: 28px;
`;

export const IconPhone = styled(FaPhoneAlt)`
  width: 22px;
  height: 28px;
`;

export const IconClock = styled(FaClock)`
  width: 22px;
  height: 28px;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-top: 98px;
  gap: 7px;
  margin-bottom: 128px;
`;

export const Title = styled.h1`
  font-size: 36px;
  font-weight: 600;
`;

export const Description = styled.p`
  text-align: center;
  color: #9f9f9f;
  font-size: 16px;
  font-weight: 400;
  max-width: 644px;
`;

export const MainDiv = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  gap: 158px;
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
  padding: 28px 31px;
  color: #9f9f9f;

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

export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: end;
  height: 100%;
`;

export const ContactBlock = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 30px;
  margin-bottom: 42px;
`;

export const ContactTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ContactTitle = styled.h2`
  font-size: 24px;
  font-weight: 500;
`;

export const ContactDescription = styled.p`
  font-size: 16px;
  font-weight: 400;
  max-width: 212px;
`;

export const SubmitButton = styled.button`
  background-color: #b88e2f;
  border-bottom: 2px solid transparent;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 14px 88px;
  max-width: 238px;
  transition: all 0.2s;

  &:hover {
    background-color: #fff;
    color: #b88e2f;
    border-bottom: 4px solid #b88e2f;
  }
`;
