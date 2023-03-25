import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { FormsModule } from '@angular/forms';
import { PrivateComponent } from './private/private.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
export function createTranslateLoader(http: HttpClient) {    return new TranslateHttpLoader(http, './assets/i18n/', '.json');}

function defaultLang() {
  if(localStorage.getItem('lang') != null || localStorage.getItem('lang')){
    if(localStorage.getItem('lang') != 'fr' && localStorage.getItem('lang') != 'en'){
      localStorage.removeItem('lang')
      localStorage.setItem('lang','fr');
      return 'fr';
    }
    else{
      return localStorage.getItem('lang') || 'fr';
    }
  }
  else{
    return 'fr';
  }
}
// export function createTranslateLoader(http: HttpClient) {    return new TranslateHttpLoader(http, './assets/i18n/', '.json');}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AngularSvgIconModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      },
      defaultLanguage: defaultLang(),
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
