import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { EcommmerceFrameworkSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [EcommmerceFrameworkSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [EcommmerceFrameworkSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class EcommmerceFrameworkSharedModule {
  static forRoot() {
    return {
      ngModule: EcommmerceFrameworkSharedModule
    };
  }
}
