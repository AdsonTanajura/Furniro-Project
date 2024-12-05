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

  //States para funcionalidade do botão de page
  const [currentPage, setCurrentPage] = useState(1);
  const [fristButton, setFristButton] = useState(1);
  const [secondButton, setSecondButton] = useState(2);
  const [thirdButton, setThirdButton] = useState(3);

  const handleClickNexPage = (e: React.MouseEvent<HTMLButtonElement>) => {
    const isBack = e.currentTarget.textContent === 'Volta';

    if (isBack) {
      if (currentPage <= 1) return; // Evitar páginas negativas ou zero
      setCurrentPage((currentValue) => currentValue - 1);

      // Atualizar os botões ao voltar para o início de um grupo
      if ((currentPage - 1) % 3 === 0) {
        setFristButton((currentValue) => currentValue - 3);
        setSecondButton((currentValue) => currentValue - 3);
        setThirdButton((currentValue) => currentValue - 3);
      }
      return;
    }

    // Avançar para a próxima página
    if (currentPage >= dataObject!.last) return; // Evitar ultrapassar a última página
    setCurrentPage((currentValue) => currentValue + 1);

    // Atualizar os botões ao avançar para um novo grupo
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
          `http://localhost:3000/cards?_page=${page}&_per_page=${per}`
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
    [] // Sem dependências mutáveis (data ou dataObject)
  );

  useEffect(() => {
    fetchData({ page: currentPage, per: showManyCards });
  }, [fetchData, showManyCards, currentPage]);

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
        {!dataObject ? null : (
          <>
            {fristButton === dataObject.first ? null : (
              <NextPageButton onClick={handleClickNexPage}>
                Volta
              </NextPageButton>
            )}
            {fristButton > 0 && fristButton <= dataObject.last ? (
              <PageButton
                isCurrenPage={dataObject.next - 1 === fristButton}
                onClick={handleClickButtonPage}
              >
                {fristButton}
              </PageButton>
            ) : null}

            {secondButton > 0 && secondButton <= dataObject.last ? (
              <PageButton
                isCurrenPage={dataObject.next - 1 === secondButton}
                onClick={handleClickButtonPage}
              >
                {secondButton}
              </PageButton>
            ) : null}

            {thirdButton > 0 && thirdButton <= dataObject.last ? (
              <PageButton
                isCurrenPage={dataObject.next - 1 === thirdButton}
                onClick={handleClickButtonPage}
              >
                {thirdButton}
              </PageButton>
            ) : null}
            <NextPageButton onClick={handleClickNexPage}>Next</NextPageButton>
          </>
        )}
      </PageButtonContainer>
    </>
  );
};

export default Shop;
