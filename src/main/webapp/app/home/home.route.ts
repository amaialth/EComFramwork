import { Routes } from '@angular/router';

import { HomeComponent } from './';
import { ProductListPageComponent } from 'app/product-list-page/product-list-page.component';
import { CategoryPageComponent } from 'app/category-page/category-page.component';

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
  },
  {
    path: 'allCategory',
    component: CategoryPageComponent,
    data: {
      authorities: [],
      pageTitle: 'Ecom'
    }
  }
];
