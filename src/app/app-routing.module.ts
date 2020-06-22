import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { SharedModule } from './shared/shared.module';

/*import { ProductsComponent } from './products/products.component';
import { ContactComponent } from './contact/components/contact/contact.component';
import { TestComponent } from './test/components/test/test.component';*/
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
/*import { ProductDetailComponent } from './product-detail/product-detail.component';*/
import { LayoutComponent } from './layout/layout.component';

import { AdminGuard } from './admin.guard';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        /* component: HomeComponent, */
        loadChildren: () =>
          import('./home/home.module').then((m) => m.HomeModule), // Carga un modulo dinamicamente
      },
      {
        path: 'products',
        loadChildren: () => import('./product/product.module').then((m) => m.ProductModule)
        /* component: ProductsComponent, */
      },
      /*{
        path: 'products/:id',
        component: ProductDetailComponent,
      },*/
      {
        path: 'contact',
        /*component: ContactComponent,*/
        loadChildren: () => import('./contact/contact.module').then((m) => m.ContactModule),
        canActivate: [AdminGuard]
      },
      {
        path: 'test',
        loadChildren: () => import('./test/test.module').then((m) => m.TestModule)
        /*component: TestComponent,*/
      }
    ]
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
    }),
    SharedModule
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
