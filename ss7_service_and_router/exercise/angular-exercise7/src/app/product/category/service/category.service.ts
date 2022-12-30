import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Category} from '../model/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  CATEGORY_URL = 'http://localhost:3000/categories';

  constructor(private httpClient: HttpClient) {
  }

  getAllCategories(): Observable<Category[]> {
    return this.httpClient.get<Category[]>(this.CATEGORY_URL);
  }

  saveCategory(category: Category): Observable<Category> {
    return this.httpClient.post(this.CATEGORY_URL, category);
  }

  editCategory(category: Category): Observable<Category> {
    return this.httpClient.patch(this.CATEGORY_URL + '/' + category.id, category);
  }

  findCategoryById(id: number): Observable<Category> {
    return this.httpClient.get<Category>(this.CATEGORY_URL + '/' + id);
  }
}
