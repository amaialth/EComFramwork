import { Injectable } from '@angular/core';
import { EcomModel } from './model/EcomModel.model';
import { CommonUtilService } from './common-util.service';
import { ProductCategory } from './shared/model/product-category.model';

@Injectable({
  providedIn: 'root'
})
export class EcomModelService {
  ecomModel: EcomModel;
  constructor() {}
}
