/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { Product } from '../models/product';
import { ResponseEntity } from '../models/response-entity';

/**
 * Product Controller
 */
@Injectable({
  providedIn: 'root',
})
class ProductControllerService extends __BaseService {
  static readonly saveUsingPOST2Path = '/api/product';
  static readonly updateUsingPUT2Path = '/api/product';
  static readonly getAllUsingGET2Path = '/api/product/all';
  static readonly getByNameUsingGETPath = '/api/product/search/{name}';
  static readonly getByIdUsingGET2Path = '/api/product/{id}';
  static readonly deleteUsingDELETE2Path = '/api/product/{id}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Save a Product
   * @param product product
   * @return OK
   */
  saveUsingPOST2Response(product: Product): __Observable<__StrictHttpResponse<Product>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = product;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/product`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Product>;
      })
    );
  }
  /**
   * Save a Product
   * @param product product
   * @return OK
   */
  saveUsingPOST2(product: Product): __Observable<Product> {
    return this.saveUsingPOST2Response(product).pipe(
      __map(_r => _r.body as Product)
    );
  }

  /**
   * Update a Product
   * @param product product
   * @return OK
   */
  updateUsingPUT2Response(product: Product): __Observable<__StrictHttpResponse<Product>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = product;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/api/product`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Product>;
      })
    );
  }
  /**
   * Update a Product
   * @param product product
   * @return OK
   */
  updateUsingPUT2(product: Product): __Observable<Product> {
    return this.updateUsingPUT2Response(product).pipe(
      __map(_r => _r.body as Product)
    );
  }

  /**
   * Get all supermarket products
   * @return OK
   */
  getAllUsingGET2Response(): __Observable<__StrictHttpResponse<Array<Product>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/product/all`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<Product>>;
      })
    );
  }
  /**
   * Get all supermarket products
   * @return OK
   */
  getAllUsingGET2(): __Observable<Array<Product>> {
    return this.getAllUsingGET2Response().pipe(
      __map(_r => _r.body as Array<Product>)
    );
  }

  /**
   * Search a product with your name Company
   * @param name Product Name
   * @return OK
   */
  getByNameUsingGETResponse(name: string): __Observable<__StrictHttpResponse<Array<Product>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/product/search/${encodeURIComponent(name)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<Product>>;
      })
    );
  }
  /**
   * Search a product with your name Company
   * @param name Product Name
   * @return OK
   */
  getByNameUsingGET(name: string): __Observable<Array<Product>> {
    return this.getByNameUsingGETResponse(name).pipe(
      __map(_r => _r.body as Array<Product>)
    );
  }

  /**
   * Search a product with a ID
   * @param id The id of the product
   * @return OK
   */
  getByIdUsingGET2Response(id: number): __Observable<__StrictHttpResponse<Product>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/product/${encodeURIComponent(id)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Product>;
      })
    );
  }
  /**
   * Search a product with a ID
   * @param id The id of the product
   * @return OK
   */
  getByIdUsingGET2(id: number): __Observable<Product> {
    return this.getByIdUsingGET2Response(id).pipe(
      __map(_r => _r.body as Product)
    );
  }

  /**
   * Delete a Product by ID
   * @param id The id of the product
   * @return OK
   */
  deleteUsingDELETE2Response(id: number): __Observable<__StrictHttpResponse<ResponseEntity>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/product/${encodeURIComponent(id)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ResponseEntity>;
      })
    );
  }
  /**
   * Delete a Product by ID
   * @param id The id of the product
   * @return OK
   */
  deleteUsingDELETE2(id: number): __Observable<ResponseEntity> {
    return this.deleteUsingDELETE2Response(id).pipe(
      __map(_r => _r.body as ResponseEntity)
    );
  }
}

module ProductControllerService {
}

export { ProductControllerService }
