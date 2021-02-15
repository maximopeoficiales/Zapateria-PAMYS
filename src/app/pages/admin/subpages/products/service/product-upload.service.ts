import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductUploadService {
  urlEndPoint = 'http://localhost:8090/api/product/photos/upload';
  constructor(private http: HttpClient) {}
  // subir foto del cliente
  subirFotoProducto(
    archivo: File,
    idProduct: number
  ): Observable<HttpEvent<{}>> {
    const formData = new FormData();
    formData.append('imgFile', archivo);
    formData.append('idProduct', idProduct.toString());
    const req = new HttpRequest('POST', `${this.urlEndPoint}`, formData);
    return this.http.request(req);
  }
}
