import {
  CustomersReview,
  ProductDescription,
  ProductInformationContainer,
  ProductPrice,
  ProductTitle,
  RankContainer,
  Stars,
  StarsContainer,
  ProductOptionTitle,
  ProductOptionSelect,
  ProductOptionSizeButton,
  ProductSizeOption,
  ProductColorOption,
  ProductOptionBollButton,
  ProductQuantityContainer,
  ProductQuantityInputContainer,
  ProductQuantityInput,
  ProductQuantityLessButtonInput,
  ProductQuantityAddButtonInput,
  SkuInfo,
  SkuInfoSociaMediaLogos,
  SkuInfoItems,
} from './styles';

import { IoLogoFacebook } from 'react-icons/io5';
import { FaLinkedin } from 'react-icons/fa';
import { AiFillTwitterCircle } from 'react-icons/ai';

const ProductInformation = () => {
  return (
    <div>
      {/* Dive que coloca a barra embaixo */}
      <ProductInformationContainer>
        <ProductTitle>Asgaard sofa</ProductTitle>
        <ProductPrice>Rs. 250,000.00</ProductPrice>
        <RankContainer>
          {/* Dive que tem a barrinha seprando  */}
          <StarsContainer>
            <Stars />
            <Stars />
            <Stars />
            <Stars />
            <Stars />
          </StarsContainer>
          <CustomersReview>5 Customer Review</CustomersReview>
        </RankContainer>
        <ProductDescription>
          Setting the bar as one of the loudest speakers in its class, the
          Kilburn is a compact, stout-hearted hero with a well-balanced audio
          which boasts a clear midrange and extended highs for a sound.
        </ProductDescription>
        <ProductSizeOption>
          <ProductOptionTitle>Size</ProductOptionTitle>
          <ProductOptionSelect>
            <ProductOptionSizeButton>L</ProductOptionSizeButton>
            <ProductOptionSizeButton>XL</ProductOptionSizeButton>
            <ProductOptionSizeButton>XS</ProductOptionSizeButton>
          </ProductOptionSelect>
        </ProductSizeOption>
        <ProductColorOption>
          <ProductOptionTitle>Color</ProductOptionTitle>
          <ProductOptionSelect>
            <ProductOptionBollButton color="#816DFA"></ProductOptionBollButton>
            <ProductOptionBollButton color="#000000"></ProductOptionBollButton>
            <ProductOptionBollButton color="#B88E2F"></ProductOptionBollButton>
          </ProductOptionSelect>
        </ProductColorOption>
        <ProductQuantityContainer>
          <ProductQuantityInputContainer>
            <ProductQuantityLessButtonInput>-</ProductQuantityLessButtonInput>
            <ProductQuantityInput type="number" placeholder="1" />
            <ProductQuantityAddButtonInput>+</ProductQuantityAddButtonInput>
          </ProductQuantityInputContainer>
          <button>Add To Cart</button>
        </ProductQuantityContainer>
      </ProductInformationContainer>
      {/* div com os dados do SKU */}
      <SkuInfo>
        <span>SKU</span>
        <SkuInfoItems>
          : <span>SS001</span>
        </SkuInfoItems>
        <span>Category</span>
        <SkuInfoItems>
          : <span>Sofas</span>
        </SkuInfoItems>
        <span>Tags</span>
        <SkuInfoItems>
          : <span>Sofa, Chair, Home, Shop</span>
        </SkuInfoItems>
        <span>Share</span>
        <SkuInfoItems>
          :
          <SkuInfoSociaMediaLogos>
            <IoLogoFacebook color="#000000" /> <FaLinkedin color="#000000" />
            <AiFillTwitterCircle color="#000000 " />
          </SkuInfoSociaMediaLogos>
        </SkuInfoItems>
      </SkuInfo>
    </div>
  );
};

export default ProductInformation;
