import {  NgModule } from '@angular/core';
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
import { EmptyDataMessageComponent } from './components/empty-data-message/empty-data-message.component';
import { TagInputModule } from 'ngx-chips';
import { ChipsInputComponent } from './components/chips-input/chips-input.component';
import { DebounceClickDirective } from './directives/debounce-click.directive';
import { NgxPaginationModule } from 'ngx-pagination';
import { PaginationComponent } from './components/pagination/pagination.component';



@NgModule({
  declarations: [
    ClickOutsideDirective,
    SliderComponent,
    CardComponent,
    DropMenuComponent,
    TopBarComponent,
    ActivityPanelComponent,
    EmptyDataMessageComponent,
    EmptyDataMessageComponent,
    ChipsInputComponent,
    DebounceClickDirective,
    PaginationComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    AngularSvgIconModule,
    HttpClientModule,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    TagInputModule,
    NgxPaginationModule
  ],
  exports : [
    DebounceClickDirective,
    ClickOutsideDirective,
    AngularSvgIconModule,
    SliderComponent,
    CardComponent,
    TranslateModule,
    HttpClientModule,
    TopBarComponent,
    DropMenuComponent,
    ActivityPanelComponent,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    EmptyDataMessageComponent,
    TagInputModule,
    ChipsInputComponent,
    NgxPaginationModule,
    PaginationComponent,
    IvyCarouselModule
  ],
  providers :[
    LanguageService
  ]
})
export class SharedModule { 

}
