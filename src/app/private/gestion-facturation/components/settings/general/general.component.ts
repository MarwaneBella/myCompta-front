import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.scss']
})
export class GeneralComponent implements OnInit {

  languageList = [
    {code: 'en', label: 'English'},
    {code: 'fr', label: 'French'}
  ];

  constructor(
    private  translate: TranslateService,
  ) {

  }

  ngOnInit(): void {
  }

  changeLang(code : string ){
    localStorage.setItem('lang',code)
    this.translate.use(code);
    window.location.reload();
  }

}
