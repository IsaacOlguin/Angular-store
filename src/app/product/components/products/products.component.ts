import { Component, OnInit } from '@angular/core';

import { Product } from './../../../core/models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [
    {
      id: '1',
      image: 'assets/images/camiseta.png',
      title : 'Camiseta',
      price: 80000,
      description : 'Camiseta 8000'
    },
    {
      id: '2',
      image: 'assets/images/hoodie.png',
      title : 'Hoodie',
      price: 50000,
      description : 'Hoodie 50000'
    },
    {
      id: '3',
      image: 'assets/images/mug.png',
      title : 'Mug',
      price: 30000,
      description : 'Mug 30000'
    },
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

  clickProduct(id: number) {
    console.log('Product ID ' + id);
  }
}
