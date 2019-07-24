import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SERVER_API_URL } from 'app/app.constants';
import { ProductCategory } from './shared/model/product-category.model';

@Injectable({
  providedIn: 'root'
})
export class CommonUtilService {
  constructor(private http: HttpClient) {}

  public getDeals(): Observable<any> {
    return this.http.get('../content/json/deals.json');
  }
  public getDeals2(): Observable<any> {
    return this.http.get('../content/json/deals2.json');
  }
  public getProducts(): Observable<any> {
    return this.http.get('../content/json/product-carousel.json');
  }
  public getProducts2(): Observable<any> {
    return this.http.get('../content/json/product-carousel2.json');
  }
  public getProductCategory(): Observable<ProductCategory> {
    return this.http.get(SERVER_API_URL + 'api/ecom/product-categories');
  }
}
