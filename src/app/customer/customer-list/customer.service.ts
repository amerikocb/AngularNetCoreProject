import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from '../models/customer';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private httpClient: HttpClient) { 

  }

  getCustomerList(page: number, rows: number):Observable<Customer[]>{
    return this.httpClient.get<Customer[]>(`${environment.urlService}/Customer/GetPaginatedCustomer/${page}/${rows}`)
  }
}
