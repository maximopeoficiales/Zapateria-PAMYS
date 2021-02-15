import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductUploadService {
  urlEndPoint = 'http://localhost:8090/api/product/photos/upload';
  urlEndPointProductImages =
    'http://localhost:8090/api/product_images/photos/upload';
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

  subirFotoProductoImages(
    archivos: any,
    idProduct: number
  ): Observable<HttpEvent<{}>> {
    // console.log(archivos);

    const formData = new FormData();
    archivos.forEach((archivo: any) => {
      formData.append('imgFile', archivo, archivo.name);
    });
    formData.append('idProduct', idProduct.toString());

    const req = new HttpRequest(
      'POST',
      `${this.urlEndPointProductImages}`,
      formData
    );
    return this.http.request(req);
  }
}
