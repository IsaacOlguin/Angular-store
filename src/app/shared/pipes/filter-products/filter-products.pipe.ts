import { Pipe, PipeTransform } from '@angular/core';

import { Product } from '../../../core/models/product.model';

export interface OrderProducts {
  producto: Product;
  cantidad: number;
}

@Pipe({
  name: 'filterProducts'
})
export class FilterProductsPipe implements PipeTransform {

  transform(listaProductos: any): unknown {
    const map = new Map();

    listaProductos.forEach(element => {
      if (!map.has(element.id)){
        const orden: OrderProducts = {
          producto: element,
          cantidad: 1
        };
        map.set(element.id, orden);
      } else {
        map.get(element.id).cantidad = map.get(element.id).cantidad + 1;
      }
    });

    listaProductos = [];
    map.forEach(element => {
      listaProductos.push(element);
    });

    return listaProductos;
  }
}



