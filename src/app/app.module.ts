import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
/*import { ProductComponent } from './product/components/product/product.component';*/
/*import { CartComponent } from './cart/cart.component';*/
/*import { ProductsComponent } from './products/products.component';*/
/*import { ContactComponent } from './contact/components/contact/contact.component';*/
/*import { TestComponent } from './test/components/test/test.component';*/

import { LayoutComponent } from './layout/layout.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
/*import { ProductDetailComponent } from './product-detail/product-detail.component';*/

import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { environment } from './../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    /*ProductComponent,*/
    /*CartComponent,*/
    /*ProductsComponent,*/
    /*ContactComponent,*/
    /*TestComponent,*/
    PageNotFoundComponent,
    /*ProductDetailComponent,*/
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SharedModule,
    CoreModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFireStorageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
