import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { ProductsService } from './../../../core/services/products/products.service';

@Component({
  selector: 'app-product-formulario',
  templateUrl: './product-formulario.component.html',
  styleUrls: ['./product-formulario.component.scss']
})
export class ProductFormularioComponent implements OnInit {

  formulario: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private productsService: ProductsService,
    private router: Router
  ) {
    this.buildForm();
  }

  ngOnInit(): void {
  }

  private buildForm() {
    this.formulario = this.formBuilder.group({
      id: ['', [Validators.required]],
      title: ['', [Validators.required]],
      price: [0.0, [Validators.required]],
      image: '',
      description: ['', [Validators.required]]
    });
  }

  saveProduct(event: Event){
    event.preventDefault();
    if (this.formulario.valid){
      const product = this.formulario.value;
      this.productsService.createProduct(product).subscribe(newProduct => {
        console.log(newProduct);
        this.router.navigate(['./admin/products']);
      });
    }
  }
}
