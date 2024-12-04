import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import FilterBar from './components/FilterBar';
import ShopBaner from './components/ShopBaner';
import {
  NextPageButton,
  PageButton,
  PageButtonContainer,
  ProductList,
} from './styles';
import { FetchDataProps, ProductDataProps } from './types';
import axios from 'axios';
import ProductCard from '../../components/Product Card';

const Shop = () => {
  // pegue query params
  const [data, setData] = useState<ProductDataProps[]>([]);
  const [productsList, setProductsList] = useState<ProductDataProps[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [filters, setFilters] = useState<string[]>([]);

  const [searchParams] = useSearchParams();
  useEffect(() => {
    const paramValue = searchParams.get('category');
    if (paramValue) {
      setFilters([paramValue]);
    }
  }, [searchParams]);

  useEffect(() => {
    const filteredProducts =
      filters.length === 0
        ? data
        : data.filter((product) =>
            filters.every((filter) => product.categories.includes(filter))
          );

    setProductsList(filteredProducts);
  }, [data, filters]);

  const fetchData = async ({ page = 1, per = 16 }: FetchDataProps) => {
    try {
      const response = await axios.get(
        `http://localhost:3000/cards?_page=${page}&_per_page=${per}`
      );
      const result: ProductDataProps[] = await response.data.data;

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

  useEffect(() => {
    fetchData({});
  }, []);

  if (error) {
    return <h1>Teve um erro!</h1>;
  }
  return (
    <>
      {loading && <span>Carregando</span>}
      <ShopBaner />
      <FilterBar filters={filters} setFilters={setFilters} />
      <ProductList>
        {productsList?.map((card) => (
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
      </ProductList>
      <PageButtonContainer>
        <PageButton isCurrenPage>1</PageButton>
        <PageButton isCurrenPage={false}>2</PageButton>
        <PageButton isCurrenPage={false}>3</PageButton>
        <NextPageButton>Next</NextPageButton>
      </PageButtonContainer>
    </>
  );
};

export default Shop;
