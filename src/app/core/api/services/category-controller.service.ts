/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { Category } from '../models/category';
import { ResponseEntity } from '../models/response-entity';

/**
 * Category Controller
 */
@Injectable({
  providedIn: 'root',
})
class CategoryControllerService extends __BaseService {
  static readonly saveUsingPOSTPath = '/api/category';
  static readonly updateUsingPUTPath = '/api/category';
  static readonly getAllUsingGETPath = '/api/category/all';
  static readonly getByIdUsingGETPath = '/api/category/{id}';
  static readonly deleteUsingDELETEPath = '/api/category/{id}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Save a Category
   * @param category category
   * @return OK
   */
  saveUsingPOSTResponse(category: Category): __Observable<__StrictHttpResponse<Category>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = category;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/category`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Category>;
      })
    );
  }
  /**
   * Save a Category
   * @param category category
   * @return OK
   */
  saveUsingPOST(category: Category): __Observable<Category> {
    return this.saveUsingPOSTResponse(category).pipe(
      __map(_r => _r.body as Category)
    );
  }

  /**
   * Update a Category
   * @param category category
   * @return OK
   */
  updateUsingPUTResponse(category: Category): __Observable<__StrictHttpResponse<Category>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = category;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/api/category`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Category>;
      })
    );
  }
  /**
   * Update a Category
   * @param category category
   * @return OK
   */
  updateUsingPUT(category: Category): __Observable<Category> {
    return this.updateUsingPUTResponse(category).pipe(
      __map(_r => _r.body as Category)
    );
  }

  /**
   * Get all supermarket category
   * @return OK
   */
  getAllUsingGETResponse(): __Observable<__StrictHttpResponse<Array<Category>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/category/all`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<Category>>;
      })
    );
  }
  /**
   * Get all supermarket category
   * @return OK
   */
  getAllUsingGET(): __Observable<Array<Category>> {
    return this.getAllUsingGETResponse().pipe(
      __map(_r => _r.body as Array<Category>)
    );
  }

  /**
   * Search a category with a ID
   * @param id The id of the category
   * @return OK
   */
  getByIdUsingGETResponse(id: number): __Observable<__StrictHttpResponse<Category>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/category/${encodeURIComponent(id)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Category>;
      })
    );
  }
  /**
   * Search a category with a ID
   * @param id The id of the category
   * @return OK
   */
  getByIdUsingGET(id: number): __Observable<Category> {
    return this.getByIdUsingGETResponse(id).pipe(
      __map(_r => _r.body as Category)
    );
  }

  /**
   * Delete a Category by ID
   * @param id The id of the category
   * @return OK
   */
  deleteUsingDELETEResponse(id: number): __Observable<__StrictHttpResponse<ResponseEntity>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/category/${encodeURIComponent(id)}`,
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
   * Delete a Category by ID
   * @param id The id of the category
   * @return OK
   */
  deleteUsingDELETE(id: number): __Observable<ResponseEntity> {
    return this.deleteUsingDELETEResponse(id).pipe(
      __map(_r => _r.body as ResponseEntity)
    );
  }
}

module CategoryControllerService {
}

export { CategoryControllerService }
