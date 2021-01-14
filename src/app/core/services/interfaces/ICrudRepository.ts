import { Observable } from 'rxjs';

export interface ICrudRepository<T, i> {
  findALl(): Observable<T[]>;
  findById(id: i): Observable<T>;
  save(obj: T): Observable<T>;
  update(obj: T): Observable<T>;
  deleteByID(id: i): Observable<T>;
}
