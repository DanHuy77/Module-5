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

  getAllCustomer(): Observable<any> {
    // return this.httpClient.get<Customer[]>(this.CUSTOMER_URL);
    return this.httpClient.get<any>('http://localhost:8080/customer');
  }

  addCustomer(customer: Customer): Observable<Customer> {
    // return this.httpClient.post(this.CUSTOMER_URL, customer);
    return this.httpClient.post('http://localhost:8080/customer', customer);
  }

  findCustomerById(id: number): Observable<Customer> {
    // return this.httpClient.get<Customer>(this.CUSTOMER_URL + '/' + id);
    return this.httpClient.get<Customer>('http://localhost:8080/customer/' + id);
  }

  editCustomer(customer: Customer): Observable<Customer> {
    // return this.httpClient.patch(this.CUSTOMER_URL + '/' + customer.id, customer);
    return this.httpClient.patch('http://localhost:8080/customer/' + customer.id, customer);
  }


  removeCustomer(id: number): Observable<Customer> {
    // return this.httpClient.delete(this.CUSTOMER_URL + '/' + id);
    return this.httpClient.delete('http://localhost:8080/customer/' + id);
  }

  getAllCustomerType(): Observable<CustomerType[]> {
    // return this.httpClient.get<CustomerType[]>(this.CUSTOMER_TYPE_URL);
    return this.httpClient.get<CustomerType[]>('http://localhost:8080/customer/customerType');
  }

  searchByNameAndEmail(name: string, email: string, customerType: string): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>(
      this.CUSTOMER_URL + '?name_like=' + name + '&email_like=' + email + '&customerType.name_like=' + customerType);
  }
}
