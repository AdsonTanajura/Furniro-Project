import { FormikProps } from 'formik';

type FormValues = {
  firstName: string;
  lastName: string;
  companyName: string;
  zipCode: string;
  state: string;
  streetAddress: string;
  townCity: string;
  neighborhood: string;
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
