import { createBrowserRouter, Navigate } from 'react-router-dom';
import Home from '../pages/Home';
import RootLayout from '../components/RootLayout';
import Shop from '../pages/Shop';
import ProductPage from '../pages/ProductPage';
import Cart from '../pages/Cart';
import Checkout from '../pages/Checkout';
import PrivateLayout from '../components/PriviteRoter';
import SignInPage from '../components/SignIn';
import Contact from '../pages/Contact';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/home" replace />,
  },
  {
    element: <RootLayout />,
    children: [
      {
        path: '/home',
        element: <Home />,
      },
      {
        path: '/sign-in',
        element: <SignInPage />,
      },
      {
        path: '/home/shop',
        element: <Shop />,
      },
      {
        path: '/home/shop/:id',
        element: <ProductPage />,
      },
      {
        path: '/home/cart',
        element: <Cart />,
      },
      {
        path: '/home/contact',
        element: <Contact />,
      },
      {
        element: <PrivateLayout />,
        children: [
          {
            path: '/home/checkout',
            element: <Checkout />,
          },
        ],
      },
    ],
  },
]);
