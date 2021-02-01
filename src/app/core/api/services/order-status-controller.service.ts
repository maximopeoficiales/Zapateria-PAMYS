/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { OrderStatus } from '../models/order-status';

/**
 * Order Status Controller
 */
@Injectable({
  providedIn: 'root',
})
class OrderStatusControllerService extends __BaseService {
  static readonly saveUsingPOST4Path = '/api/order_status';
  static readonly updateUsingPUT4Path = '/api/order_status';
  static readonly getAllUsingGET4Path = '/api/order_status/all';
  static readonly getByIdUsingGET4Path = '/api/order_status/{id}';
  static readonly deleteUsingDELETE4Path = '/api/order_status/{id}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Save a OrderStatus
   * @param orderStatus orderStatus
   * @return OK
   */
  saveUsingPOST4Response(orderStatus: OrderStatus): __Observable<__StrictHttpResponse<OrderStatus>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = orderStatus;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/order_status`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<OrderStatus>;
      })
    );
  }
  /**
   * Save a OrderStatus
   * @param orderStatus orderStatus
   * @return OK
   */
  saveUsingPOST4(orderStatus: OrderStatus): __Observable<OrderStatus> {
    return this.saveUsingPOST4Response(orderStatus).pipe(
      __map(_r => _r.body as OrderStatus)
    );
  }

  /**
   * Update a Order
   * @param orderStatus orderStatus
   * @return OK
   */
  updateUsingPUT4Response(orderStatus: OrderStatus): __Observable<__StrictHttpResponse<OrderStatus>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = orderStatus;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/api/order_status`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<OrderStatus>;
      })
    );
  }
  /**
   * Update a Order
   * @param orderStatus orderStatus
   * @return OK
   */
  updateUsingPUT4(orderStatus: OrderStatus): __Observable<OrderStatus> {
    return this.updateUsingPUT4Response(orderStatus).pipe(
      __map(_r => _r.body as OrderStatus)
    );
  }

  /**
   * Get all supermarket OrderStatus
   * @return OK
   */
  getAllUsingGET4Response(): __Observable<__StrictHttpResponse<Array<OrderStatus>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/order_status/all`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<OrderStatus>>;
      })
    );
  }
  /**
   * Get all supermarket OrderStatus
   * @return OK
   */
  getAllUsingGET4(): __Observable<Array<OrderStatus>> {
    return this.getAllUsingGET4Response().pipe(
      __map(_r => _r.body as Array<OrderStatus>)
    );
  }

  /**
   * Search a OrderStatus with a ID
   * @param id The id of the OrderStatus
   * @return OK
   */
  getByIdUsingGET4Response(id: number): __Observable<__StrictHttpResponse<OrderStatus>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/order_status/${encodeURIComponent(id)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<OrderStatus>;
      })
    );
  }
  /**
   * Search a OrderStatus with a ID
   * @param id The id of the OrderStatus
   * @return OK
   */
  getByIdUsingGET4(id: number): __Observable<OrderStatus> {
    return this.getByIdUsingGET4Response(id).pipe(
      __map(_r => _r.body as OrderStatus)
    );
  }

  /**
   * Delete a OrderStatus by ID
   * @param id The id of the OrderStatus
   * @return OK
   */
  deleteUsingDELETE4Response(id: number): __Observable<__StrictHttpResponse<{}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/order_status/${encodeURIComponent(id)}`,
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
   * Delete a OrderStatus by ID
   * @param id The id of the OrderStatus
   * @return OK
   */
  deleteUsingDELETE4(id: number): __Observable<{}> {
    return this.deleteUsingDELETE4Response(id).pipe(
      __map(_r => _r.body as {})
    );
  }
}

module OrderStatusControllerService {
}

export { OrderStatusControllerService }
