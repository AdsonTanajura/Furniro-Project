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
  per?: string;
};

export type DataObjectProps = {
  data: Array<ProductDataProps>;
  first: number;
  items: number;
  last: number;
  next: number;
  pages: number;
};
