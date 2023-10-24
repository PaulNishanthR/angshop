import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Product } from '../models/product';
import { JsonPipe } from '@angular/common';
import { Cart } from '../models/cart';
import { ProductserviceService } from './productservice.service';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor() {}

  private users: User[] = [
    { id: 1, email: 'user1@user.com', password: 'user1' },
  ];

  loadUsers() {
    if (!localStorage.getItem('users')) {
      localStorage.setItem('users', JSON.stringify(this.users));
    }
  }
  getAllUsers(): User[] {
    return JSON.parse(localStorage.getItem('users') as string);
  }

  setLoggedInUser(user: User): void {
    localStorage.setItem('loggedInUser', JSON.stringify(user));
  }
  getLoggedInUser(): User {
    return JSON.parse(localStorage.getItem('loggedInUser') as string);
  }

  removeLoggedInUser(): void {
    localStorage.removeItem('loggedInUser');
  }

  isUserLoggedIn(): boolean {
    return localStorage.getItem('loggedInUser') !== null;
  }
  saveProducts(products: Product[]): void {
    localStorage.setItem('products', JSON.stringify(products));
  }
  setCachedProducts(products: Product[]): void {
    if (!localStorage.getItem('products'))
      localStorage.setItem('products', JSON.stringify(products));
  }

  getCachedProducts(): Product[] {
    return JSON.parse(localStorage.getItem('products') as string);
  }
  setCart(): Cart[] {
    return [];
  }
  loadCartProducts(cart: Product[]): void {
    localStorage.setItem('cart', JSON.stringify(cart));
  }
  getCart() {
    return JSON.parse(localStorage.getItem('cart') as string);
  }
}
