import { useCallback, useEffect, useState } from 'react';
import { DataObjectProps, ProductDataProps } from './types';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';
const BASEURL = import.meta.env.VITE_BASE_URL;

export const useShopLogic = () => {
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
        setError('Error when searching for data');
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

  return {
    firstButton,
    secondButton,
    thirdButton,
    filters,
    productsList,
    setFilters,
    setShowManyCards,
    setFirstButton,
    setSecondButton,
    setThirdButton,
    setCurrentPage,
    loading,
    error,
    dataObject,
    currentPage,
    showManyCards,
  };
};
