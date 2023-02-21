import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AlertifyService } from 'src/app/shared/services/alertify.service';
@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  languageList = [
    {code: 'en', label: 'English'},
    {code: 'fr', label: 'French'}
  ];

  constructor(
    private  translate: TranslateService,
    private alertify: AlertifyService
  ) {
    
  }

  ngOnInit(): void {
  }

  changeLang(code : string ){
    localStorage.setItem('lang',code)
    this.translate.use(code);
  }
  
  showAlert(){
    // alertifyjs.alert('Ready!');
    this.alertify.confirm("nice")
  }

}
