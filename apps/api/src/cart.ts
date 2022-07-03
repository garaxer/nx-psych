import { data, Service } from './data';

export interface CartItem extends Service {
  quantity: number;
}

export interface Cart {
  cartItems: CartItem[];
}

export const initialCart = (indexes: number[]): Cart => ({
  cartItems: indexes.map((index) => ({
    ...data.services[index],
    quantity: 1,
  })),
});
