import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { EcommmerceFrameworkSharedModule } from 'app/shared';
import { HOME_ROUTE, HomeComponent } from './';
import { ImageSliderComponent } from '../image-slider/image-slider.component';
import { NewArrivalsComponent } from 'app/new-arrivals/new-arrivals.component';
import { CarouselModule } from 'ngx-owl-carousel-o';

@NgModule({
  imports: [EcommmerceFrameworkSharedModule, RouterModule.forChild([HOME_ROUTE]), CarouselModule],
  declarations: [HomeComponent, ImageSliderComponent, NewArrivalsComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class EcommmerceFrameworkHomeModule {}
