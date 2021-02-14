/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { ProductImages } from '../models/product-images';

/**
 * Product Images Controller
 */
@Injectable({
  providedIn: 'root',
})
class ProductImagesControllerService extends __BaseService {
  static readonly saveUsingPOST8Path = '/api/product_images';
  static readonly updateUsingPUT8Path = '/api/product_images';
  static readonly getAllUsingGET8Path = '/api/product_images/all';
  static readonly uploadPhotoProductUsingPOST1Path = '/api/product_images/photos/upload';
  static readonly getByIdUsingGET8Path = '/api/product_images/{id}';
  static readonly deleteUsingDELETE7Path = '/api/product_images/{id}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Save a Product Image
   * @param productImages productImages
   * @return OK
   */
  saveUsingPOST8Response(productImages: ProductImages): __Observable<__StrictHttpResponse<ProductImages>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = productImages;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/product_images`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ProductImages>;
      })
    );
  }
  /**
   * Save a Product Image
   * @param productImages productImages
   * @return OK
   */
  saveUsingPOST8(productImages: ProductImages): __Observable<ProductImages> {
    return this.saveUsingPOST8Response(productImages).pipe(
      __map(_r => _r.body as ProductImages)
    );
  }

  /**
   * Update a Product Image
   * @param productImages productImages
   * @return OK
   */
  updateUsingPUT8Response(productImages: ProductImages): __Observable<__StrictHttpResponse<ProductImages>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = productImages;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/api/product_images`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ProductImages>;
      })
    );
  }
  /**
   * Update a Product Image
   * @param productImages productImages
   * @return OK
   */
  updateUsingPUT8(productImages: ProductImages): __Observable<ProductImages> {
    return this.updateUsingPUT8Response(productImages).pipe(
      __map(_r => _r.body as ProductImages)
    );
  }

  /**
   * Get all images products
   * @return OK
   */
  getAllUsingGET8Response(): __Observable<__StrictHttpResponse<Array<ProductImages>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/product_images/all`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<ProductImages>>;
      })
    );
  }
  /**
   * Get all images products
   * @return OK
   */
  getAllUsingGET8(): __Observable<Array<ProductImages>> {
    return this.getAllUsingGET8Response().pipe(
      __map(_r => _r.body as Array<ProductImages>)
    );
  }

  /**
   * uploadPhotoProduct
   * @param params The `ProductImagesControllerService.UploadPhotoProductUsingPOST1Params` containing the following parameters:
   *
   * - `imgFile`: imgFile
   *
   * - `idProduct`: idProduct
   *
   * @return OK
   */
  uploadPhotoProductUsingPOST1Response(params: ProductImagesControllerService.UploadPhotoProductUsingPOST1Params): __Observable<__StrictHttpResponse<Array<ProductImages>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = params.imgFile;
    if (params.idProduct != null) __params = __params.set('idProduct', params.idProduct.toString());
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/product_images/photos/upload`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<ProductImages>>;
      })
    );
  }
  /**
   * uploadPhotoProduct
   * @param params The `ProductImagesControllerService.UploadPhotoProductUsingPOST1Params` containing the following parameters:
   *
   * - `imgFile`: imgFile
   *
   * - `idProduct`: idProduct
   *
   * @return OK
   */
  uploadPhotoProductUsingPOST1(params: ProductImagesControllerService.UploadPhotoProductUsingPOST1Params): __Observable<Array<ProductImages>> {
    return this.uploadPhotoProductUsingPOST1Response(params).pipe(
      __map(_r => _r.body as Array<ProductImages>)
    );
  }

  /**
   * Search a product image with a ID
   * @param id The id of the product
   * @return OK
   */
  getByIdUsingGET8Response(id: number): __Observable<__StrictHttpResponse<ProductImages>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/product_images/${encodeURIComponent(id)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ProductImages>;
      })
    );
  }
  /**
   * Search a product image with a ID
   * @param id The id of the product
   * @return OK
   */
  getByIdUsingGET8(id: number): __Observable<ProductImages> {
    return this.getByIdUsingGET8Response(id).pipe(
      __map(_r => _r.body as ProductImages)
    );
  }

  /**
   * Delete a Product by ID
   * @param id The id of the product image
   * @return OK
   */
  deleteUsingDELETE7Response(id: number): __Observable<__StrictHttpResponse<{}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/product_images/${encodeURIComponent(id)}`,
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
   * Delete a Product by ID
   * @param id The id of the product image
   * @return OK
   */
  deleteUsingDELETE7(id: number): __Observable<{}> {
    return this.deleteUsingDELETE7Response(id).pipe(
      __map(_r => _r.body as {})
    );
  }
}

module ProductImagesControllerService {

  /**
   * Parameters for uploadPhotoProductUsingPOST1
   */
  export interface UploadPhotoProductUsingPOST1Params {

    /**
     * imgFile
     */
    imgFile: Array<Blob>;

    /**
     * idProduct
     */
    idProduct: number;
  }
}

export { ProductImagesControllerService }
