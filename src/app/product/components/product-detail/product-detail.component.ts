import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { ProductsService } from './../../../core/services/products/products.service';
import { Product } from './../../../core/models/product.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {

  product: Product;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const id = params.id;
      console.log(id);
      this.fetchProduct(id);
    });
  }

  fetchProduct(id: string){
    this.productsService.getProduct(id).subscribe(producto => {
      this.product = producto;
      console.log(this.product);
    });
  }

  createProduct() {
    const newProduct: Product = {
      id: '10',
      title: 'Burger with Pomme Frites',
      image: 'https://cdn.pixabay.com/photo/2017/08/12/18/59/snack-2635035__340.jpg',
      description: 'This burger with pomme frites is a special dinner for you',
      price: 129.99
    };
    this.productsService.createProduct(newProduct).subscribe(producto => {
      console.log(producto);
    });
  }

  updateProduct() {
    const idProduct = '10';
    const changesProduct: Partial<Product> = {
      description: 'Burger with PF'
    };
    this.productsService.updateProduct(idProduct, changesProduct).subscribe(resultado => {
      console.log('Actualizacion realizada con exito.');
      console.log(resultado);
      this.product = resultado;
    });
  }

  deleteProduct() {
    const idProduct = '5';

    this.productsService.deleteProduct(idProduct).subscribe(resultado => {
      console.log('Eliminacion del objeto hecha de forma correcta');
      console.log(resultado); /* Regresa "true" si la eliminacion se hizo de forma correcta */
    });
  }
}
