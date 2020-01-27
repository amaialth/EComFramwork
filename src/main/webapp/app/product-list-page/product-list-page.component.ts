import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'jhi-product-list-page',
  templateUrl: './product-list-page.component.html',
  styleUrls: ['./product-list-page.component.scss']
})
export class ProductListPageComponent implements OnInit {
  // Pagination parameters.
  p: Number = 1;
  count: Number = 5;
  constructor() {}

  ngOnInit() {}
}
