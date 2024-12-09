import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartState, Product } from '../types';

const initialState: CartState = {
  items: [],
  total: 0,
  subtotal: 0, // Novo campo para o subtotal total
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (
      state,
      action: PayloadAction<{
        product: Omit<Product, 'quantity' | 'subtotal'>;
        quantity?: number;
      }>
    ) => {
      const { product, quantity = 1 } = action.payload;
      const existingItem = state.items.find((item) => item.id === product.id);

      if (existingItem) {
        existingItem.quantity += quantity;
        existingItem.subtotal = existingItem.quantity * existingItem.price;
      } else {
        state.items.push({
          ...product,
          quantity,
          subtotal: product.price * quantity,
        });
      }

      // Recalcula subtotal e total
      state.subtotal = state.items.reduce(
        (sum, item) => sum + item.subtotal,
        0
      );
      state.total = state.subtotal; // Aqui você pode adicionar impostos ou descontos, se necessário
    },
    removeItem: (
      state,
      action: PayloadAction<{ id: string; all?: boolean }>
    ) => {
      const { id, all = false } = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      if (!existingItem) return;

      if (all || existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItem.quantity -= 1;
        existingItem.subtotal = existingItem.quantity * existingItem.price;
      }

      // Recalcula subtotal e total
      state.subtotal = state.items.reduce(
        (sum, item) => sum + item.subtotal,
        0
      );
      state.total = state.subtotal; // Aqui você pode adicionar impostos ou descontos, se necessário
    },
  },
});

export const { addItem, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
