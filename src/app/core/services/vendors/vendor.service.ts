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
    return this.http.getRequest<Vendor[]>(apiEndPoint.vendor, 'all');
  }
  findById(id: number): Observable<Vendor> {
    return this.http.getRequest<Vendor>(apiEndPoint.vendor, `/${id}`);
  }
  save(obj: Vendor): Observable<Vendor> {
    return this.http.postRequest<Vendor>(apiEndPoint.vendor, obj);
  }
  update(obj: Vendor): Observable<Vendor> {
    return this.http.putRequest<Vendor>(apiEndPoint.vendor, obj);
  }
  deleteByID(id: number): Observable<Vendor> {
    return this.http.deleteRequest<Vendor>(apiEndPoint.vendor, `/${id}`);
  }
}
