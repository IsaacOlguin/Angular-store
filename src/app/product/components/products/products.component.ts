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
      image: 'assets/images/laptop.jpg',
      title : 'Laptop',
      price: 80000,
      description : 'Camiseta 8000'
    },
    {
      id: '2',
      image: 'assets/images/kindle.jpg',
      title : 'Kindle',
      price: 50000,
      description : 'Hoodie 50000'
    },
    {
      id: '3',
      image: 'assets/images/mobile.jpg',
      title : 'Teléfono',
      price: 30000,
      description : 'Mug 30000'
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
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

  clickProduct(id: number) {
    console.log('Product ID ' + id);
  }
}
