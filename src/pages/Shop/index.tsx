import { useCallback, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import FilterBar from './components/FilterBar';
import ShopBaner from './components/ShopBaner';
import {
  NextPageButton,
  PageButton,
  PageButtonContainer,
  ProductList,
} from './styles';
import { DataObjectProps, ProductDataProps } from './types';
import axios from 'axios';
import ProductCard from '../../components/Product Card';

const Shop = () => {
  // pegue query params
  const [data, setData] = useState<ProductDataProps[]>([]);
  const [dataObject, setDataObject] = useState<DataObjectProps>();
  const [showManyCards, setShowManyCards] = useState('16');
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

  const fetchData = useCallback(
    async ({ page = 1, per = '16' }: { page?: number; per?: string }) => {
      try {
        setLoading(true);
        const response = await axios.get(
          `http://localhost:3000/cards?_page=${page}&_per_page=${per}`
        );
        const result = response.data.data;

        setDataObject(response.data);

        setData((prevData) => {
          if (prevData.length === data.length) {
            console.log(
              'CAI NO dawdadawdawdawdadawdaO dawdadawdawdawdadawdaO dawdadawdawdawdadawdaO dawdadawdawdawdadawdaO dawdadawdawdawdadawdaO dawdadawdawdawdadawdaO dawdadawdawdawdadawdaO dawdadawdawdawdadawdaO dawdadawdawdawdadawdaO dawdadawdawdawdadawdaO dawdadawdawdawdadawda'
            );
            return [...prevData, ...result];
          }
          return result;
        });
      } catch (err) {
        setError('Erro ao buscar dados');
        console.error(err);
      } finally {
        setLoading(false);
      }
    },
    [] // Sem dependências mutáveis (data ou dataObject)
  );

  useEffect(() => {
    fetchData({ per: showManyCards });
  }, [fetchData, showManyCards]);

  console.log('Data:', dataObject);
  console.log('Show Many Cards:', showManyCards);

  if (error) {
    return <h1>Teve um erro!</h1>;
  }
  return (
    <>
      {loading && <span>Carregando</span>}
      <ShopBaner />
      <FilterBar
        filters={filters}
        setFilters={setFilters}
        showManyCards={showManyCards}
        setShowManyCards={setShowManyCards}
      />
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
