import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  languageList = [
    {code: 'en', label: 'English'},
    {code: 'fr', label: 'French'}
  ];

  constructor(private translate : TranslateService) { }

  setlang(lang: string) {
    localStorage.setItem('lang',lang)
    this.translate.use(lang);
  }

  checkLang(){
    if(localStorage.getItem('lang')){
      console.log(localStorage.getItem('lang'));
      if(localStorage.getItem('lang') != 'en' && localStorage.getItem('lang') != 'fr' ){
        console.log(false)
          localStorage.removeItem('lang');
      }
      
    }
  }

  
}
