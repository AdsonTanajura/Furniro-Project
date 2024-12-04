export type ProductDataProps = {
  id: string;
  img: string;
  title: string;
  description: string;
  price: number;
  discount?: number;
  isNew?: boolean;
};

export type FetchDataProps = {
  page?: number;
  per?: number;
};
