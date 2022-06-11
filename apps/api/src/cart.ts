import services, { Service } from './services';

export interface CartItem extends Service {
  quantity: number;
}

export interface Cart {
  cartItems: CartItem[];
}

export const initialCart = (indexes: number[]): Cart => ({
  cartItems: indexes.map((index) => ({
    ...services[index],
    quantity: 1,
  })),
});
