import {
  NewsletterFormContainer,
  NewsletterInputArea,
  NewsletterInputContainer,
  NewsletterInputTitle,
  NewsLetterSubscribeButton,
} from './styles';
import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';

const NewsletterInput = () => {
  // Esquema de validação com Yup
  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Digite um email válido')
      .required('O email é obrigatório'),
  });

  const handleSubmit = (values: { email: string }, { resetForm }: any) => {
    console.log('Email cadastrado:', values.email);
    toast.success('Successfully', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });
    resetForm(); // Reseta o formulário após o envio
  };

  return (
    <NewsletterInputContainer>
      <NewsletterInputTitle>Links</NewsletterInputTitle>
      <Formik
        initialValues={{ email: '' }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ handleSubmit }) => (
          <>
            <NewsletterFormContainer onSubmit={handleSubmit}>
              <Field
                as={NewsletterInputArea}
                name="email"
                type="text"
                placeholder="Enter Your Email Address"
              />
              <NewsLetterSubscribeButton type="submit">
                SUBSCRIBE
              </NewsLetterSubscribeButton>
            </NewsletterFormContainer>
            <ErrorMessage
              name="email"
              component="div"
              render={(msg) => (
                <span style={{ color: 'red', marginTop: '5px' }}>{msg}</span>
              )}
            />
          </>
        )}
      </Formik>
    </NewsletterInputContainer>
  );
};

export default NewsletterInput;
