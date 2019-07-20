import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { EcommmerceFrameworkSharedModule } from 'app/shared';
import { HOME_ROUTE, HomeComponent } from './';
import { ImageSliderComponent } from '../image-slider/image-slider.component';
import { NewArrivalsComponent } from 'app/new-arrivals/new-arrivals.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ProductNavbarSideComponent } from '../product-navbar-side/product-navbar-side.component';
import { ProductListComponent } from '../product-list/product-list.component';
import { ProductCardComponent } from '../product-card/product-card.component';
import { CarouselProductCardComponent } from '../carousel-product-card/carousel-product-card.component';
import { DealsCardComponent } from '../deals-card/deals-card.component';
import { DealsComponent } from '../deals/deals.component';
import { ProductCarouselComponent } from '../product-carousel/product-carousel.component';
import { CaroselProductCardAllComponent } from '../carosel-product-card-all/carosel-product-card-all.component';
import { ProductCarouselAllComponent } from '../product-carousel-all/product-carousel-all.component';
@NgModule({
  imports: [EcommmerceFrameworkSharedModule, RouterModule.forChild([HOME_ROUTE]), CarouselModule],
  declarations: [
    HomeComponent,
    ImageSliderComponent,
    NewArrivalsComponent,
    ProductNavbarSideComponent,
    ProductListComponent,
    ProductCardComponent,
    CarouselProductCardComponent,
    DealsCardComponent,
    DealsComponent,
    ProductCarouselComponent,
    CaroselProductCardAllComponent,
    ProductCarouselAllComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class EcommmerceFrameworkHomeModule {}
