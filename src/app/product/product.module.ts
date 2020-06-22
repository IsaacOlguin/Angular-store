import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsComponent } from './components/products/products.component';
import { ProductComponent } from './components/product/product.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';

import { SharedModule } from './../shared/shared.module';
import { ProductRoutingModule } from './product-routing.module';

@NgModule({
  declarations: [
    ProductsComponent,
    ProductComponent,
    ProductDetailComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ProductRoutingModule
  ],
  exports: [
    /*ProductsComponent,
    ProductComponent,
    ProductDetailComponent*/
  ]
})
export class ProductModule { }
