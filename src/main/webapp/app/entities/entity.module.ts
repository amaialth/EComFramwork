import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'product-category',
        loadChildren: './product-category/product-category.module#EcommmerceFrameworkProductCategoryModule'
      },
      {
        path: 'product-sub-category',
        loadChildren: './product-sub-category/product-sub-category.module#EcommmerceFrameworkProductSubCategoryModule'
      }
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ])
  ],
  declarations: [],
  entryComponents: [],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class EcommmerceFrameworkEntityModule {}
