import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Contract} from '../Contract';


@Injectable({
  providedIn: 'root'
})
export class ContractService {
 CONTRACT_URL = 'http://localhost:3000/contract';
  constructor(private httpClient: HttpClient) {
  }
  getAllContract(): Observable<Contract[]> {
    return this.httpClient.get<Contract[]>(this.CONTRACT_URL);
  }

  addContract(contract: Contract): Observable<Contract> {
    return this.httpClient.post(this.CONTRACT_URL, contract);
  }

  findContractById(id: number): Observable<Contract> {
    return this.httpClient.get<Contract>(this.CONTRACT_URL + '/' + id);
  }

  editContract(contract: Contract): Observable<Contract> {
    return this.httpClient.patch(this.CONTRACT_URL + '/' + contract.id, contract);
  }


  removeCustomer(id: number): Observable<Contract> {
    return this.httpClient.delete(this.CONTRACT_URL + '/' + id);
  }
}
