import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
import { HttpClient } from '@angular/common/http';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root',
})
export class ProductserviceService {
  constructor(
    private http: HttpClient,
    private storageService: StorageService
  ) {}

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('https://fakestoreapi.com/products');
  }

  saveProducts(products: Product[]) {
    this.storageService.saveProducts(products);
  }

  getLocalProducts(products: Product[]) {
    this.storageService.getCachedProducts();
  }
}
