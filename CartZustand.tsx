import create from 'zustand';
import {ProductType} from './components/Product';

type CartItem = {
  title: string;
  price: number;
  id: number;
  qty: number;
  totalPrice: number;
};

interface cartStoreType {
  cart: CartItem[];
  totalPrice: number;
  itemCount: number;
  addItemToCart: ({title, price, imageUrl, id}: ProductType) => void;
  getTotalPrice: () => void;
}
const cartStore = (set: any) => ({
  cart: [],
  totalPrice: 0,
  itemCount: 0,
  addItemToCart: ({title, price, imageUrl, id}: ProductType) => {
    set((state: any) => ({
      cart: state.cart.find((currItem: CartItem) => currItem.id === id)
        ? state.cart.map((currItem: CartItem) =>
            currItem.id === id
              ? {
                  ...currItem,
                  qty: currItem.qty + 1,
                  totalPrice: currItem.totalPrice + price,
                }
              : currItem,
          )
        : [
            ...state.cart,
            {
              id,
              qty: 1,
              price,
              title,
              imageUrl,
              totalPrice: price,
            },
          ],
      itemCount:
        1 +
        state.cart.reduce((sum: number, item: CartItem) => sum + item.qty, 0),
    }));
  },
  getTotalPrice: () => {
    set((state: any) => ({
      totalPrice: state.cart.reduce(
        (sum: number, item: CartItem) => sum + item.totalPrice,
        0,
      ),
    }));
  },
});

const useCartStore = create<cartStoreType>(cartStore);

export default useCartStore;
