import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vendor } from '../../models/Vendor';
import { apiEndPoint } from '../http/constants';
import { HttpService } from '../http/http.service';
import { ICrudRepository } from '../interfaces/ICrudRepository';

@Injectable({
  providedIn: 'root',
})
export class VendorService implements ICrudRepository<Vendor, number> {
  constructor(private http: HttpService) {}
  findALl(): Observable<Vendor[]> {
    return this.http.getRequest<Vendor[]>(apiEndPoint.category, '/all');
  }
  findById(id: number): Observable<Vendor> {
    return this.http.getRequest<Vendor>(apiEndPoint.category, `/${id}`);
  }
  save(obj: Vendor): Observable<Vendor> {
    return this.http.postRequest<Vendor>(apiEndPoint.category, { obj });
  }
  update(obj: Vendor): Observable<Vendor> {
    return this.http.putRequest<Vendor>(apiEndPoint.category, { obj });
  }
  deleteByID(id: number): Observable<Vendor> {
    return this.http.deleteRequest<Vendor>(apiEndPoint.category, `/${id}`);
  }
}
