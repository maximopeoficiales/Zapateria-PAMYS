/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { Order } from '../models/order';

/**
 * Order Controller
 */
@Injectable({
  providedIn: 'root',
})
class OrderControllerService extends __BaseService {
  static readonly saveUsingPOST3Path = '/api/order';
  static readonly updateUsingPUT3Path = '/api/order';
  static readonly getAllUsingGET3Path = '/api/order/all';
  static readonly getByIdUsingGET3Path = '/api/order/{id}';
  static readonly deleteUsingDELETE3Path = '/api/order/{id}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Save a Order
   * @param Order Order
   * @return OK
   */
  saveUsingPOST3Response(Order: Order): __Observable<__StrictHttpResponse<Order>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = Order;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/order`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Order>;
      })
    );
  }
  /**
   * Save a Order
   * @param Order Order
   * @return OK
   */
  saveUsingPOST3(Order: Order): __Observable<Order> {
    return this.saveUsingPOST3Response(Order).pipe(
      __map(_r => _r.body as Order)
    );
  }

  /**
   * Update a Order
   * @param Order Order
   * @return OK
   */
  updateUsingPUT3Response(Order: Order): __Observable<__StrictHttpResponse<Order>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = Order;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/api/order`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Order>;
      })
    );
  }
  /**
   * Update a Order
   * @param Order Order
   * @return OK
   */
  updateUsingPUT3(Order: Order): __Observable<Order> {
    return this.updateUsingPUT3Response(Order).pipe(
      __map(_r => _r.body as Order)
    );
  }

  /**
   * Get all supermarket Order
   * @return OK
   */
  getAllUsingGET3Response(): __Observable<__StrictHttpResponse<Array<Order>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/order/all`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<Order>>;
      })
    );
  }
  /**
   * Get all supermarket Order
   * @return OK
   */
  getAllUsingGET3(): __Observable<Array<Order>> {
    return this.getAllUsingGET3Response().pipe(
      __map(_r => _r.body as Array<Order>)
    );
  }

  /**
   * Search a Order with a ID
   * @param id The id of the Order
   * @return OK
   */
  getByIdUsingGET3Response(id: number): __Observable<__StrictHttpResponse<Order>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/order/${encodeURIComponent(id)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Order>;
      })
    );
  }
  /**
   * Search a Order with a ID
   * @param id The id of the Order
   * @return OK
   */
  getByIdUsingGET3(id: number): __Observable<Order> {
    return this.getByIdUsingGET3Response(id).pipe(
      __map(_r => _r.body as Order)
    );
  }

  /**
   * Delete a Order by ID
   * @param id The id of the Order
   * @return OK
   */
  deleteUsingDELETE3Response(id: number): __Observable<__StrictHttpResponse<{}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/order/${encodeURIComponent(id)}`,
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
   * Delete a Order by ID
   * @param id The id of the Order
   * @return OK
   */
  deleteUsingDELETE3(id: number): __Observable<{}> {
    return this.deleteUsingDELETE3Response(id).pipe(
      __map(_r => _r.body as {})
    );
  }
}

module OrderControllerService {
}

export { OrderControllerService }
