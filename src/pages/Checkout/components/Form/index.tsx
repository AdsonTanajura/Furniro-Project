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

const Form = ({ formik }: FormProps) => {
  const handleZipCode = async (zipCode: string) => {
    if (zipCode.length < 8) {
      return;
    }
    const result = await axios.get(`https://viacep.com.br/ws/${zipCode}/json/`);
    const data = result.data;
    formik.setFieldValue('streetAddress', data.logradouro || '');
    formik.setFieldValue('townCity', data.localidade || '');
  };
  return (
    <FormContainer>
      <FormTitle>Billing details</FormTitle>
      <FormList>
        <FormFirtLastName>
          <FormInputContainer>
            <FormLabel isErro={!!formik.errors.firstName} htmlFor="firstName">
              First Name
            </FormLabel>
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
            <FormLabel isErro={!!formik.errors.lastName} htmlFor="lastName">
              Last Name
            </FormLabel>
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
          <FormLabel isErro={!!formik.errors.companyName} htmlFor="companyName">
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
          <FormLabel isErro={!!formik.errors.zipCode} htmlFor="zipCode">
            ZIP code
          </FormLabel>
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
          <FormLabel isErro={!!formik.errors.country} htmlFor="country">
            Country / Region
          </FormLabel>
          <FormInput
            isErro={!!formik.errors.country}
            type="text"
            id="country"
            name="country"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.country}
          />
          {formik.touched.country && formik.errors.country && (
            <FormInputError>{formik.errors.country}</FormInputError>
          )}
        </FormInputContainer>
        <FormInputContainer>
          <FormLabel
            isErro={!!formik.errors.streetAddress}
            htmlFor="streetAddress"
          >
            Street address
          </FormLabel>
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
          <FormLabel isErro={!!formik.errors.townCity} htmlFor="townCity">
            Town / City
          </FormLabel>
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
          <FormLabel isErro={!!formik.errors.province} htmlFor="province">
            Province
          </FormLabel>
          <FormInput
            isErro={!!formik.errors.province}
            type="text"
            id="province"
            name="province"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.province}
          />
          {formik.touched.province && formik.errors.province && (
            <FormInputError>{formik.errors.province}</FormInputError>
          )}
        </FormInputContainer>
        <FormInputContainer>
          <FormLabel
            isErro={!formik.errors.addOnAddress}
            htmlFor="addOnAddress"
          >
            Add-on address
          </FormLabel>
          <FormInput
            isErro={!formik.errors.addOnAddress}
            type="text"
            id="addOnAddress"
            name="addOnAddress"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.addOnAddress}
          />
        </FormInputContainer>
        <FormInputContainer>
          <FormLabel isErro={!!formik.errors.email} htmlFor="email">
            Email address
          </FormLabel>
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
      </FormList>
    </FormContainer>
  );
};

export default Form;
