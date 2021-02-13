// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiURL: 'http://localhost:8090/api',
  url_api: 'https://platzi-store.herokuapp.com',
  url_client_images: 'http://localhost:8090/api/public/clients/photos/',
  url_voucher_images: 'http://localhost:8090/api/public/vouchers/photos/',
  url_productos_images: 'http://localhost:8090/api/public/products/photos/',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
