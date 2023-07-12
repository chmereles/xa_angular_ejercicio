import { Injectable } from '@angular/core';
import { Product } from '../../Interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [];

  constructor() {
    this.products.push({ name: 'Coca Cola', cost: '1275,00' })
    this.products.push({ name: 'Pepsi', cost: '665.00' })
    this.products.push({ name: 'Fanta', cost: '1180,00' })
    this.products.push({ name: 'Sprite', cost: '950,00' })
  }

  getProducts(): Product[] {
    return this.products;
  }
}
