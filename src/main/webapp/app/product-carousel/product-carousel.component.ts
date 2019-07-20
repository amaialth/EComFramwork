import { Component, OnInit, Input } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CommonUtilService } from 'app/common-util.service';

@Component({
  selector: 'jhi-product-carousel',
  templateUrl: './product-carousel.component.html',
  styleUrls: ['./product-carousel.component.scss']
})
export class ProductCarouselComponent implements OnInit {
  @Input() products: any;
  width = 300;
  customOptions: OwlOptions = {
    loop: true,
    center: true,
    items: 5,
    slideBy: 3,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 200,
    autoWidth: false,
    autoHeight: false,
    navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
    responsive: {
      0: {
        items: 1,
        slideBy: 1
      },
      400: {
        items: 2,
        slideBy: 1
      },
      740: {
        items: 3,
        slideBy: 2
      },
      940: {
        items: 5
      }
    },
    nav: true
  };
  constructor() {}

  ngOnInit() {}
}
