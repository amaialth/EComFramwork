import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'jhi-carosel-product-card-all',
  templateUrl: './carosel-product-card-all.component.html',
  styleUrls: ['./carosel-product-card-all.component.scss']
})
export class CarouselProductCardAllComponent implements OnInit {
  @Input() product: any;
  constructor() {}

  ngOnInit() {}
}
