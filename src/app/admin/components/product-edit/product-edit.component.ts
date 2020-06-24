import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { ProductsService } from './../../../core/services/products/products.service';
import { Validador } from './../../../utils/validador';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {

  formulario: FormGroup;
  id: string;

  constructor(
    private formBuilder: FormBuilder,
    private productsService: ProductsService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.buildForm();
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.id = params.id;
      this.productsService.getProduct(this.id).subscribe(producto => {
        this.formulario.patchValue({
          description: producto.description,
          price: producto.price,
          image: producto.image,
          title: producto.title
        });
        // this.formulario.patchValue(producto) /* Se podria hacer lo de esta linea */
      });
    });
  }

  private buildForm() {
    this.formulario = this.formBuilder.group({
      title: ['', [Validators.required]],
      price: [0.0, [Validators.required, Validador.isPriceValid]],
      image: '',
      description: ['', [Validators.required]]
    });
  }

  saveProduct(event: Event){
    event.preventDefault();
    if (this.formulario.valid){
      const product = this.formulario.value;
      this.productsService.updateProduct(this.id, product).subscribe(newProduct => {
        console.log(newProduct);
        this.router.navigate(['./admin/products']);
      });
    }
  }

  get priceField() {
    return this.formulario.get('price');
  }

}
