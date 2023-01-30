import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { HomeComponent } from './shared/components/home/home.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { LanguageService } from './shared/services/language.service';

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
    AppComponent,
    HomeComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularSvgIconModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      },
      defaultLanguage: defaultLang(),
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
