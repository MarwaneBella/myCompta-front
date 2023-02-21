import { Component, Input, OnInit } from '@angular/core';
import { Client } from 'src/app/private/models/client';
import { Devis } from 'src/app/private/models/devis';
import { DevisStatus } from 'src/app/private/models/enums/devis-status';
import { Facture } from 'src/app/private/models/facture';
import { Societe } from 'src/app/private/models/societe';
import { NavigateService } from 'src/app/private/services/navigate.service';
import { AlertifyService } from '../../services/alertify.service';
import { FilterService } from '../../services/filter.service';

@Component({
  selector: 'app-drop-menu',
  templateUrl: './drop-menu.component.html',
  styleUrls: ['./drop-menu.component.scss']
})
export class DropMenuComponent implements OnInit {

  @Input()
  data: Societe | Client | Devis | Facture;

  @Input()
  type :'list'|'edit'|'show'|'global'

  @Input()
  size : 'sm'|'xs'

  @Input()
  for: 'C'|'S'|'D'|'F'

  dropMenu :boolean = false;
  DevisStatus = DevisStatus;
  statusActive: DevisStatus | null = null;

  constructor(
    public navigate : NavigateService,
    private alertify : AlertifyService,
    private filterService : FilterService
  ) {}

  ngOnInit(): void {
  }

  changeFilterStatus(status : DevisStatus | null){
    this.statusActive = status
    this.filterService.callMethodFilterStatus(status);
  }
  

  toggleDropMenu(){
    this.dropMenu = !this.dropMenu
  }
  closeMenu(){
    this.dropMenu = false
  }


  delete(){
    this.alertify.deleteData(this.data, this.for);
  }



}
