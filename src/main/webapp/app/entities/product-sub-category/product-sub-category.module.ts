import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { EcommmerceFrameworkSharedModule } from 'app/shared';
import {
  ProductSubCategoryComponent,
  ProductSubCategoryDetailComponent,
  ProductSubCategoryUpdateComponent,
  ProductSubCategoryDeletePopupComponent,
  ProductSubCategoryDeleteDialogComponent,
  productSubCategoryRoute,
  productSubCategoryPopupRoute
} from './';

const ENTITY_STATES = [...productSubCategoryRoute, ...productSubCategoryPopupRoute];

@NgModule({
  imports: [EcommmerceFrameworkSharedModule, RouterModule.forChild(ENTITY_STATES)],
  declarations: [
    ProductSubCategoryComponent,
    ProductSubCategoryDetailComponent,
    ProductSubCategoryUpdateComponent,
    ProductSubCategoryDeleteDialogComponent,
    ProductSubCategoryDeletePopupComponent
  ],
  entryComponents: [
    ProductSubCategoryComponent,
    ProductSubCategoryUpdateComponent,
    ProductSubCategoryDeleteDialogComponent,
    ProductSubCategoryDeletePopupComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class EcommmerceFrameworkProductSubCategoryModule {}
