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
}
