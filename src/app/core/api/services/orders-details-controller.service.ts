/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { OrderDetails } from '../models/order-details';
import { OrderDetailsCustom } from '../models/order-details-custom';
import { OrderDetailsPK } from '../models/order-details-pk';

/**
 * Orders Details Controller
 */
@Injectable({
  providedIn: 'root',
})
class OrdersDetailsControllerService extends __BaseService {
  static readonly saveUsingPOST5Path = '/api/order_details';
  static readonly updateUsingPUT5Path = '/api/order_details';
  static readonly deleteByIdOrderAndIdProductUsingDELETEPath = '/api/order_details';
  static readonly getAllUsingGET5Path = '/api/order_details/all';
  static readonly getByIdUsingGET5Path = '/api/order_details/{id}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Save a OrdersDetails
   * @param ordersDetailsCustom ordersDetailsCustom
   * @return OK
   */
  saveUsingPOST5Response(ordersDetailsCustom: OrderDetailsCustom): __Observable<__StrictHttpResponse<Array<OrderDetails>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = ordersDetailsCustom;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/order_details`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<OrderDetails>>;
      })
    );
  }
  /**
   * Save a OrdersDetails
   * @param ordersDetailsCustom ordersDetailsCustom
   * @return OK
   */
  saveUsingPOST5(ordersDetailsCustom: OrderDetailsCustom): __Observable<Array<OrderDetails>> {
    return this.saveUsingPOST5Response(ordersDetailsCustom).pipe(
      __map(_r => _r.body as Array<OrderDetails>)
    );
  }

  /**
   * Update a OrdersDetails
   * @param ordersDetailsCustom ordersDetailsCustom
   * @return OK
   */
  updateUsingPUT5Response(ordersDetailsCustom: OrderDetailsCustom): __Observable<__StrictHttpResponse<Array<OrderDetails>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = ordersDetailsCustom;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/api/order_details`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<OrderDetails>>;
      })
    );
  }
  /**
   * Update a OrdersDetails
   * @param ordersDetailsCustom ordersDetailsCustom
   * @return OK
   */
  updateUsingPUT5(ordersDetailsCustom: OrderDetailsCustom): __Observable<Array<OrderDetails>> {
    return this.updateUsingPUT5Response(ordersDetailsCustom).pipe(
      __map(_r => _r.body as Array<OrderDetails>)
    );
  }

  /**
   * Delete  OrdersDetails by IdOrder and IdProduct
   * @param orderDetailsPK orderDetailsPK
   * @return OK
   */
  deleteByIdOrderAndIdProductUsingDELETEResponse(orderDetailsPK: OrderDetailsPK): __Observable<__StrictHttpResponse<Array<OrderDetails>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = orderDetailsPK;
    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/order_details`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<OrderDetails>>;
      })
    );
  }
  /**
   * Delete  OrdersDetails by IdOrder and IdProduct
   * @param orderDetailsPK orderDetailsPK
   * @return OK
   */
  deleteByIdOrderAndIdProductUsingDELETE(orderDetailsPK: OrderDetailsPK): __Observable<Array<OrderDetails>> {
    return this.deleteByIdOrderAndIdProductUsingDELETEResponse(orderDetailsPK).pipe(
      __map(_r => _r.body as Array<OrderDetails>)
    );
  }

  /**
   * Get all supermarket Orderdetails
   * @return OK
   */
  getAllUsingGET5Response(): __Observable<__StrictHttpResponse<Array<OrderDetails>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/order_details/all`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<OrderDetails>>;
      })
    );
  }
  /**
   * Get all supermarket Orderdetails
   * @return OK
   */
  getAllUsingGET5(): __Observable<Array<OrderDetails>> {
    return this.getAllUsingGET5Response().pipe(
      __map(_r => _r.body as Array<OrderDetails>)
    );
  }

  /**
   * Search a OrdersDetails with a IDOrder
   * @param id The id of the OrdersDetails
   * @return OK
   */
  getByIdUsingGET5Response(id: number): __Observable<__StrictHttpResponse<Array<OrderDetails>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/order_details/${encodeURIComponent(id)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<OrderDetails>>;
      })
    );
  }
  /**
   * Search a OrdersDetails with a IDOrder
   * @param id The id of the OrdersDetails
   * @return OK
   */
  getByIdUsingGET5(id: number): __Observable<Array<OrderDetails>> {
    return this.getByIdUsingGET5Response(id).pipe(
      __map(_r => _r.body as Array<OrderDetails>)
    );
  }
}

module OrdersDetailsControllerService {
}

export { OrdersDetailsControllerService }
