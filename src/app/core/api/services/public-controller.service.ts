/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { Client } from '../models/client';
import { Product } from '../models/product';

/**
 * Public Controller
 */
@Injectable({
  providedIn: 'root',
})
class PublicControllerService extends __BaseService {
  static readonly saveUsingPOST9Path = '/api/public/client';
  static readonly getAllUsingGET9Path = '/api/public/product';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Save a Client
   * @param client client
   * @return OK
   */
  saveUsingPOST9Response(client: Client): __Observable<__StrictHttpResponse<Client>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = client;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/public/client`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Client>;
      })
    );
  }
  /**
   * Save a Client
   * @param client client
   * @return OK
   */
  saveUsingPOST9(client: Client): __Observable<Client> {
    return this.saveUsingPOST9Response(client).pipe(
      __map(_r => _r.body as Client)
    );
  }

  /**
   * Get all products
   * @return OK
   */
  getAllUsingGET9Response(): __Observable<__StrictHttpResponse<Array<Product>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/public/product`,
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
   * Get all products
   * @return OK
   */
  getAllUsingGET9(): __Observable<Array<Product>> {
    return this.getAllUsingGET9Response().pipe(
      __map(_r => _r.body as Array<Product>)
    );
  }
}

module PublicControllerService {
}

export { PublicControllerService }
