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
  static readonly saveUsingPOST10Path = '/api/voucher';
  static readonly updateUsingPUT10Path = '/api/voucher';
  static readonly getAllUsingGET10Path = '/api/voucher/all';
  static readonly uploadPhotoVoucherUsingPOSTPath = '/api/voucher/photos/upload';
  static readonly getByIdUsingGET10Path = '/api/voucher/{idVoucher}';
  static readonly deleteUsingDELETE9Path = '/api/voucher/{idVoucher}';
  static readonly getByIdClientUsingGETPath = '/api/voucher/{id_client}';

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
  saveUsingPOST10Response(voucher: Voucher): __Observable<__StrictHttpResponse<Voucher>> {
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
  saveUsingPOST10(voucher: Voucher): __Observable<Voucher> {
    return this.saveUsingPOST10Response(voucher).pipe(
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
  getAllUsingGET10Response(): __Observable<__StrictHttpResponse<Array<Voucher>>> {
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
  getAllUsingGET10(): __Observable<Array<Voucher>> {
    return this.getAllUsingGET10Response().pipe(
      __map(_r => _r.body as Array<Voucher>)
    );
  }

  /**
   * uploadPhotoVoucher
   * @param params The `VoucherControllerService.UploadPhotoVoucherUsingPOSTParams` containing the following parameters:
   *
   * - `imgFile`: imgFile
   *
   * - `idVoucher`: idVoucher
   *
   * @return OK
   */
  uploadPhotoVoucherUsingPOSTResponse(params: VoucherControllerService.UploadPhotoVoucherUsingPOSTParams): __Observable<__StrictHttpResponse<Voucher>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = params.imgFile;
    if (params.idVoucher != null) __params = __params.set('idVoucher', params.idVoucher.toString());
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/voucher/photos/upload`,
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
   * uploadPhotoVoucher
   * @param params The `VoucherControllerService.UploadPhotoVoucherUsingPOSTParams` containing the following parameters:
   *
   * - `imgFile`: imgFile
   *
   * - `idVoucher`: idVoucher
   *
   * @return OK
   */
  uploadPhotoVoucherUsingPOST(params: VoucherControllerService.UploadPhotoVoucherUsingPOSTParams): __Observable<Voucher> {
    return this.uploadPhotoVoucherUsingPOSTResponse(params).pipe(
      __map(_r => _r.body as Voucher)
    );
  }

  /**
   * Search a voucher with a ID
   * @param idVoucher The id of the voucher
   * @return OK
   */
  getByIdUsingGET10Response(idVoucher: number): __Observable<__StrictHttpResponse<Voucher>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/voucher/${encodeURIComponent(idVoucher)}`,
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
   * @param idVoucher The id of the voucher
   * @return OK
   */
  getByIdUsingGET10(idVoucher: number): __Observable<Voucher> {
    return this.getByIdUsingGET10Response(idVoucher).pipe(
      __map(_r => _r.body as Voucher)
    );
  }

  /**
   * Delete a Voucher by ID
   * @param idVoucher The id of the voucher
   * @return OK
   */
  deleteUsingDELETE9Response(idVoucher: number): __Observable<__StrictHttpResponse<{}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/voucher/${encodeURIComponent(idVoucher)}`,
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
   * @param idVoucher The id of the voucher
   * @return OK
   */
  deleteUsingDELETE9(idVoucher: number): __Observable<{}> {
    return this.deleteUsingDELETE9Response(idVoucher).pipe(
      __map(_r => _r.body as {})
    );
  }

  /**
   * Search a voucher with a idClient
   * @param id_client The id of the voucher
   * @return OK
   */
  getByIdClientUsingGETResponse(idClient: number): __Observable<__StrictHttpResponse<Array<Voucher>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/voucher/${encodeURIComponent(idClient)}`,
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
   * @param id_client The id of the voucher
   * @return OK
   */
  getByIdClientUsingGET(idClient: number): __Observable<Array<Voucher>> {
    return this.getByIdClientUsingGETResponse(idClient).pipe(
      __map(_r => _r.body as Array<Voucher>)
    );
  }
}

module VoucherControllerService {

  /**
   * Parameters for uploadPhotoVoucherUsingPOST
   */
  export interface UploadPhotoVoucherUsingPOSTParams {

    /**
     * imgFile
     */
    imgFile: string;

    /**
     * idVoucher
     */
    idVoucher: number;
  }
}

export { VoucherControllerService }
