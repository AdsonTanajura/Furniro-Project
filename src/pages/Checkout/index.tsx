import { toast } from 'react-toastify';
import Baner from '../../components/Baner';
import { useAppSelector } from '../../hooks';
import formatCurrencyRp from '../../utils/formatCurrency';
import Form from './components/Form';
import {
  CheckoutContainer,
  CheckoutItem,
  CheckoutItemContainer,
  CheckoutItemDesc,
  CheckoutItemName,
  CheckoutItemSubName,
  Container,
  EndDesc,
  PlaceOrderButton,
  PlaceOrderButtonContainer,
  PorductItem,
  PorductItemName,
  PorductItemPrice,
  PorductList,
  PorductListContainer,
  PorductListHeader,
  PorductListTitle,
  PorductQuantity,
  PorductTitleSubTotal,
  PorductTitleSubtotalPrice,
  ProductItemQuantity,
  ProductTotalPrice,
} from './styles';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Checkout = () => {
  const validationSchema = Yup.object({
    firstName: Yup.string()
      .min(3, 'First Name must be at least 3 characters')
      .required('First Name is required'),
    lastName: Yup.string()
      .min(3, 'Last Name must be at least 3 characters')
      .required('Last Name is required'),
    companyName: Yup.string().min(
      3,
      'Company Name must be at least 3 characters'
    ),
    zipCode: Yup.string()
      .min(3, 'ZIP code must be at least 3 characters')
      .required('ZIP code is required'),
    country: Yup.string()
      .min(3, 'Country / Region must be at least 3 characters')
      .required('Country / Region is required'),
    streetAddress: Yup.string()
      .min(3, 'Street address must be at least 3 characters')
      .required('Street address is required'),
    townCity: Yup.string()
      .min(3, 'Town / City must be at least 3 characters')
      .required('Town / City is required'),
    province: Yup.string()
      .min(3, 'Province must be at least 3 characters')
      .required('Province is required'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Email address is required'),
    additionalInfo: Yup.string().min(
      3,
      'Additional info must be at least 3 characters'
    ),
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

  const cart = useAppSelector((state) => state.cart);

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
            <PorductQuantity>
              {cart.items.map((item) => (
                <PorductItem>
                  <PorductItemName>
                    {item.name}{' '}
                    <ProductItemQuantity>X {item.quantity}</ProductItemQuantity>
                  </PorductItemName>
                  <PorductItemPrice>
                    {formatCurrencyRp(item.price)}
                  </PorductItemPrice>
                </PorductItem>
              ))}
            </PorductQuantity>
            <PorductListTitle>
              <PorductTitleSubTotal>Subtotal</PorductTitleSubTotal>
              <PorductTitleSubtotalPrice>
                {formatCurrencyRp(cart.subtotal)}
              </PorductTitleSubtotalPrice>
            </PorductListTitle>
            <PorductListTitle>
              <PorductTitleSubTotal>Total</PorductTitleSubTotal>
              <ProductTotalPrice>
                {formatCurrencyRp(cart.total)}
              </ProductTotalPrice>
            </PorductListTitle>
          </PorductList>

          <CheckoutContainer>
            <CheckoutItemContainer>
              <CheckoutItem>
                <input type="checkbox" />{' '}
                <CheckoutItemName>Direct Bank Transfer</CheckoutItemName>
              </CheckoutItem>
              <CheckoutItemDesc>
                Make your payment directly into our bank account. Please use
                your Order ID as the payment reference. Your order will not be
                shipped until the funds have cleared in our account.
              </CheckoutItemDesc>
            </CheckoutItemContainer>
            <CheckoutItem>
              <input type="checkbox" />
              <CheckoutItemSubName>Direct Bank Transfer</CheckoutItemSubName>
            </CheckoutItem>
            <CheckoutItem>
              <input type="checkbox" />{' '}
              <CheckoutItemSubName>Cash On Delivery</CheckoutItemSubName>
            </CheckoutItem>
            <EndDesc>
              Your personal data will be used to support your experience
              throughout this website, to manage access to your account, and for
              other purposes described in our <p>privacy policy.</p>
            </EndDesc>
          </CheckoutContainer>
          <PlaceOrderButtonContainer>
            <PlaceOrderButton
              onClick={(e) => {
                e.preventDefault(); // Previne comportamento padrão de clique
                if (formik.isValid && formik.dirty) {
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
                  formik.handleSubmit(); // Chama o handler do Formik
                  console.log(formik.values);
                  formik.resetForm();
                } else {
                  toast.error('Error', {
                    position: 'top-right',
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: 'light',
                  });
                  formik.handleSubmit();
                }
              }}
            >
              Place order
            </PlaceOrderButton>
          </PlaceOrderButtonContainer>
        </PorductListContainer>
      </Container>
    </>
  );
};

export default Checkout;
