import { useFormik } from 'formik';
import * as Yup from 'yup';
import Baner from '../../components/Baner';
import {
  ContactBlock,
  ContactContainer,
  ContactDescription,
  ContactTitle,
  ContactTitleContainer,
  Description,
  FormContainer,
  FormInput,
  FormInputContainer,
  FormInputError,
  FormLabel,
  IconClock,
  IconContainer,
  IconLocantion,
  IconPhone,
  MainDiv,
  SubmitButton,
  Title,
  TitleContainer,
} from './styles';

const Contact = () => {
  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, 'Name must be at least 3 characters')
      .required('Name is required'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    subject: Yup.string()
      .min(5, 'Subject must be at least 5 characters')
      .required('Subject is required'),
    message: Yup.string()
      .min(10, 'Message must be at least 10 characters')
      .required('Message is required'),
  });

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      console.log('Form data:', values);
      resetForm();
    },
  });

  return (
    <div>
      <Baner name="Contact" />
      <TitleContainer>
        <Title>Get In Touch With Us</Title>
        <Description>
          For More Information About Our Product & Services. Please Feel Free To
          Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not
          Hesitate!
        </Description>
      </TitleContainer>
      <MainDiv>
        <ContactContainer>
          <ContactBlock>
            <IconContainer>
              <IconLocantion />
            </IconContainer>
            <ContactTitleContainer>
              <ContactTitle>Address</ContactTitle>
              <ContactDescription>
                236 5th SE Avenue, New York NY10000, United States
              </ContactDescription>
            </ContactTitleContainer>
          </ContactBlock>
          <ContactBlock>
            <IconContainer>
              <IconPhone />
            </IconContainer>
            <ContactTitleContainer>
              <ContactTitle>Phone</ContactTitle>
              <ContactDescription>Mobile: +(84) 546-6789</ContactDescription>
              <ContactDescription>Hotline: +(84) 456-6789</ContactDescription>
            </ContactTitleContainer>
          </ContactBlock>
          <ContactBlock>
            <IconContainer>
              <IconClock />
            </IconContainer>
            <ContactTitleContainer>
              <ContactTitle>Working Time</ContactTitle>
              <ContactDescription>
                Monday-Friday: 9:00 - 22:00
              </ContactDescription>
              <ContactDescription>
                Saturday-Sunday: 9:00 - 21:00
              </ContactDescription>
            </ContactTitleContainer>
          </ContactBlock>
        </ContactContainer>

        <FormContainer onSubmit={formik.handleSubmit}>
          <FormInputContainer>
            <FormLabel htmlFor="name">Your Name</FormLabel>
            <FormInput
              type="text"
              id="name"
              name="name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
              isErro={!!formik.errors.name && formik.touched.name}
              placeholder="Abc"
            />
            {formik.touched.name && formik.errors.name && (
              <FormInputError>{formik.errors.name}</FormInputError>
            )}
          </FormInputContainer>
          <FormInputContainer>
            <FormLabel htmlFor="email">Email Address</FormLabel>
            <FormInput
              type="text"
              id="email"
              name="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              isErro={!!formik.errors.email && formik.touched.email}
              placeholder="Abc@def.com"
            />
            {formik.touched.email && formik.errors.email && (
              <FormInputError>{formik.errors.email}</FormInputError>
            )}
          </FormInputContainer>
          <FormInputContainer>
            <FormLabel htmlFor="subject">Subject</FormLabel>
            <FormInput
              type="text"
              id="subject"
              name="subject"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.subject}
              isErro={!!formik.errors.subject && formik.touched.subject}
              placeholder="This is an optional"
            />
            {formik.touched.subject && formik.errors.subject && (
              <FormInputError>{formik.errors.subject}</FormInputError>
            )}
          </FormInputContainer>
          <FormInputContainer>
            <FormLabel htmlFor="message">Message</FormLabel>
            <FormInput
              as="textarea"
              id="message"
              name="message"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.message}
              isErro={!!formik.errors.message && formik.touched.message}
              placeholder="Hi! i’d like to ask about"
            />
            {formik.touched.message && formik.errors.message && (
              <FormInputError>{formik.errors.message}</FormInputError>
            )}
          </FormInputContainer>

          <SubmitButton type="submit">Submit</SubmitButton>
        </FormContainer>
      </MainDiv>
    </div>
  );
};

export default Contact;
