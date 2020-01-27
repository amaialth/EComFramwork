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
import { CarouselProductCardAllComponent } from '../carosel-product-card-all/carosel-product-card-all.component';
import { ProductCarouselAllComponent } from '../product-carousel-all/product-carousel-all.component';
import { ProductListPageComponent } from '../product-list-page/product-list-page.component';
import { BrandFilterComponent } from '../brand-filter/brand-filter.component';
import { PriceFilterComponent } from '../price-filter/price-filter.component';
import { CustomerReviewFilterComponent } from '../customer-review-filter/customer-review-filter.component';
import { ProductCardLadscapeComponent } from '../product-card-ladscape/product-card-ladscape.component';
import { CategoryPageComponent } from '../category-page/category-page.component';
@NgModule({
  imports: [EcommmerceFrameworkSharedModule, RouterModule.forRoot(HOME_ROUTE), CarouselModule],
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
    CarouselProductCardAllComponent,
    ProductCarouselAllComponent,
    ProductListPageComponent,
    BrandFilterComponent,
    PriceFilterComponent,
    CustomerReviewFilterComponent,
    ProductCardLadscapeComponent,
    CategoryPageComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class EcommmerceFrameworkHomeModule {}
