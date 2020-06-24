import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from './../material/material.module';
import { NavComponent } from './components/nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { ProductsTableComponent } from './components/products-table/products-table.component';

import { ProductsDashboardComponent } from './components/products-dashboard/products-dashboard.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ProductFormularioComponent } from './components/product-formulario/product-formulario.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';

@NgModule({
  declarations: [ProductFormComponent, NavComponent, ProductsTableComponent, ProductsDashboardComponent, ProductsListComponent, ProductFormularioComponent, ProductEditComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
    LayoutModule
  ]
})
export class AdminModule { }
