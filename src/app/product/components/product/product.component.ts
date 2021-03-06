import { 
  Component, 
  Input, 
  Output, 
  EventEmitter,
  OnChanges, 
  SimpleChanges, 
  OnInit, 
  DoCheck, 
  OnDestroy } from '@angular/core';
import { Product } from './../../../core/models/product.model';
import { CartService } from './../../../core/services/cart/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls : ['./product.component.scss']
})
// OnChanges,
export class ProductComponent implements  OnInit, DoCheck, OnDestroy {

  today = new Date();

  @Input() product: Product;
  @Output() productClicked: EventEmitter<any> = new EventEmitter();

  constructor(
    private cartService: CartService/* Inyeccion de dependencia */
  ) {
    console.log('ProductComponent.constructor');
  }

  /*ngOnChanges(changes: SimpleChanges) {
    console.log("ProductComponent.ngOnChanges");
    console.log(changes);
  }*/

  ngOnInit(){
    console.log('ProductComponent.ngOnInit');
  }

  ngDoCheck() {
    console.log('DoCheck');
  }

  ngOnDestroy(){
    console.log('ngOnDestroy');
  }

  addCart(){
    console.log('Agregar al carrito');
    //this.productClicked.emit(this.product.id);
    this.cartService.addCart(this.product);
  }
  // Se puede poner un numero una cadena, un objeto. Depende de lo que se haya puesto en EventEmmiter
}
