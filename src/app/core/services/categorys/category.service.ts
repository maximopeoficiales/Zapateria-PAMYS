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
  //aqui obtendria el token
  header = new HttpHeaders({
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJsdWlzIiwiaWF0IjoxNjEwNzM4NTc3LCJleHAiOjE2MTA3NzQ1Nzd9.IC0OEa9pgs3iVctmxH6r_otsTH-3CDaeXJad8sJWuVU',
  });
  constructor(private http: HttpService) {}

  findALl(): Observable<Category[]> {
    return this.http.getRequest<Category[]>(
      apiEndPoint.category,
      'all',
      this.header
    );
  }
  findById(id: number): Observable<Category> {
    return this.http.getRequest<Category>(
      apiEndPoint.category,
      `/${id}`,
      this.header
    );
  }
  save(obj: Category): Observable<Category> {
    return this.http.postRequest<Category>(
      apiEndPoint.category,
      obj,
      this.header
    );
  }
  update(obj: Category): Observable<Category> {
    return this.http.putRequest<Category>(
      apiEndPoint.category,
      obj,
      this.header
    );
  }
  deleteByID(id: number): Observable<Category> {
    return this.http.deleteRequest<Category>(
      apiEndPoint.category,
      `/${id}`,
      this.header
    );
  }
}
