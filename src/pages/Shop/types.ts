export type ProductDataProps = {
  id: string;
  img: string;
  title: string;
  description: string;
  price: number;
  discount?: number;
  isNew?: boolean;
  categories: string[];
};

export type FetchDataProps = {
  page?: number;
  per?: number;
};
