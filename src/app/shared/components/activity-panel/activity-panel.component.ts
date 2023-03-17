import { registerLocaleData } from '@angular/common';
import { Component, LOCALE_ID, OnInit } from '@angular/core';
import { Activity } from 'src/app/private/gestion-facturation/models/activity';
import * as fr from '@angular/common/locales/fr';



@Component({
  selector: 'app-activity-panel',
  templateUrl: './activity-panel.component.html',
  styleUrls: ['./activity-panel.component.scss'],
  providers :[
    { provide: LOCALE_ID, useValue: 'fr-FR'}
  ]
})
export class ActivityPanelComponent implements OnInit {

  readonly lengthFix :number = 4;
  slice:number = this.lengthFix ;
  activities: Array<Activity> = []

  constructor() { 
    registerLocaleData(fr.default);
  }

  ngOnInit(): void{
    
    this.activities.push(new Activity('Facture', 'F23456' ,'C',500));
    this.activities.push(new Activity('Devis', 'D34567' ,'S',300));
    this.activities.push(new Activity('Devis', 'D34567' ,'C',700));
    this.activities.push(new Activity('Facture', 'F93456' ,'C',6000.5));
    this.activities.push(new Activity('Facture', 'F11111' ,'C',890));
    this.activities.push(new Activity('Facture', 'F22222' ,'C',266));
    this.activities.push(new Activity('Devis', 'D33333' ,'C',1000));
    
  }

  

  toggleDropActivity(){
    if(this.slice == this.lengthFix){
      this.slice = this.activities.length
      return
    }
    if(this.slice == this.activities.length){
      this.slice = this.lengthFix
      return
    }
  }

}
