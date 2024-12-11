import axios from 'axios';
import DescriptionSection from './components/DescriptionSection';
import ProductImage from './components/ImagensSide';
import ProductInformation from './components/ProductInformation';
import RelatedProductsSection from './components/RelatedProductsSection';
import SubHeader from './components/SubHeader';
import { ProductContainer } from './styles';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { DataProps } from './type';

const BASEURL = import.meta.env.VITE_BASE_URL;

const ProductPage = () => {
  const [data, setData] = useState<DataProps>();
  const [loading, setLoading] = useState(true);

  const { id } = useParams<{ id: string }>();

  const fetchData = async () => {
    try {
      const responde = await axios.get(`${BASEURL}/cards/${id}`);
      setData(responde.data);
      console.log('🚀 ~ fetchData ~ responde:', responde);
      console.log('🚀 ~ ProductPage ~ data:', data);
    } catch (error) {
      console.log('TiVEMOS UM ERRO', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {loading && <h1>Carregando...</h1>}
      {!loading && data && (
        <section style={{ display: 'flex', flexDirection: 'column' }}>
          <SubHeader title={data.title} />
          <ProductContainer>
            <ProductImage img={data.img} title={data.title} />
            <ProductInformation
              price={data.price}
              title={data.title}
              categories={data.categories}
              id={data.id}
              img={data.img}
            />
          </ProductContainer>
        </section>
      )}
      <DescriptionSection />
      <RelatedProductsSection />
    </>
  );
};

export default ProductPage;
