import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from './../../../core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formulario: FormGroup;
  mensaje: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {
    this.buildForm();
  }

  ngOnInit(): void {
  }

  private buildForm() {
    this.formulario = this.formBuilder.group({
      email: ['', [Validators.required]],
      pwd: ['', [Validators.required]]
    });
  }

  login(event: Event) {
    event.preventDefault();
    if (this.formulario.valid) {
      console.log(this.formulario.value);
      const valores = this.formulario.value;
      this.authService.login(valores.email, valores.pwd)
        .then(() => {
          this.router.navigate(['./admin']);
        })
        .catch(() => {
          this.mensaje = 'Credenciales invalidas';
          this.router.navigate(['./auth/login']);
        });
    }
  }

}
