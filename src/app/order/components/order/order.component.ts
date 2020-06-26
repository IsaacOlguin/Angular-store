import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Product } from './../../../core/models/product.model';
import { CartService } from './../../../core/services/cart/cart.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  displayedColumns: string[] = ['image', 'title', 'price', 'cantidad'];
  productos$: Observable<Product[]>;

  constructor(
    private cartService: CartService
  ) {
    this.productos$ = this.cartService.cart$; /* Esto ya es un observable */
  }

  ngOnInit(): void {
  }

}
