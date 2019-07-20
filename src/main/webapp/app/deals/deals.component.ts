import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'jhi-deals',
  templateUrl: './deals.component.html',
  styleUrls: ['./deals.component.scss']
})
export class DealsComponent implements OnInit {
  @Input() deals: any = [];
  constructor() {}

  ngOnInit() {}
}
