import { useCallback, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import FilterBar from './components/FilterBar';
import {
  NextPageButton,
  PageButton,
  PageButtonContainer,
  ProductList,
} from './styles';
import { DataObjectProps, ProductDataProps } from './types';
import axios from 'axios';
import ProductCard from '../../components/Product Card';

import LoadingSpinner from '../../components/LoadingSpinner';
import Banner from '../../components/Banner';

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
  const [fristButton, setFristButton] = useState(1);
  const [secondButton, setSecondButton] = useState(2);
  const [thirdButton, setThirdButton] = useState(3);

  const handleClickNexPage = (e: React.MouseEvent<HTMLButtonElement>) => {
    const isBack = e.currentTarget.textContent === 'Volta';

    if (isBack) {
      if (currentPage <= 1) return;
      setCurrentPage((currentValue) => currentValue - 1);

      if ((currentPage - 1) % 3 === 0) {
        setFristButton((currentValue) => currentValue - 3);
        setSecondButton((currentValue) => currentValue - 3);
        setThirdButton((currentValue) => currentValue - 3);
      }
      return;
    }

    if (currentPage >= dataObject!.last) return;
    setCurrentPage((currentValue) => currentValue + 1);

    if (currentPage % 3 === 0) {
      setFristButton((currentValue) => currentValue + 3);
      setSecondButton((currentValue) => currentValue + 3);
      setThirdButton((currentValue) => currentValue + 3);
    }
  };

  const handleClickButtonPage = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (e.currentTarget.textContent) {
      setCurrentPage(Number(e.currentTarget.textContent));
      return;
    }
  };

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
          <Banner name="Shop" />
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
          <PageButtonContainer>
            {!dataObject ? null : (
              <>
                {fristButton === dataObject.first ? null : (
                  <NextPageButton onClick={handleClickNexPage}>
                    Volta
                  </NextPageButton>
                )}
                {fristButton > 0 && fristButton <= dataObject.last ? (
                  <PageButton
                    isCurrenPage={
                      dataObject.next
                        ? dataObject.next - 1 === fristButton
                        : dataObject.last === fristButton
                    }
                    onClick={handleClickButtonPage}
                  >
                    {fristButton}
                  </PageButton>
                ) : null}

                {secondButton > 0 && secondButton <= dataObject.last ? (
                  <PageButton
                    isCurrenPage={
                      dataObject.next
                        ? dataObject.next - 1 === secondButton
                        : dataObject.last === secondButton
                    }
                    onClick={handleClickButtonPage}
                  >
                    {secondButton}
                  </PageButton>
                ) : null}

                {thirdButton > 0 && thirdButton <= dataObject.last ? (
                  <PageButton
                    isCurrenPage={
                      dataObject.next
                        ? dataObject.next - 1 === thirdButton
                        : dataObject.last === thirdButton
                    }
                    onClick={handleClickButtonPage}
                  >
                    {thirdButton}
                  </PageButton>
                ) : null}
                <NextPageButton onClick={handleClickNexPage}>
                  Next
                </NextPageButton>
              </>
            )}
          </PageButtonContainer>
        </>
      )}
    </>
  );
};

export default Shop;
