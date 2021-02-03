/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { DocumentType } from '../models/document-type';

/**
 * Document Type Controller
 */
@Injectable({
  providedIn: 'root',
})
class DocumentTypeControllerService extends __BaseService {
  static readonly saveUsingPOST2Path = '/api/document_type';
  static readonly updateUsingPUT2Path = '/api/document_type';
  static readonly getAllUsingGET2Path = '/api/document_type/all';
  static readonly getByIdUsingGET2Path = '/api/document_type/{id}';
  static readonly deleteUsingDELETE2Path = '/api/document_type/{id}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Save a DocumentType
   * @param DocumentType DocumentType
   * @return OK
   */
  saveUsingPOST2Response(DocumentType: DocumentType): __Observable<__StrictHttpResponse<DocumentType>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = DocumentType;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/document_type`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<DocumentType>;
      })
    );
  }
  /**
   * Save a DocumentType
   * @param DocumentType DocumentType
   * @return OK
   */
  saveUsingPOST2(DocumentType: DocumentType): __Observable<DocumentType> {
    return this.saveUsingPOST2Response(DocumentType).pipe(
      __map(_r => _r.body as DocumentType)
    );
  }

  /**
   * Update a DocumentType
   * @param DocumentType DocumentType
   * @return OK
   */
  updateUsingPUT2Response(DocumentType: DocumentType): __Observable<__StrictHttpResponse<DocumentType>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = DocumentType;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/api/document_type`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<DocumentType>;
      })
    );
  }
  /**
   * Update a DocumentType
   * @param DocumentType DocumentType
   * @return OK
   */
  updateUsingPUT2(DocumentType: DocumentType): __Observable<DocumentType> {
    return this.updateUsingPUT2Response(DocumentType).pipe(
      __map(_r => _r.body as DocumentType)
    );
  }

  /**
   * Get all supermarket DocumentType
   * @return OK
   */
  getAllUsingGET2Response(): __Observable<__StrictHttpResponse<Array<DocumentType>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/document_type/all`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<DocumentType>>;
      })
    );
  }
  /**
   * Get all supermarket DocumentType
   * @return OK
   */
  getAllUsingGET2(): __Observable<Array<DocumentType>> {
    return this.getAllUsingGET2Response().pipe(
      __map(_r => _r.body as Array<DocumentType>)
    );
  }

  /**
   * Search a DocumentType with a ID
   * @param id The id of the DocumentType
   * @return OK
   */
  getByIdUsingGET2Response(id: number): __Observable<__StrictHttpResponse<DocumentType>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/document_type/${encodeURIComponent(id)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<DocumentType>;
      })
    );
  }
  /**
   * Search a DocumentType with a ID
   * @param id The id of the DocumentType
   * @return OK
   */
  getByIdUsingGET2(id: number): __Observable<DocumentType> {
    return this.getByIdUsingGET2Response(id).pipe(
      __map(_r => _r.body as DocumentType)
    );
  }

  /**
   * Delete a DocumentType by ID
   * @param id The id of the DocumentType
   * @return OK
   */
  deleteUsingDELETE2Response(id: number): __Observable<__StrictHttpResponse<{}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/document_type/${encodeURIComponent(id)}`,
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
   * Delete a DocumentType by ID
   * @param id The id of the DocumentType
   * @return OK
   */
  deleteUsingDELETE2(id: number): __Observable<{}> {
    return this.deleteUsingDELETE2Response(id).pipe(
      __map(_r => _r.body as {})
    );
  }
}

module DocumentTypeControllerService {
}

export { DocumentTypeControllerService }
