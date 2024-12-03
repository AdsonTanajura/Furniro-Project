import ProductCard from '../../../../components/Product Card';
import axios from 'axios';
import { ListCotainer } from './styles';
import { useEffect, useState } from 'react';
import { DataProps } from './types';

const ListProduct = () => {
  const [data, setData] = useState<DataProps[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/cards?_page=1&_per_page=8`
        );
        const result: DataProps[] = await response.data.data;
        console.log(result);
        setData(result);
      } catch (err) {
        setError('Erro ao buscar dados');
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (error) {
    console.log('Tivemos um erro', error);
  }

  return (
    <ListCotainer>
      {loading && <h1>Carregando</h1>}
      {data.map((card) => (
        <ProductCard
          description={card.description}
          img={card.img}
          price={card.price}
          title={card.title}
          discount={card.discount}
          isNew={card.isNew}
          key={card.id}
        />
      ))}
    </ListCotainer>
  );
};

export default ListProduct;
