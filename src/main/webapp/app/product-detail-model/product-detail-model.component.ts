import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'jhi-product-detail-model',
  templateUrl: './product-detail-model.component.html',
  styleUrls: ['./product-detail-model.component.scss']
})
export class ProductDetailModelComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<ProductDetailModelComponent>) {}

  ngOnInit() {}
}
