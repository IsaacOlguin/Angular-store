import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
})
export class ProductComponent {
  @Input() product: Product;

  @Output() productClicked: EventEmitter<any> = new EventEmitter();

  addCart(){
    console.log("Agregar al carrito");
    this.productClicked.emit(this.product.id);//Se puede poner un numero una cadena, un objeto. Depende de lo que se haya puesto en EventEmmiter
  }
}
