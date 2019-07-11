import './vendor.ts';

import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgbDatepickerConfig } from '@ng-bootstrap/ng-bootstrap';
import { NgxWebstorageModule } from 'ngx-webstorage';
import { NgJhipsterModule } from 'ng-jhipster';

import { AuthInterceptor } from './blocks/interceptor/auth.interceptor';
import { AuthExpiredInterceptor } from './blocks/interceptor/auth-expired.interceptor';
import { ErrorHandlerInterceptor } from './blocks/interceptor/errorhandler.interceptor';
import { NotificationInterceptor } from './blocks/interceptor/notification.interceptor';
import { EcommmerceFrameworkSharedModule } from 'app/shared';
import { EcommmerceFrameworkCoreModule } from 'app/core';
import { EcommmerceFrameworkAppRoutingModule } from './app-routing.module';
import { EcommmerceFrameworkHomeModule } from './home/home.module';
import { EcommmerceFrameworkAccountModule } from './account/account.module';
import { EcommmerceFrameworkEntityModule } from './entities/entity.module';
import * as moment from 'moment';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NgxImageZoomModule } from 'ngx-image-zoom';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { JhiMainComponent, NavbarComponent, FooterComponent, PageRibbonComponent, ErrorComponent } from './layouts';
import { ProductDetailModelComponent } from './product-detail-model/product-detail-model.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgxWebstorageModule.forRoot({ prefix: 'jhi', separator: '-' }),
    NgJhipsterModule.forRoot({
      // set below to true to make alerts look like toast
      alertAsToast: false,
      alertTimeout: 5000
    }),
    EcommmerceFrameworkSharedModule.forRoot(),
    EcommmerceFrameworkCoreModule,
    EcommmerceFrameworkHomeModule,
    EcommmerceFrameworkAccountModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    EcommmerceFrameworkEntityModule,
    EcommmerceFrameworkAppRoutingModule,
    MDBBootstrapModule.forRoot(),
    NgxImageZoomModule.forRoot(),
    MatDialogModule,
    MatButtonModule,
    MatCheckboxModule
  ],
  schemas: [NO_ERRORS_SCHEMA],
  declarations: [JhiMainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent, ProductDetailModelComponent],
  entryComponents: [ProductDetailModelComponent],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthExpiredInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorHandlerInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: NotificationInterceptor,
      multi: true
    }
  ],
  bootstrap: [JhiMainComponent]
})
export class EcommmerceFrameworkAppModule {
  constructor(private dpConfig: NgbDatepickerConfig) {
    this.dpConfig.minDate = { year: moment().year() - 100, month: 1, day: 1 };
  }
}
