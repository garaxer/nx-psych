import {
  Body,
  Controller,
  Get,
  Post,
  Delete,
  Request,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from '../../auth/jwt-auth.guard';
import { Cart, initialCart } from './../../../cart';
import { data } from '../../../service';
const services = data.services;

@Controller('cart')
export class CartController {
  // TOOD Retrieve from db.
  private carts: Record<number, Cart> = {
    1: initialCart([0, 2, 4]),
    2: initialCart([1, 3]),
  };

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {}

  @Get()
  @UseGuards(JwtAuthGuard)
  async index(@Request() req): Promise<Cart> {
    return this.carts[req.user.userId] ?? { cartItems: [] };
  }

  @Post()
  @UseGuards(JwtAuthGuard)
  async create(@Request() req, @Body() { id }: { id: string }) {
    const cart = this.carts[req.user.userId];
    if (!cart)
      return Error('To be implememented, create a new cart for the user');
    const cartItem = cart.cartItems.find((cartItem) => cartItem.id === id);
    if (cartItem) {
      cartItem.quantity += 1;
    } else {
      cart.cartItems.push({
        ...services.find((service) => service.id === id),
        quantity: 1,
      });
    }

    return cart;
  }

  @Delete()
  @UseGuards(JwtAuthGuard)
  async destroy(@Request() req): Promise<Cart> {
    this.carts[req.user.userId] = { cartItems: [] };
    return this.carts[req.user.userId];
  }
}
