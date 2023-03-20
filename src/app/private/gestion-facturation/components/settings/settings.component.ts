import { Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { AlertifyService } from 'src/app/shared/services/alertify.service';
import { NavigateService } from 'src/app/shared/services/navigate.service';
@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  dropPreferenceMenu :boolean = false;
  dropMobileMenu :boolean = false;

  constructor(public router : Router,protected navigate : NavigateService) {
  }

  ngOnInit(): void {

  }




  checkPreferencesRouteIsActive() : boolean{
    return this.router.isActive(this.navigate.f_s_preferencesPath,{paths: 'subset', queryParams: 'subset', fragment: 'ignored', matrixParams: 'subset'})
  }

  closePreferenceMenu(){
    this.dropPreferenceMenu = false
  }

  togglePreferenceDropMenu(){
    this.dropPreferenceMenu = !this.dropPreferenceMenu
  }

  closeMobileMenu(){
    this.dropMobileMenu = false
  }

  toggleMobileDropMenu(){
    this.dropMobileMenu = !this.dropMobileMenu
  }

}
