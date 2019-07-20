import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'jhi-carousel-product-card',
  templateUrl: './carousel-product-card.component.html',
  styleUrls: ['./carousel-product-card.component.scss']
})
export class CarouselProductCardAllComponent implements OnInit {
  @Input() product: any;
  constructor() {}

  ngOnInit() {}
}
