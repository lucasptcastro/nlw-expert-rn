import { ProductProps } from "@/utils/data/products";
import { create } from "zustand";
import * as cartInMemory from "./helpers/cart-in-memory";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createJSONStorage, persist } from "zustand/middleware";

export interface IProductCart extends ProductProps {
  quantity: number;
}

interface IState {
  products: IProductCart[];
  add: (product: ProductProps) => void;
  remove: (productId: string) => void;
  clear: () => void;
}

export const useCartStore = create(
  persist<IState>(
    (set) => ({
      products: [],
      add: (product: ProductProps) =>
        set((state) => ({
          products: cartInMemory.add(state.products, product),
        })),

      remove: (productId: string) =>
        set((state) => ({
          products: cartInMemory.remove(state.products, productId),
        })),

      clear: () => set(() => ({ products: [] })),
    }),
    {
      name: "nlw-expert:cart",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
