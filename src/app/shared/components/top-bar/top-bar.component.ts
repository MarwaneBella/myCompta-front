import { Component, Input, OnInit } from '@angular/core';
import { Client } from 'src/app/private/models/client';
import { Devis } from 'src/app/private/models/devis';
import { Facture } from 'src/app/private/models/facture';
import { Societe } from 'src/app/private/models/societe';
import { NavigateService } from 'src/app/private/services/navigate.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {
  dropMenuAdd : boolean = false

  @Input()
  data: Societe | Client | Devis | Facture;

  @Input()
  for: 'C'|'S'|'D'|'F'

  @Input()
  type : 'add'|'edit'|'show'|'list'

  @Input()
  sizeMenu : 'sm'|'xs'

  showData :[string, string?] = ['']

  constructor(
    protected navigate : NavigateService
  ) { }

  ngOnInit(): void {
    
     
    
  }
  ngOnChanges(){
    if(this.type == 'show'){
      if( this.for == 'C' ){
        var client :Client = this.data as Client;
        this.showData[0] = client.firstName+' '+client.lastName 
        if(client.societe) this.showData[1] = "Professionel"
        else this.showData[1] = "Particulier"
      }
      else if(this.for == 'S'){
        var societe : Societe = this.data as Societe 
        this.showData[0] = societe.name
      }
    }
    
  }

  toggleDropMenuAdd(){
    this.dropMenuAdd = !this.dropMenuAdd
    
  }

  closeMenuAdd(){
    this.dropMenuAdd = false
  }


}
