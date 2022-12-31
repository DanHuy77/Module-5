import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Customer} from '../Customer';
import {CustomerType} from '../CustomerType';

@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {
  CUSTOMER_URL = 'http://localhost:3000/customer';
  CUSTOMER_TYPE_URL = 'http://localhost:3000/customerType';

  constructor(private httpClient: HttpClient) {
  }

  getAllCustomer(): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>(this.CUSTOMER_URL);
  }

  addCustomer(customer: Customer): Observable<Customer> {
    return this.httpClient.post(this.CUSTOMER_URL, customer);
  }

  findCustomerById(id: number): Observable<Customer> {
    return this.httpClient.get<Customer>(this.CUSTOMER_URL + '/' + id);
  }

  editCustomer(customer: Customer): Observable<Customer> {
    return this.httpClient.patch(this.CUSTOMER_URL + '/' + customer.id, customer);
  }


  removeCustomer(id: number): Observable<Customer> {
    return this.httpClient.delete(this.CUSTOMER_URL + '/' + id);
  }

  getAllCustomerType(): Observable<CustomerType[]> {
    return this.httpClient.get<CustomerType[]>(this.CUSTOMER_TYPE_URL);
  }
}
