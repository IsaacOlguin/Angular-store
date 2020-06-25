import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';

import { CartService } from './../../../core/services/cart/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  total = 0;

  constructor(
    private cartService: CartService
  ) {
    this.cartService.cart$.pipe(
      map(products => products.length)
    ).subscribe(totalProds => {
      console.log(totalProds);
      this.total = totalProds;
    });
   }

  ngOnInit(): void {
  }

}
