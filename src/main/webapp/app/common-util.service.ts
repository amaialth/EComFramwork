import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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
}
