import { Component, OnInit } from '@angular/core';

import { ProductsService } from './../../../core/services/products/products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  listaProductos = [];
  displayedColumns: string[] = ['id', 'title', 'price', 'actions'];

  constructor(
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts(){
    this.productsService.getAllProducts().subscribe(listaProductos => {
      this.listaProductos = listaProductos;
    });
  }

  deleteProduct(id: string){
    this.productsService.deleteProduct(id).subscribe(resultado => {
      if (resultado) {
        /*this.fetchProducts();*/
        this.listaProductos.forEach((elemento, indice, arreglo) => {
          if (elemento.id === id){
            this.listaProductos.splice((indice), 1);
            this.listaProductos = [...this.listaProductos];
          }
        });
      }
    });
  }
}
