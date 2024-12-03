import calcularDesconto from '../../u/calcularDesconto';
import { ProductCardProps } from './types';

const ProductCard = ({
  img,
  description,
  price,
  title,
  discount,
}: ProductCardProps) => {
  const priceWithdiscount = calcularDesconto(price, discount!);

  return (
    <div>
      <div>
        <img src={img} alt={title} />
      </div>
      <div>
        <h2>{title}</h2>
        <span>{description}</span>
        <div>
          {discount ? <p>{priceWithdiscount}</p> : <p>{price}</p>}
          {discount && <p>{price}</p>}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
