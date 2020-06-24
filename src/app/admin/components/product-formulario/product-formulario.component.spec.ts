import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductFormularioComponent } from './product-formulario.component';

describe('ProductFormularioComponent', () => {
  let component: ProductFormularioComponent;
  let fixture: ComponentFixture<ProductFormularioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductFormularioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
