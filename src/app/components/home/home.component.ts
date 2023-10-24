import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { ProductserviceService } from 'src/app/services/productservice.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  products: Product[] = [];

  constructor(
    private router: Router,
    private productService: ProductserviceService,
    private cartService: CartService,
    private storageService: StorageService
  ) {}
  ngOnInit(): void {
    this.productService.getAllProducts().subscribe({
      next: (data: Product[]) => {
        // console.log(data);
        this.products = data;
        this.productService.saveProducts(data);
      },
      complete: () => {
        console.log('completed');
      },
      error: (error: Error) => {
        console.log('Message:', error.message);
        console.log('Name:', error.name);
      },
    });
  }
  addToCart(id: number): void {
    this.cartService.addToCart(id);
  //   JSON.parse(localStorage.getItem('cart')as string);
  //   this.storageService.getCart();
  // }
}
}