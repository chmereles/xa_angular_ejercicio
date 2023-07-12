import { Component, Input } from '@angular/core';
import { Product } from 'src/app/core/Interfaces/product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductDetailComponent {
  @Input() product?: Product;
}
