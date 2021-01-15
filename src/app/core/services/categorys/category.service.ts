import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../../models/Category';
import { apiEndPoint } from '../http/constants';
import { HttpService } from '../http/http.service';
import { ICrudRepository } from '../interfaces/ICrudRepository';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CategoryService implements ICrudRepository<Category, number> {
  constructor(private http: HttpService) {}
  findALl(): Observable<Category[]> {
    return this.http.getRequest<Category[]>(
      apiEndPoint.category,
      'all',
      new HttpHeaders({
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJsdWlzIiwiaWF0IjoxNjEwNjk5MzQxLCJleHAiOjE2MTA3MzUzNDF9.PROlSNfgkOmNCPcG7IAO9OTrSj832YLxI1aZ5ZwBfkY',
      })
    );
  }
  findById(id: number): Observable<Category> {
    return this.http.getRequest<Category>(apiEndPoint.category, `/${id}`);
  }
  save(obj: Category): Observable<Category> {
    return this.http.postRequest<Category>(apiEndPoint.category, obj);
  }
  update(obj: Category): Observable<Category> {
    return this.http.putRequest<Category>(apiEndPoint.category, obj);
  }
  deleteByID(id: number): Observable<Category> {
    return this.http.deleteRequest<Category>(apiEndPoint.category, `/${id}`);
  }
}
