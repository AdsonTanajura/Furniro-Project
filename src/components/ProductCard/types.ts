export type ProductCardProps = {
  img: string;
  title: string;
  description: string;
  price: number;
  discount?: number;
  isNew?: boolean;
  id: string;
};

export type ContainerProps = {
  $url: string;
};

export type PriceProps = {
  $isDiscount: boolean;
};
