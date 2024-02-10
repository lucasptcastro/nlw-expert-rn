import { ProductProps } from "@/utils/data/products";
import { create } from "zustand";
import * as cartInMemory from "./helpers/cart-in-memory";

export interface IProductCart extends ProductProps {
  quantity: number;
}

interface IState {
  products: IProductCart[];
  add: (product: ProductProps) => void;
}

export const useCartStore = create<IState>((set) => ({
  products: [],
  add: (product: ProductProps) =>
    set((state) => ({
      products: cartInMemory.add(state.products, product),
    })),
}));
