import { useCallback, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import FilterBar from './components/FilterBar';
import { ProductList } from './styles';
import { DataObjectProps, ProductDataProps } from './types';
import axios from 'axios';
import ProductCard from '../../components/Product Card';

import LoadingSpinner from '../../components/LoadingSpinner';
import Banner from '../../components/Banner';
import PagesButtons from './components/PagesButtons';

const BASEURL = import.meta.env.VITE_BASE_URL;

const Shop = () => {
  const [data, setData] = useState<ProductDataProps[]>([]);
  const [dataObject, setDataObject] = useState<DataObjectProps>();
  const [showManyCards, setShowManyCards] = useState('16');
  const [productsList, setProductsList] = useState<ProductDataProps[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [filters, setFilters] = useState<string[]>([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [firstButton, setFirstButton] = useState(1);
  const [secondButton, setSecondButton] = useState(2);
  const [thirdButton, setThirdButton] = useState(3);

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
          `${BASEURL}/cards?_page=${page}&_per_page=${per}`
        );
        const result = response.data.data;

        setDataObject(response.data);

        setData((prevData) => {
          if (prevData.length === data.length) {
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
    []
  );

  useEffect(() => {
    fetchData({ page: currentPage, per: showManyCards });
  }, [fetchData, showManyCards, currentPage]);

  if (error) {
    return <h1>Teve um erro!</h1>;
  }
  return (
    <>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <>
          <Banner bannerTitle="Shop" />
          <FilterBar
            currentPage={currentPage}
            dataObject={dataObject}
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
                id={card.id}
                key={card.id}
              />
            ))}
          </ProductList>
          <PagesButtons
            firstButton={firstButton}
            secondButton={secondButton}
            setFirstButton={setFirstButton}
            setSecondButton={setSecondButton}
            setThirdButton={setThirdButton}
            thirdButton={thirdButton}
            dataObject={dataObject!}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </>
      )}
    </>
  );
};

export default Shop;
