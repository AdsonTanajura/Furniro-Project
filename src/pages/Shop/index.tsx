import FilterBar from './components/FilterBar';
import { ProductList } from './styles';
import ProductCard from '../../components/ProductCard';

import LoadingSpinner from '../../components/LoadingSpinner';
import Banner from '../../components/Banner';
import PagesButtons from './components/PagesButtons';
import { useShopLogic } from './logic';
import ErrorPage from '../../components/ErrorPage';

const Shop = () => {
  const {
    currentPage,
    dataObject,
    error,
    filters,
    firstButton,
    loading,
    productsList,
    secondButton,
    setCurrentPage,
    setFilters,
    setFirstButton,
    setSecondButton,
    setShowManyCards,
    setThirdButton,
    showManyCards,
    thirdButton,
  } = useShopLogic();

  if (error) {
    console.log(error);
    return <ErrorPage errorMenssage={error} />;
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
