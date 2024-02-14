import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { environment } from '../config';
import Sale from './interfaces/sale';

@Injectable({
  providedIn: 'root',
})
export class SaleService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getSales(): Observable<any> {
    return this.http
      .get<Sale[]>(`${this.apiUrl}/sales`)
      .pipe(map((response: any) => response as Sale[]));
  }

  getSale(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/sales/${id}`);
  }

  createSale(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/sales`, data);
  }

  updateSale(id: number, data: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/sales/${id}`, data);
  }

  deleteSale(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/sales/${id}`);
  }
}
