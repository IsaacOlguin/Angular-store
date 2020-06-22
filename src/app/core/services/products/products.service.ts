import { Injectable } from '@angular/core';

import { Product } from '../../../product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

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

  getAllProducts () {
    return this.products;
  }

  getProduct(id: string) {
    return this.products.find(item => id === item.id);
  }
}
