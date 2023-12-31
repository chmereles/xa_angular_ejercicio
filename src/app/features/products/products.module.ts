import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductosRoutingModule } from './products-routing.module';
import { ProductsPageComponent } from './pages/product-page/products-page.component';
import { MatButtonModule } from '@angular/material/button';
import { ProductItemComponent } from './pages/product-item/product-item.component';
import { MatCardModule } from '@angular/material/card';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    ProductsPageComponent,
    ProductItemComponent
  ],
  imports: [
    CommonModule,
    ProductosRoutingModule,
    MatButtonModule,
    MatCardModule,
    SharedModule
  ]
})
export class ProductsModule { }
