import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from './../../../core/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  formulario: FormGroup;

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

  register(event: Event) {
    event.preventDefault();
    if (this.formulario.valid) {
      console.log(this.formulario.value);
      const valores = this.formulario.value;
      this.authService.createUser(valores.email, valores.pwd)
        .then(() => {
          this.router.navigate(['./auth/login']);
        });
    }
  }
}
