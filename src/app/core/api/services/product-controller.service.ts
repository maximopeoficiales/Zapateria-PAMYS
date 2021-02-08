/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { Product } from '../models/product';

/**
 * Product Controller
 */
@Injectable({
  providedIn: 'root',
})
class ProductControllerService extends __BaseService {
  static readonly saveUsingPOST7Path = '/api/product';
  static readonly updateUsingPUT7Path = '/api/product';
  static readonly getAllUsingGET7Path = '/api/product/all';
  static readonly getByNameUsingGETPath = '/api/product/search/{name}';
  static readonly getBySlugUsingGETPath = '/api/product/slug/{slug}';
  static readonly getByIdUsingGET7Path = '/api/product/{id}';
  static readonly deleteUsingDELETE6Path = '/api/product/{id}';

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
  saveUsingPOST7Response(product: Product): __Observable<__StrictHttpResponse<Product>> {
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
  saveUsingPOST7(product: Product): __Observable<Product> {
    return this.saveUsingPOST7Response(product).pipe(
      __map(_r => _r.body as Product)
    );
  }

  /**
   * Update a Product
   * @param product product
   * @return OK
   */
  updateUsingPUT7Response(product: Product): __Observable<__StrictHttpResponse<Product>> {
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
  updateUsingPUT7(product: Product): __Observable<Product> {
    return this.updateUsingPUT7Response(product).pipe(
      __map(_r => _r.body as Product)
    );
  }

  /**
   * Get all supermarket products
   * @return OK
   */
  getAllUsingGET7Response(): __Observable<__StrictHttpResponse<Array<Product>>> {
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
  getAllUsingGET7(): __Observable<Array<Product>> {
    return this.getAllUsingGET7Response().pipe(
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
   * Search a product with a slug
   * @param slug The slug of the product
   * @return OK
   */
  getBySlugUsingGETResponse(slug: string): __Observable<__StrictHttpResponse<Product>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/product/slug/${encodeURIComponent(slug)}`,
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
   * Search a product with a slug
   * @param slug The slug of the product
   * @return OK
   */
  getBySlugUsingGET(slug: string): __Observable<Product> {
    return this.getBySlugUsingGETResponse(slug).pipe(
      __map(_r => _r.body as Product)
    );
  }

  /**
   * Search a product with a ID
   * @param id The id of the product
   * @return OK
   */
  getByIdUsingGET7Response(id: number): __Observable<__StrictHttpResponse<Product>> {
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
  getByIdUsingGET7(id: number): __Observable<Product> {
    return this.getByIdUsingGET7Response(id).pipe(
      __map(_r => _r.body as Product)
    );
  }

  /**
   * Delete a Product by ID
   * @param id The id of the product
   * @return OK
   */
  deleteUsingDELETE6Response(id: number): __Observable<__StrictHttpResponse<{}>> {
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
        return _r as __StrictHttpResponse<{}>;
      })
    );
  }
  /**
   * Delete a Product by ID
   * @param id The id of the product
   * @return OK
   */
  deleteUsingDELETE6(id: number): __Observable<{}> {
    return this.deleteUsingDELETE6Response(id).pipe(
      __map(_r => _r.body as {})
    );
  }
}

module ProductControllerService {
}

export { ProductControllerService }
