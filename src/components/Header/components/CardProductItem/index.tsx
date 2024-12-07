import {
  CloseButton,
  CloseButtonContainer,
  Conatiner,
  DetailsContainer,
  Imagen,
  Quantity,
  QuantityContainer,
  Title,
  Value,
  X,
} from './styles';

import { RiCloseCircleFill } from 'react-icons/ri';

const CardProductItem = () => {
  return (
    <Conatiner>
      <Imagen
        src="https://desafiocompass03.s3.us-east-2.amazonaws.com/CardImg/pdCard7.jpg"
        alt=""
      />
      <DetailsContainer>
        <Title>Asgaard sofa</Title>
        <QuantityContainer>
          <Quantity>1</Quantity>
          <X>X</X>
          <Value>Rs. 250,000.00</Value>
        </QuantityContainer>
      </DetailsContainer>
      <CloseButtonContainer>
        <CloseButton>
          <RiCloseCircleFill />
        </CloseButton>
      </CloseButtonContainer>
    </Conatiner>
  );
};

export default CardProductItem;
