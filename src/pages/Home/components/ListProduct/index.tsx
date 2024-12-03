import ProductCard from '../../../../components/Product Card';
import axios from 'axios';
import { ListCotainer, ShowMoreButton } from './styles';
import { useEffect, useState } from 'react';
import { ApiResultProps, DataProps, FetchDataProps } from './types';

const ListProduct = () => {
  const [data, setData] = useState<DataProps[]>([]);
  const [apiResult, setApiResult] = useState<ApiResultProps>();
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchData = async ({ page = 1, per = 8 }: FetchDataProps) => {
    try {
      const response = await axios.get(
        `http://localhost:3000/cards?_page=${page}&_per_page=${per}`
      );
      setApiResult(response.data);
      const result: DataProps[] = await response.data.data;

      if (data.length > 0) {
        setData([...data, ...result]);
      } else {
        setData(result);
      }
    } catch (err) {
      setError('Erro ao buscar dados');
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const handleShowMore = async () => {
    await fetchData({ page: apiResult?.next });
  };

  useEffect(() => {
    fetchData({});
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

      {apiResult?.last === apiResult?.next ? null : (
        <ShowMoreButton onClick={handleShowMore}>Show More</ShowMoreButton>
      )}
    </ListCotainer>
  );
};

export default ListProduct;
