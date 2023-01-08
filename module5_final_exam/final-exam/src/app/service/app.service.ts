import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Package} from "../model/Package";
import {Product} from "../model/Product";

@Injectable({
  providedIn: 'root'
})
export class AppService {
  PACKAGE_URL = 'http://localhost:3000/package'

  constructor(private httpClient: HttpClient) {
  }

  getAllPackage(): Observable<any> {
    return this.httpClient.get<any>('http://localhost:8080/package/');
  }

  addPackage(packages: Package): Observable<any> {
    return this.httpClient.post('http://localhost:8080/package', packages);
  }

  findPackageById(id: number): Observable<Package> {
    return this.httpClient.get<Package>('http://localhost:8080/package/' + id);
  }

  editPackage(packages: Package): Observable<Package> {
    return this.httpClient.patch('http://localhost:8080/package/' + packages.id, packages);
  }


  removePackage(id: number): Observable<Package> {
    return this.httpClient.delete('http://localhost:8080/package/' + id);
  }

  getAllProduct(): Observable<any> {
    return this.httpClient.get<any>('http://localhost:8080/product');
  }

  searchByProductNameAndExpireDateAndImportDate(productName: string, importDate: string, startDate: string, endDate: string): Observable<any> {
    if (productName == "" && importDate == "" && startDate == "" && endDate == "") {
      return this.httpClient.get<any>('http://localhost:8080/package/');
    } else {
      return this.httpClient.get<any>('http://localhost:8080/package?productName=' + productName + '&importDate=' + importDate + '&startDate=' + startDate + '&endDate=' + endDate);
    }
  }
}
