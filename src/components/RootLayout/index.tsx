import { Outlet, useNavigate } from 'react-router-dom';
import { ClerkProvider } from '@clerk/clerk-react';
import Header from '../Header';
import Footer from '../Footer';
import Toast from '../Toast'; // Importe o componente Toast

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error('Missing Publishable Key');
}

const RootLayout = () => {
  const navigate = useNavigate();

  return (
    <ClerkProvider
      routerPush={() => navigate('/home')}
      routerReplace={(to) => navigate(to, { replace: true })}
      publishableKey={PUBLISHABLE_KEY}
    >
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <Toast /> {/* Adicione o ToastContainer aqui */}
    </ClerkProvider>
  );
};

export default RootLayout;
