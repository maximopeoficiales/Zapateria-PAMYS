/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { Voucher } from '../models/voucher';

/**
 * Voucher Controller
 */
@Injectable({
  providedIn: 'root',
})
class VoucherControllerService extends __BaseService {
  static readonly saveUsingPOST11Path = '/api/voucher';
  static readonly updateUsingPUT10Path = '/api/voucher';
  static readonly getAllUsingGET11Path = '/api/voucher/all';
  static readonly getByIdClientUsingGETPath = '/api/voucher/{id_client}';
  static readonly getByIdUsingGET10Path = '/api/voucher/{id}';
  static readonly deleteUsingDELETE9Path = '/api/voucher/{id}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Save a Voucher
   * @param voucher voucher
   * @return OK
   */
  saveUsingPOST11Response(voucher: Voucher): __Observable<__StrictHttpResponse<Voucher>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = voucher;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/voucher`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Voucher>;
      })
    );
  }
  /**
   * Save a Voucher
   * @param voucher voucher
   * @return OK
   */
  saveUsingPOST11(voucher: Voucher): __Observable<Voucher> {
    return this.saveUsingPOST11Response(voucher).pipe(
      __map(_r => _r.body as Voucher)
    );
  }

  /**
   * Update a Voucher
   * @param voucher voucher
   * @return OK
   */
  updateUsingPUT10Response(voucher: Voucher): __Observable<__StrictHttpResponse<Voucher>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = voucher;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/api/voucher`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Voucher>;
      })
    );
  }
  /**
   * Update a Voucher
   * @param voucher voucher
   * @return OK
   */
  updateUsingPUT10(voucher: Voucher): __Observable<Voucher> {
    return this.updateUsingPUT10Response(voucher).pipe(
      __map(_r => _r.body as Voucher)
    );
  }

  /**
   * Get all supermarket voucher
   * @return OK
   */
  getAllUsingGET11Response(): __Observable<__StrictHttpResponse<Array<Voucher>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/voucher/all`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<Voucher>>;
      })
    );
  }
  /**
   * Get all supermarket voucher
   * @return OK
   */
  getAllUsingGET11(): __Observable<Array<Voucher>> {
    return this.getAllUsingGET11Response().pipe(
      __map(_r => _r.body as Array<Voucher>)
    );
  }

  /**
   * Search a voucher with a idClient
   * @param id The id of the voucher
   * @return OK
   */
  getByIdClientUsingGETResponse(id_client: number): __Observable<__StrictHttpResponse<Array<Voucher>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/voucher/${encodeURIComponent(id_client)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<Voucher>>;
      })
    );
  }
  /**
   * Search a voucher with a idClient
   * @param id The id of the voucher
   * @return OK
   */
  getByIdClientUsingGET(id: number): __Observable<Array<Voucher>> {
    return this.getByIdClientUsingGETResponse(id).pipe(
      __map(_r => _r.body as Array<Voucher>)
    );
  }

  /**
   * Search a voucher with a ID
   * @param id The id of the voucher
   * @return OK
   */
  getByIdUsingGET10Response(id: number): __Observable<__StrictHttpResponse<Voucher>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/voucher/${encodeURIComponent(id)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Voucher>;
      })
    );
  }
  /**
   * Search a voucher with a ID
   * @param id The id of the voucher
   * @return OK
   */
  getByIdUsingGET10(id: number): __Observable<Voucher> {
    return this.getByIdUsingGET10Response(id).pipe(
      __map(_r => _r.body as Voucher)
    );
  }

  /**
   * Delete a Voucher by ID
   * @param id The id of the voucher
   * @return OK
   */
  deleteUsingDELETE9Response(id: number): __Observable<__StrictHttpResponse<{}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/voucher/${encodeURIComponent(id)}`,
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
   * Delete a Voucher by ID
   * @param id The id of the voucher
   * @return OK
   */
  deleteUsingDELETE9(id: number): __Observable<{}> {
    return this.deleteUsingDELETE9Response(id).pipe(
      __map(_r => _r.body as {})
    );
  }
}

module VoucherControllerService {
}

export { VoucherControllerService }
