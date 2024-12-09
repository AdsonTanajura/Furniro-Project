// Arquivo types.ts ou similar
export interface CartState {
  items: Product[];
  total: number;
  subtotal: number; // Adicionando o subtotal
}

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
  subtotal: number;
}
