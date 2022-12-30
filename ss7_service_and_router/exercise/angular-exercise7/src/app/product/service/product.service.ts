import {Injectable} from '@angular/core';
import {Product} from '../model/product';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  PRODUCT_URL = 'http://localhost:3000/products';

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.PRODUCT_URL);
  }

  saveProduct(product: Product): Observable<Product> {
    return this.httpClient.post(this.PRODUCT_URL, product);
  }

  findProductById(id: number): Observable<Product> {
    return this.httpClient.get<Product>(this.PRODUCT_URL + '/' + id);
  }

  editProduct(product: Product): Observable<Product> {
    return this.httpClient.patch(this.PRODUCT_URL + '/' + product.id, product);
  }


  removeProduct(id: number): Observable<Product> {
    return this.httpClient.delete(this.PRODUCT_URL + '/' + id);
  }
}

