import ImagensSide from './components/ImagensSide';
import SubHeader from './components/SubHeader';
import { ProductContainer } from './styles';

const ProductPage = () => {
  return (
    <>
      <section>
        <SubHeader />
        <ProductContainer>
          {/* Dive do lado esquerdo */}
          <ImagensSide />
          {/* Dive das informaçöes */}
          <div>
            {/* Dive que coloca a barra embaixo */}
            <div>
              <h1>Asgaard sofa</h1>
              <span>Rs. 250,000.00</span>
              <div>
                {/* Dive que tem a barrinha seprando  */}
                <div>* * * * *</div>
                <span>5 Customer Review</span>
              </div>
              <p>
                Setting the bar as one of the loudest speakers in its class, the
                Kilburn is a compact, stout-hearted hero with a well-balanced
                audio which boasts a clear midrange and extended highs for a
                sound.
              </p>
              <div>
                <h2>Size</h2>
                <button>L</button>
                <button>XL</button>
                <button>XS</button>
              </div>
              <div>
                <h2>Color</h2>
                <button>COR1</button>
                <button>CORD2</button>
                <button>COR3</button>
              </div>
            </div>
            {/* div com os dados do SKU */}
            <div>SKU</div>
          </div>
        </ProductContainer>
      </section>
    </>
  );
};

export default ProductPage;
