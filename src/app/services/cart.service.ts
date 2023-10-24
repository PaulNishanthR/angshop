import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';
import { Product } from '../models/product';
import { Cart } from '../models/cart';
import { User } from '../models/user';
import { AuthService } from './auth.service';
import { Observable, count } from 'rxjs';
import { ProductserviceService } from './productservice.service';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart: Product[] = [];

  constructor(
    private storageService: StorageService,
    private authService: AuthService,
    private productserviceService: ProductserviceService
  ) {}

  // addToCart(id: number) {
  //   let cart: Cart[] = this.storageService.getCart();

  //   if (cart === null) {
  //     cart = [];
  //   }
  //   console.log(cart);

  //   return cart;
  // }

  addToCart(id: number): void {}
  //   const products = this.storageService.getCachedProducts();
  //   const user = this.storageService.getLoggedInUser();
  //   let cart = this.storageService.getCart();
  //   const clickedProduct = products.find((prod) => prod.id === id);

  //   if (clickedProduct) {
  //     let existingCartItem = cart.find((item) => item.id === id);

  //     if (!existingCartItem) {
  //       cart.push({ ...clickedProduct, id: id, count: 1 });
  //     } else {
  //       cart = cart.map((item) => {
  //         if (item.id === id) {
  //           return { ...item, count: (item.count || 0) + 1 };
  //         } else {
  //           return item;
  //         }
  //       });
  //     }

  //     this.storageService.loadCartProducts(cart);
  //   }
  // }

  getCart(): Product[] {
    return this.storageService.getCart();
  }
}
