import React, {createContext, useState} from 'react';
import {getProduct, ProductItem} from './services/ProductsService';

type CartItem = {
  product: ProductItem | undefined;
  id: number;
  qty: number;
  totalPrice: number;
};

export const CartContext = createContext({} as any);

export function CartProvider(props: any): JSX.Element {
  const [items, setItems] = useState([] as CartItem[]);

  function addItemToCart(id: number): void {
    const product = getProduct(id);
    setItems(prevItems => {
      const item = prevItems.find(currItem => currItem.id === id);
      if (!item) {
        return [
          ...prevItems,
          {
            id,
            qty: 1,
            product,
            totalPrice: product!.price,
          },
        ];
      } else {
        return prevItems.map(currItem => {
          if (currItem.id === id) {
            currItem.qty++;
            currItem.totalPrice += product!.price;
          }
          return currItem;
        });
      }
    });
  }
  function getItemsCount(): number {
    return items.reduce((sum: number, item: CartItem) => sum + item.qty, 0);
  }

  function getTotalPrice(): number {
    return items.reduce(
      (sum: number, item: CartItem) => sum + item.totalPrice,
      0,
    );
  }

  return (
    <CartContext.Provider
      value={{items, setItems, getItemsCount, addItemToCart, getTotalPrice}}>
      {props.children}
    </CartContext.Provider>
  );
}
