import Baner from '../../components/Baner';
import Form from './components/Form';
import {
  CheckoutContainer,
  CheckoutItem,
  CheckoutItemContainer,
  Container,
  PlaceOrderButton,
  PorductList,
  PorductListContainer,
  PorductListHeader,
  PorductListTitle,
} from './styles';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Checkout = () => {
  const validationSchema = Yup.object({
    firstName: Yup.string().required('First Name is required'),
    lastName: Yup.string().required('Last Name is required'),
    companyName: Yup.string(),
    zipCode: Yup.string().required('ZIP code is required'),
    country: Yup.string().required('Country / Region is required'),
    streetAddress: Yup.string().required('Street address is required'),
    townCity: Yup.string().required('Town / City is required'),
    province: Yup.string().required('Province is required'),
    addOnAddress: Yup.string(),
    email: Yup.string()
      .email('Invalid email address')
      .required('Email address is required'),
    additionalInfo: Yup.string(),
  });

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      companyName: '',
      zipCode: '',
      country: '',
      streetAddress: '',
      townCity: '',
      province: '',
      addOnAddress: '',
      email: '',
      additionalInfo: '',
    },
    validationSchema,
    onSubmit: (values) => {
      console.log('Form Submitted', values);
    },
  });
  return (
    <>
      <Baner name="Checkout" />
      <Container>
        <Form formik={formik} />
        <PorductListContainer>
          <PorductList>
            <PorductListHeader>
              <h2>Product</h2>
              <h2>Subtotal</h2>
            </PorductListHeader>
            <PorductListTitle>
              <h3>
                Asgaard sofa <span>X 1</span>
              </h3>
              <h3>Rs. 250,000.00</h3>
            </PorductListTitle>
            <PorductListTitle>
              <h2>Subtotal</h2>
              <h2>Rs. 250,000.00</h2>
            </PorductListTitle>
            <PorductListTitle>
              <h2>Total</h2>
              <h2>Rs. Rs. 250,000.00</h2>
            </PorductListTitle>
          </PorductList>

          <CheckoutContainer>
            <CheckoutItemContainer>
              <CheckoutItem>
                <input type="checkbox" /> <h3>Direct Bank Transfer</h3>
              </CheckoutItem>
              <p>
                Make your payment directly into our bank account. Please use
                your Order ID as the payment reference. Your order will not be
                shipped until the funds have cleared in our account.
              </p>
            </CheckoutItemContainer>
            <CheckoutItem>
              <input type="checkbox" /> <h3>Direct Bank Transfer</h3>
            </CheckoutItem>
            <CheckoutItem>
              <input type="checkbox" /> <h3>Cash On Delivery</h3>
            </CheckoutItem>
            <p>
              Your personal data will be used to support your experience
              throughout this website, to manage access to your account, and for
              other purposes described in our privacy policy.
            </p>
          </CheckoutContainer>

          <PlaceOrderButton
            onClick={(e) => {
              e.preventDefault(); // Previne comportamento padrão de clique
              formik.handleSubmit(); // Chama o handler do Formik
            }}
          >
            Place order
          </PlaceOrderButton>
        </PorductListContainer>
      </Container>
    </>
  );
};

export default Checkout;
