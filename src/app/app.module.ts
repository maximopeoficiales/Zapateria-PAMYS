import {BrowserModule} from '@angular/platform-browser';
import {forwardRef, NgModule, Provider} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {ApiModule} from './core/api/api.module';
import {ApiInterceptor} from './core/api-interceptor/ApiInterceptor';



// configuracion de headers global para la api
export const API_INTERCEPTOR_PROVIDER: Provider = {
    provide: HTTP_INTERCEPTORS,
    useExisting: forwardRef(() => ApiInterceptor),
    multi: true
};
// import apimodule globalmente y le paso la url de nuestro backend
@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        ApiModule.forRoot({rootUrl: "http://localhost:5000"})
        // SharedModule,
        // CoreModule,
        // ProductModule,
        // PageNotFoundModule,
        // ContactModule,
        // MaterialModule,
    ],
    providers: [ApiInterceptor,
        API_INTERCEPTOR_PROVIDER],
    bootstrap: [AppComponent],
})
export class AppModule {}
