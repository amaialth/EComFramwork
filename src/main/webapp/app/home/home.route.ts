import { Routes } from '@angular/router';

import { HomeComponent } from './';
import { ProductListPageComponent } from 'app/product-list-page/product-list-page.component';

export const HOME_ROUTE: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    data: {
      authorities: [],
      pageTitle: 'Ecom'
    }
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'productList',
    component: ProductListPageComponent,
    data: {
      authorities: [],
      pageTitle: 'Ecom'
    }
  }
];
