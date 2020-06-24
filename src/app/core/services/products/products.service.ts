import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Product } from '../../models/product.model';

import { environment } from './../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products: Product[] = [];
  /*
  {
      id: '1',
      image: 'assets/images/laptop.jpg',
      title : 'Laptop',
      price: 80000,
      description : 'Laptop'
    },
    {
      id: '2',
      image: 'assets/images/kindle.jpg',
      title : 'Kindle',
      price: 50000,
      description : 'Kindle para lectura'
    },
    {
      id: '3',
      image: 'assets/images/mobile.jpg',
      title : 'Teléfono',
      price: 30000,
      description : 'Teléfono inteligente'
    },
    {
      id: '4',
      image: 'assets/images/keyboard.jpg',
      title : 'Keyboard',
      price: 25000,
      description : 'Keyboard last generation'
    },
    {
      id: '5',
      image: 'assets/images/whiteboard.jpg',
      title : 'Whiteboard',
      price: 30000,
      description : 'Whiteboard innovation'
    },
    {
      id: '6',
      image: 'assets/images/table.jpg',
      title : 'Table',
      price: 50000,
      description : 'Tish mit zwei Stuhle'
    },
  */

  constructor(
    private http: HttpClient
  ) { }

  getAllProducts() {
    return this.http.get<Product[]>(environment.url_api);
  }

  getProduct(id: string) {
    return this.http.get<Product>(`${environment.url_api}/${id}`);
  }

  createProduct(product: Product){
    return this.http.post(`${environment.url_api}`, product);
  }

  updateProduct(id: string, product: Partial<Product>) {
    return this.http.put<Product>(`${environment.url_api}/${id}`, product);
  }

  deleteProduct(id: string) {
    return this.http.delete(`${environment.url_api}/${id}`);
  }
}
