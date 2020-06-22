import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TestComponent } from './components/test/test.component';

import { TestRoutingModule } from './test-routing.module';
import { SharedModule } from './../shared/shared.module';

@NgModule({
  declarations: [
    TestComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    TestRoutingModule,
    SharedModule
  ],
  exports: [
  ]
})
export class TestModule { }
