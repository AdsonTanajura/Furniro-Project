import axios from 'axios';
import { ListCotainer, ShowMoreButton } from './styles';
import { useEffect, useState } from 'react';
import {
  ApiResultProps,
  DataProps,
  FetchDataProps,
  ListProductProps,
} from './types';
import ProductCard from '../Product Card';
import LoadingSpinner from '../LoadingSpinner';

const BASEURL = import.meta.env.VITE_BASE_URL;

const ListProduct = ({ page, per }: ListProductProps) => {
  const [data, setData] = useState<DataProps[]>([]);
  const [apiResult, setApiResult] = useState<ApiResultProps>();
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchData = async ({ page = 1, per = 8 }: FetchDataProps) => {
    try {
      const response = await axios.get(
        `${BASEURL}/cards?_page=${page}&_per_page=${per}`
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
    await fetchData({ page: apiResult?.next, per: per });
  };

  useEffect(() => {
    fetchData({ page: page, per: per });
  }, []);

  if (error) {
    console.log('Tivemos um erro', error);
  }

  return (
    <ListCotainer>
      {loading ? (
        <LoadingSpinner />
      ) : (
        data.map((card) => (
          <ProductCard
            description={card.description}
            img={card.img}
            price={card.price}
            title={card.title}
            discount={card.discount}
            isNew={card.isNew}
            id={card.id}
            key={card.id}
          />
        ))
      )}

      {apiResult?.last === apiResult?.next ? null : (
        <ShowMoreButton onClick={handleShowMore}>Show More</ShowMoreButton>
      )}
    </ListCotainer>
  );
};

export default ListProduct;
