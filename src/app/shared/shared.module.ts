import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { ClickOutsideDirective } from './directives/click-outside.directive';
import { SliderComponent } from './components/slider/slider.component';
import { IvyCarouselModule } from 'angular14-responsive-carousel';
import { CardComponent } from './components/card/card.component';
import { DropMenuComponent } from './components/drop-menu/drop-menu.component';
import { RouterModule } from '@angular/router';
import {  TranslateModule } from '@ngx-translate/core';
import { HttpClientModule } from '@angular/common/http';
import { LanguageService } from './services/language.service';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { ActivityPanelComponent } from './components/activity-panel/activity-panel.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { AddressFormComponent } from './components/address-form/address-form.component';



@NgModule({
  declarations: [
    ClickOutsideDirective,
    SliderComponent,
    CardComponent,
    DropMenuComponent,
    TopBarComponent,
    ActivityPanelComponent,
    AddressFormComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    AngularSvgIconModule,
    HttpClientModule,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule
  ],
  exports : [
    ClickOutsideDirective,
    AngularSvgIconModule,
    SliderComponent,
    CardComponent,
    TranslateModule,
    HttpClientModule,
    TopBarComponent,
    DropMenuComponent,
    AddressFormComponent,
    ActivityPanelComponent,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    IvyCarouselModule
  ],
  providers :[
    LanguageService
  ]
})
export class SharedModule { 

}
