import Header from '../../components/Header';
import { useAuth } from '@clerk/clerk-react';

const Home = () => {
  const { userId, isLoaded } = useAuth();

  console.log('test', userId);

  return (
    <div>
      <Header />
      {isLoaded && !userId ? (
        <h1>Você nao esta logado</h1>
      ) : (
        <h1>Você esta logado</h1>
      )}
    </div>
  );
};

export default Home;
