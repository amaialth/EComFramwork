import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'jhi-deals-card',
  templateUrl: './deals-card.component.html',
  styleUrls: ['./deals-card.component.scss']
})
export class DealsCardComponent implements OnInit {
  @Input() deal: Deal;
  constructor() {}

  ngOnInit() {}
}
