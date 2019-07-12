import { Injectable } from '@angular/core';
import { EcomModel } from './model/EcomModel.model';

@Injectable({
  providedIn: 'root'
})
export class EcomModelService {
  ecomModel: EcomModel;
  constructor() {}
}
