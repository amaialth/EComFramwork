import { Component, OnInit, Input } from '@angular/core';
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
  @Input() images: any = [];
  constructor(config: NgbCarouselConfig, carousel: NgbCarousel) {
    config.showNavigationArrows = true;
    config.showNavigationIndicators = true;
    config.interval = 5000;
    config.wrap = true;
    config.keyboard = true;
    config.pauseOnHover = true;
    this.carousel = carousel;
  }

  ngOnInit() {
    this.carousel.pause();
  }
}
