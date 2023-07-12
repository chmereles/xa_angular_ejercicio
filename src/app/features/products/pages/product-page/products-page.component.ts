import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/core/Interfaces/product';
import { ProductService } from 'src/app/core/services/product/product-service.service';

@Component({
  selector: 'app-productos-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.css']
})
export class ProductsPageComponent implements OnInit {
  products: Product[] = [];
  showList = true;
  
  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }
  
}
