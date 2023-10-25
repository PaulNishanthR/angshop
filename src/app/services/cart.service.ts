import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: Product[] = [];

  constructor(private storageService: StorageService) {}

  addToCart(id: number): void {
    const products = this.storageService.getCachedProducts();
    const clickedProduct = products.find((prod) => prod.id === id);

    if (clickedProduct) {
      const existingCartItem = this.cart.find((item) => item.id === id);

      if (!existingCartItem) {
        this.cart.push({ ...clickedProduct, id: id, count: 1 });
      } else {
        existingCartItem.count = (existingCartItem.count || 0) + 1;
      }

      this.storageService.loadCartProducts(this.cart);
    }
  }

  getCartProducts(): Product[] {
    return this.cart;
  }

  getCartCount(): number {
    let count: number = 0;
    const cartProducts = this.storageService.getCartProducts();

    for (let product of cartProducts) {
      if (product.count) {
        count += product.count;
      }
    }

    return count;
  }
}
