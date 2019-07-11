import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig, NgbCarousel } from '@ng-bootstrap/ng-bootstrap';
import { trigger, transition, useAnimation } from '@angular/animations';
import { slideInLeft } from 'ng-animate';

@Component({
  selector: 'jhi-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.scss'],
  providers: [NgbCarouselConfig, NgbCarousel],
  animations: [trigger('slideInLeft', [transition('* => *', useAnimation(slideInLeft))])]
})
export class ImageSliderComponent implements OnInit {
  carousel: NgbCarousel;
  images = [
    {
      src: '../../content/images/ecom/shop-slider/slide1/bg.jpg',
      alt: 'First Image',
      text1: { label: '50% Discount', cssClass: 'animated fadeInDown' }
    },
    {
      src: '../../content/images/ecom/shop-slider/slide2/bg.jpg',
      alt: 'Second Image',
      text1: { label: '60% Discount', cssClass: 'animated fadeInDown' }
    },
    {
      src: '../../content/images/ecom/shop-slider/slide3/bg.jpg',
      alt: 'Third Image',
      text1: { label: 'Top Brands', cssClass: 'animated fadeInDown' }
    },
    {
      src: '../../content/images/ecom/shop-slider/slide4/bg.jpg',
      alt: 'Forth Image',
      text1: { label: 'Trending collections', cssClass: 'animated fadeInDown' }
    }
  ];
  constructor(config: NgbCarouselConfig, carousel: NgbCarousel) {
    config.showNavigationArrows = true;
    config.showNavigationIndicators = true;
    config.interval = 10000;
    config.wrap = true;
    config.keyboard = true;
    config.pauseOnHover = true;
    this.carousel = carousel;
  }

  ngOnInit() {
    this.carousel.pause();
  }
}
