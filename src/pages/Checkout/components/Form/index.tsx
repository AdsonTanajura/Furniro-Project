import axios from 'axios';
import {
  FormContainer,
  FormFirtLastName,
  FormInput,
  FormInputContainer,
  FormInputError,
  FormInputFristLastName,
  FormLabel,
  FormTitle,
  FormList,
} from './styles';
import { FormProps } from './types';
import { useState } from 'react';
import LoadingSpinner from '../../../../components/LoadingSpinner';

const Form = ({ formik }: FormProps) => {
  const [loadding, setLoaddding] = useState(true);

  const handleZipCode = async (zipCode: string) => {
    try {
      if (zipCode.length < 8) {
        return;
      }
      const result = await axios.get(
        `https://viacep.com.br/ws/${zipCode}/json/`
      );
      const data = result.data;
      console.log('🚀 ~ handleZipCode ~ data:', data);
      formik.setFieldValue('streetAddress', data.logradouro || '');
      formik.setFieldValue('townCity', data.localidade || '');
      formik.setFieldValue('state', data.estado || '');
      formik.setFieldValue('neighborhood', data.bairro || '');
    } catch (error) {
    } finally {
      setLoaddding(false);
    }
  };
  return (
    <FormContainer>
      <FormTitle>Billing details</FormTitle>
      <FormList>
        {loadding ? (
          <LoadingSpinner />
        ) : (
          <>
            <FormFirtLastName>
              <FormInputContainer>
                <FormLabel htmlFor="firstName">First Name</FormLabel>
                <FormInputFristLastName
                  isErro={!!formik.errors.firstName}
                  type="text"
                  id="firstName"
                  name="firstName"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.firstName}
                />
                {formik.touched.firstName && formik.errors.firstName && (
                  <FormInputError>{formik.errors.firstName}</FormInputError>
                )}
              </FormInputContainer>
              <FormInputContainer>
                <FormLabel htmlFor="lastName">Last Name</FormLabel>
                <FormInputFristLastName
                  isErro={!!formik.errors.lastName}
                  type="text"
                  id="lastName"
                  name="lastName"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.lastName}
                />
                {formik.touched.lastName && formik.errors.lastName && (
                  <FormInputError>{formik.errors.lastName}</FormInputError>
                )}
              </FormInputContainer>
            </FormFirtLastName>
            <FormInputContainer>
              <FormLabel htmlFor="companyName">
                Company Name (Optional)
              </FormLabel>
              <FormInput
                isErro={!!formik.errors.companyName}
                type="text"
                id="companyName"
                name="companyName"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.companyName}
              />
            </FormInputContainer>
            <FormInputContainer>
              <FormLabel htmlFor="zipCode">ZIP code</FormLabel>
              <FormInput
                isErro={!!formik.errors.zipCode}
                type="text"
                id="zipCode"
                name="zipCode"
                onChange={(event) => {
                  handleZipCode(event.target.value);
                  formik.handleChange(event);
                }}
                onBlur={formik.handleBlur}
                value={formik.values.zipCode}
              />
              {formik.touched.zipCode && formik.errors.zipCode && (
                <FormInputError>{formik.errors.zipCode}</FormInputError>
              )}
            </FormInputContainer>
            <FormInputContainer>
              <FormLabel htmlFor="state">State / Region</FormLabel>
              <FormInput
                isErro={!!formik.errors.state}
                type="text"
                id="state"
                name="state"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.state}
              />
              {formik.touched.state && formik.errors.state && (
                <FormInputError>{formik.errors.state}</FormInputError>
              )}
            </FormInputContainer>
            <FormInputContainer>
              <FormLabel htmlFor="streetAddress">Street address</FormLabel>
              <FormInput
                isErro={!!formik.errors.streetAddress}
                type="text"
                id="streetAddress"
                name="streetAddress"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.streetAddress}
              />
              {formik.touched.streetAddress && formik.errors.streetAddress && (
                <FormInputError>{formik.errors.streetAddress}</FormInputError>
              )}
            </FormInputContainer>
            <FormInputContainer>
              <FormLabel htmlFor="townCity">Town / City</FormLabel>
              <FormInput
                isErro={!!formik.errors.townCity}
                type="text"
                id="townCity"
                name="townCity"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.townCity}
              />
              {formik.touched.townCity && formik.errors.townCity && (
                <FormInputError>{formik.errors.townCity}</FormInputError>
              )}
            </FormInputContainer>
            <FormInputContainer>
              <FormLabel htmlFor="neighborhood">Neighborhood</FormLabel>
              <FormInput
                isErro={!!formik.errors.neighborhood}
                type="text"
                id="neighborhood"
                name="neighborhood"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.neighborhood}
              />
              {formik.touched.neighborhood && formik.errors.neighborhood && (
                <FormInputError>{formik.errors.neighborhood}</FormInputError>
              )}
            </FormInputContainer>
            <FormInputContainer>
              <FormLabel htmlFor="addOnAddress">Add-on address</FormLabel>
              <FormInput
                type="text"
                id="addOnAddress"
                name="addOnAddress"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.addOnAddress}
              />
            </FormInputContainer>
            <FormInputContainer>
              <FormLabel htmlFor="email">Email address</FormLabel>
              <FormInput
                isErro={!!formik.errors.email}
                type="text"
                id="email"
                name="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              {formik.touched.email && formik.errors.email && (
                <FormInputError>{formik.errors.email}</FormInputError>
              )}
            </FormInputContainer>
            <FormInputContainer>
              <FormInput
                isErro={false}
                type="text"
                id="additionalInfo"
                name="additionalInfo"
                placeholder="Additional information"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.additionalInfo}
              />
            </FormInputContainer>
          </>
        )}
      </FormList>
    </FormContainer>
  );
};

export default Form;
