import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Baner from '../../components/Baner';
import { FaLocationDot } from 'react-icons/fa6';
import { FaPhoneAlt } from 'react-icons/fa';
import { FaClock } from 'react-icons/fa6';
import {
  FormContainer,
  FormInput,
  FormInputContainer,
  FormInputError,
  FormLabel,
  MainDiv,
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
    onSubmit: (values) => {
      console.log('Form data:', values);
      // Aqui você pode enviar os dados para uma API ou fazer outra ação
    },
  });

  return (
    <div>
      <Baner name="Contact" />
      <div>
        <h1>Get In Touch With Us</h1>
        <p>
          For More Information About Our Product & Services. Please Feel Free To
          Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not
          Hesitate!
        </p>
      </div>
      <MainDiv>
        <div>
          <div>
            <FaLocationDot />
            <h2>Address</h2>
            <p>236 5th SE Avenue, New York NY10000, United States</p>
          </div>
          <div>
            <FaPhoneAlt />
            <h2>Phone</h2>
            <p>Mobile: +(84) 546-6789</p>
            <p>Hotline: +(84) 456-6789</p>
          </div>
          <div>
            <FaClock />
            <h2>Working Time</h2>
            <p>Monday-Friday: 9:00 - 22:00</p>
            <p>Saturday-Sunday: 9:00 - 21:00</p>
          </div>
        </div>

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
            />
            {formik.touched.message && formik.errors.message && (
              <FormInputError>{formik.errors.message}</FormInputError>
            )}
          </FormInputContainer>

          <button type="submit">Submit</button>
        </FormContainer>
      </MainDiv>
    </div>
  );
};

export default Contact;
