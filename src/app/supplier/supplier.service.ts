import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { supplier } from './models/supplier';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {

  constructor(private http: HttpClient) { }

  getSupplierList(page: number, rows: number, searchTerm: string): Observable<supplier[]>{
    return this.http.post<supplier[]>(`${environment.urlService}/supplier/GetPaginatedSupplier`, {page:page, rows:rows, searchTerm: searchTerm});
  }
}
