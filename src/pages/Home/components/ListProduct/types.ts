export type DataProps = {
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

export type ApiResultProps = {
  next: number;
  last: number;
};
