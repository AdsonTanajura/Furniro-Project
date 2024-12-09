import { FormikProps } from 'formik';

type FormValues = {
  firstName: string;
  lastName: string;
  companyName: string;
  zipCode: string;
  country: string;
  streetAddress: string;
  townCity: string;
  province: string;
  addOnAddress: string;
  email: string;
  additionalInfo: string;
};

export type FormProps = {
  formik: FormikProps<FormValues>;
};

export type FormInputProps = {
  isErro?: boolean;
};

export type FormLabelProps = {
  isErro?: boolean;
};
