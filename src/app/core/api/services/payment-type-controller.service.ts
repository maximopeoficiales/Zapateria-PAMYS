/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { PaymentType } from '../models/payment-type';

/**
 * Payment Type Controller
 */
@Injectable({
  providedIn: 'root',
})
class PaymentTypeControllerService extends __BaseService {
  static readonly saveUsingPOST6Path = '/api/payment_type';
  static readonly updateUsingPUT6Path = '/api/payment_type';
  static readonly getAllUsingGET6Path = '/api/payment_type/all';
  static readonly getByIdUsingGET6Path = '/api/payment_type/{id}';
  static readonly deleteUsingDELETE5Path = '/api/payment_type/{id}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Save a PaymentType
   * @param paymenttype paymenttype
   * @return OK
   */
  saveUsingPOST6Response(paymenttype: PaymentType): __Observable<__StrictHttpResponse<PaymentType>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = paymenttype;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/payment_type`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<PaymentType>;
      })
    );
  }
  /**
   * Save a PaymentType
   * @param paymenttype paymenttype
   * @return OK
   */
  saveUsingPOST6(paymenttype: PaymentType): __Observable<PaymentType> {
    return this.saveUsingPOST6Response(paymenttype).pipe(
      __map(_r => _r.body as PaymentType)
    );
  }

  /**
   * Update a PaymentType
   * @param paymenttype paymenttype
   * @return OK
   */
  updateUsingPUT6Response(paymenttype: PaymentType): __Observable<__StrictHttpResponse<PaymentType>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = paymenttype;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/api/payment_type`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<PaymentType>;
      })
    );
  }
  /**
   * Update a PaymentType
   * @param paymenttype paymenttype
   * @return OK
   */
  updateUsingPUT6(paymenttype: PaymentType): __Observable<PaymentType> {
    return this.updateUsingPUT6Response(paymenttype).pipe(
      __map(_r => _r.body as PaymentType)
    );
  }

  /**
   * Get all supermarket paymenttype
   * @return OK
   */
  getAllUsingGET6Response(): __Observable<__StrictHttpResponse<Array<PaymentType>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/payment_type/all`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<PaymentType>>;
      })
    );
  }
  /**
   * Get all supermarket paymenttype
   * @return OK
   */
  getAllUsingGET6(): __Observable<Array<PaymentType>> {
    return this.getAllUsingGET6Response().pipe(
      __map(_r => _r.body as Array<PaymentType>)
    );
  }

  /**
   * Search a paymenttype with a ID
   * @param id The id of the paymenttype
   * @return OK
   */
  getByIdUsingGET6Response(id: number): __Observable<__StrictHttpResponse<PaymentType>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/payment_type/${encodeURIComponent(id)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<PaymentType>;
      })
    );
  }
  /**
   * Search a paymenttype with a ID
   * @param id The id of the paymenttype
   * @return OK
   */
  getByIdUsingGET6(id: number): __Observable<PaymentType> {
    return this.getByIdUsingGET6Response(id).pipe(
      __map(_r => _r.body as PaymentType)
    );
  }

  /**
   * Delete a PaymentType by ID
   * @param id The id of the paymenttype
   * @return OK
   */
  deleteUsingDELETE5Response(id: number): __Observable<__StrictHttpResponse<{}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/payment_type/${encodeURIComponent(id)}`,
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
   * Delete a PaymentType by ID
   * @param id The id of the paymenttype
   * @return OK
   */
  deleteUsingDELETE5(id: number): __Observable<{}> {
    return this.deleteUsingDELETE5Response(id).pipe(
      __map(_r => _r.body as {})
    );
  }
}

module PaymentTypeControllerService {
}

export { PaymentTypeControllerService }
