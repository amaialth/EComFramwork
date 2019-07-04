import { NgModule } from '@angular/core';

import { EcommmerceFrameworkSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
  imports: [EcommmerceFrameworkSharedLibsModule],
  declarations: [JhiAlertComponent, JhiAlertErrorComponent],
  exports: [EcommmerceFrameworkSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class EcommmerceFrameworkSharedCommonModule {}
