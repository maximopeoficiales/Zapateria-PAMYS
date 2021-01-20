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
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTYxMTA4NDE0NCwiZXhwIjoxNjExMTIwMTQ0fQ.FfXgmMH1EaJuPYU6EaqwhXayKqv8RmHgi3QNEoW1Y48',
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
      `${id}`,
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
      `${id}`,
      this.header
    );
  }
}
