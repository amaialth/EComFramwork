import { Component, OnInit, Input } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'jhi-product-carousel-all',
  templateUrl: './product-carousel-all.component.html',
  styleUrls: ['./product-carousel-all.component.scss']
})
export class ProductCarouselAllComponent implements OnInit {
  @Input() products: any;
  customOptions: OwlOptions = {
    loop: true,
    center: false,
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
        items: 1,
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
