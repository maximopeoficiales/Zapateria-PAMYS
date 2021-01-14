import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../../models/Category';
import { apiEndPoint } from '../http/constants';
import { HttpService } from '../http/http.service';
import { ICrudRepository } from '../interfaces/ICrudRepository';

@Injectable({
  providedIn: 'root',
})
export class CategoryService implements ICrudRepository<Category, number> {
  constructor(private http: HttpService) {}
  findALl(): Observable<Category[]> {
    return this.http.getRequest<Category[]>(apiEndPoint.vendor, '/all');
  }
  findById(id: number): Observable<Category> {
    return this.http.getRequest<Category>(apiEndPoint.vendor, `/${id}`);
  }
  save(obj: Category): Observable<Category> {
    return this.http.postRequest<Category>(apiEndPoint.vendor, { obj });
  }
  update(obj: Category): Observable<Category> {
    return this.http.putRequest<Category>(apiEndPoint.vendor, { obj });
  }
  deleteByID(id: number): Observable<Category> {
    return this.http.deleteRequest<Category>(apiEndPoint.vendor, `/${id}`);
  }
}
