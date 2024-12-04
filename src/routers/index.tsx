import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import RootLayout from '../components/RootLayout';
import Shop from '../pages/Shop';

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: '/home',
        element: <Home />,
      },
      {
        path: '/home/shop',
        element: <Shop />,
      },
    ],
  },
]);
