import { Component } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'store';
  developerVorname = 'Isaac';

  items = ['isaac', 'olguin'];

  obst = ['Apfel', 'Birne', 'Kirsche', 'Wassermelon', 'Banane'];

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

  addItem() {
    this.obst.push('ein neues Obst');
  }

  deleteItem(index: number) {
    this.obst.splice(index, 1);
  }

  clickProduct(id: number) {
    console.log('Product ID ' + id);
  }
}
