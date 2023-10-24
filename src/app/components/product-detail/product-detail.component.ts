import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent {
  id: string = '0';
  constructor(private route: ActivatedRoute) {
    route.paramMap.subscribe((params) => {
      this.id = params.get('id')!;
    });
  }
}
