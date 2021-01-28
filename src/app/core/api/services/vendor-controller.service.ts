/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { Vendor } from '../models/vendor';
import { ResponseEntity } from '../models/response-entity';

/**
 * Vendor Controller
 */
@Injectable({
  providedIn: 'root',
})
class VendorControllerService extends __BaseService {
  static readonly saveUsingPOST4Path = '/api/vendor';
  static readonly updateUsingPUT3Path = '/api/vendor';
  static readonly getAllUsingGET4Path = '/api/vendor/all';
  static readonly getByCompanyUsingGETPath = '/api/vendor/search/{company}';
  static readonly getByIdUsingGET3Path = '/api/vendor/{id}';
  static readonly deleteUsingDELETE3Path = '/api/vendor/{id}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Save a Vendor
   * @param vendor vendor
   * @return OK
   */
  saveUsingPOST4Response(vendor: Vendor): __Observable<__StrictHttpResponse<Vendor>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = vendor;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/vendor`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Vendor>;
      })
    );
  }
  /**
   * Save a Vendor
   * @param vendor vendor
   * @return OK
   */
  saveUsingPOST4(vendor: Vendor): __Observable<Vendor> {
    return this.saveUsingPOST4Response(vendor).pipe(
      __map(_r => _r.body as Vendor)
    );
  }

  /**
   * Update a Vendor
   * @param vendor vendor
   * @return OK
   */
  updateUsingPUT3Response(vendor: Vendor): __Observable<__StrictHttpResponse<Vendor>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = vendor;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/api/vendor`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Vendor>;
      })
    );
  }
  /**
   * Update a Vendor
   * @param vendor vendor
   * @return OK
   */
  updateUsingPUT3(vendor: Vendor): __Observable<Vendor> {
    return this.updateUsingPUT3Response(vendor).pipe(
      __map(_r => _r.body as Vendor)
    );
  }

  /**
   * Get all supermarket vendor
   * @return OK
   */
  getAllUsingGET4Response(): __Observable<__StrictHttpResponse<Array<Vendor>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/vendor/all`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<Vendor>>;
      })
    );
  }
  /**
   * Get all supermarket vendor
   * @return OK
   */
  getAllUsingGET4(): __Observable<Array<Vendor>> {
    return this.getAllUsingGET4Response().pipe(
      __map(_r => _r.body as Array<Vendor>)
    );
  }

  /**
   * Search a vendor with your name Company
   * @param company Name company of the vendor
   * @return OK
   */
  getByCompanyUsingGETResponse(company: string): __Observable<__StrictHttpResponse<Array<Vendor>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/vendor/search/${encodeURIComponent(company)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<Vendor>>;
      })
    );
  }
  /**
   * Search a vendor with your name Company
   * @param company Name company of the vendor
   * @return OK
   */
  getByCompanyUsingGET(company: string): __Observable<Array<Vendor>> {
    return this.getByCompanyUsingGETResponse(company).pipe(
      __map(_r => _r.body as Array<Vendor>)
    );
  }

  /**
   * Search a vendor with a ID
   * @param id The id of the vendor
   * @return OK
   */
  getByIdUsingGET3Response(id: number): __Observable<__StrictHttpResponse<Vendor>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/vendor/${encodeURIComponent(id)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Vendor>;
      })
    );
  }
  /**
   * Search a vendor with a ID
   * @param id The id of the vendor
   * @return OK
   */
  getByIdUsingGET3(id: number): __Observable<Vendor> {
    return this.getByIdUsingGET3Response(id).pipe(
      __map(_r => _r.body as Vendor)
    );
  }

  /**
   * Delete a Vendor by ID
   * @param id The id of the vendor
   * @return OK
   */
  deleteUsingDELETE3Response(id: number): __Observable<__StrictHttpResponse<ResponseEntity>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/vendor/${encodeURIComponent(id)}`,
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
   * Delete a Vendor by ID
   * @param id The id of the vendor
   * @return OK
   */
  deleteUsingDELETE3(id: number): __Observable<ResponseEntity> {
    return this.deleteUsingDELETE3Response(id).pipe(
      __map(_r => _r.body as ResponseEntity)
    );
  }
}

module VendorControllerService {
}

export { VendorControllerService }
