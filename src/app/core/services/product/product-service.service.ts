import { Injectable } from '@angular/core';
import { Product } from '../../Interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private _products: Product[] = [];

  constructor() {
    this._products.push({ name: 'Coca Cola', cost: '1275,00' })
    this._products.push({ name: 'Pepsi', cost: '960,00' })
    this._products.push({ name: 'Fanta', cost: '1180,00' })
    this._products.push({ name: 'Sprite', cost: '950,00' })
  }

  getProducts(): Product[] {
    return this._products;
  }
}
