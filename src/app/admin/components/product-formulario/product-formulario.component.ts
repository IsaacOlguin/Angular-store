import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { ProductsService } from './../../../core/services/products/products.service';
import { Validador } from './../../../utils/validador';

import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-formulario',
  templateUrl: './product-formulario.component.html',
  styleUrls: ['./product-formulario.component.scss']
})
export class ProductFormularioComponent implements OnInit {

  formulario: FormGroup;
  imagen$: Observable<any>;

  constructor(
    private formBuilder: FormBuilder,
    private productsService: ProductsService,
    private router: Router,
    private angularFireStorage: AngularFireStorage
  ) {
    this.buildForm();
  }

  ngOnInit(): void {
  }

  private buildForm() {
    this.formulario = this.formBuilder.group({
      id: ['', [Validators.required]],
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
      this.productsService.createProduct(product).subscribe(newProduct => {
        console.log(newProduct);
        this.router.navigate(['./admin/products']);
      });
    }
  }

  get priceField() {
    return this.formulario.get('price');
  }

  uploadFile(event){
    const file = event.target.files[0];
    console.log(file);
    const name = 'images1.png';
    const fileRef = this.angularFireStorage.ref(name);
    const task = this.angularFireStorage.upload(name, file);

    task.snapshotChanges().pipe(
      finalize(() => {
        this.imagen$ = fileRef.getDownloadURL();
        this.imagen$.subscribe(url => {
          console.log(url);
          this.formulario.get('image').setValue(url);
        });
      })).subscribe();
  }
}
