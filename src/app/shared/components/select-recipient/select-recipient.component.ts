import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { firstValueFrom, forkJoin } from 'rxjs';
import { ClientService } from 'src/app/private/gestion-facturation/http/client.service';
import { SocieteService } from 'src/app/private/gestion-facturation/http/societe.service';
import { Client } from 'src/app/private/gestion-facturation/models/client';
import { Devis } from 'src/app/private/gestion-facturation/models/devis';
import { Facture } from 'src/app/private/gestion-facturation/models/facture';
import { Societe } from 'src/app/private/gestion-facturation/models/societe';


interface Recipient {
  data : Client | Societe
  type: 'C'| 'S' 
}

class Item{
  recipient : Recipient  = {} as Recipient
  name : string
  group : string
  icon: 'par'|'pro'|'plus'
}

@Component({
  selector: 'app-select-recipient',
  templateUrl: './select-recipient.component.html',
  styleUrls: ['./select-recipient.component.scss']
})
export class SelectRecipientComponent implements OnInit {

  @Output()
  selected : EventEmitter<void>  = new EventEmitter()

  @Input()
  for : 'D'|'F'

  items : Item[] = []
  clients : Client[]
  societes : Societe[]
  recipient : Recipient 
  constructor(
    private clientService: ClientService,
    private societeService : SocieteService,
    private translate : TranslateService,
    private router : Router
  ) { }

  ngOnInit(): void {
    this.setClientAndSociete();
  }

  setClientAndSociete() {
    
    forkJoin({
      res1 : this.clientService.getClientsByFirstNameAndLastName(),
      res2 : this.societeService.getSocieteByName()
    })
    .subscribe({
      next : ({res1,res2}) =>{
        this.clients = res1
        this.societes = res2
      },
      error: e => console.log(e),
      complete: () => this.setRecipients()
    })

  }

  

  async setRecipients() {

    var item : Item = new Item()
    item.name = await firstValueFrom(this.translate.get('FORM.SELECT.NC'))
    item.icon = 'plus'
    this.items = [...this.items,item]

    var item : Item = new Item()
    item.name = await firstValueFrom(this.translate.get('FORM.SELECT.NS'))
    item.icon = 'plus'
    this.items = [...this.items,item]

    this.clients.forEach(client =>{
      item = new Item()
      item.recipient.data = client 
      item.recipient.type = 'C'
      item.icon = 'par'
      item.name = client.firstName + ' ' +client.lastName
      this.translate.get('TITLE.C').subscribe( res => item.group = res)
      this.items = [...this.items,item]

    })

    this.societes.forEach(async societe =>{
      item = new Item()
      item.recipient.data = societe 
      item.name = societe.name
      item.recipient.type = 'S'
      item.icon = 'pro'
      this.translate.get('TITLE.S').subscribe( res => item.group = res)
      this.items = [...this.items,item]
    })
  }

  async selectChange(event :Item){
    if(event.name == await firstValueFrom(this.translate.get('FORM.SELECT.NC')))
    this.router.navigateByUrl('/clients/add')
    else if(event.name == await firstValueFrom(this.translate.get('FORM.SELECT.NS')))
    this.router.navigateByUrl('/societes/add')
    else this.selected.emit();
  }

  getRecipient(data : Devis |Facture) : Devis |Facture{
    if(this.for == 'D'){
      var devis : Devis  = data as Devis
      if(this.recipient.type == 'C'){
        devis.client = this.recipient.data as Client
        devis.societe = null
      }
      else if(this.recipient.type == 'S'){
        devis.societe = this.recipient.data as Societe
        devis.client = null
      }
    }
    return data;
  }

  setRecipient(data : Devis |Facture) {
    if(this.for == 'D'){
      var devis : Devis  = data as Devis
      var recipient : Recipient  = {} as Recipient
      if(devis.client){
        this.items
        recipient.data = devis.client as Client
        recipient.type = 'C'
        this.recipient = recipient
      }

      else if(devis.societe){
        recipient.data = devis.societe as Societe
        recipient.type = 'S'
        this.recipient = recipient
      }
    }
  }
  
  comparewith(item : Item, selected :Recipient) {
    return item?.recipient?.data?.id === selected.data.id && item?.recipient?.type === selected.type 
  }


  // onSubmit(data : Devis | Facture){
    
  //   if(this.data.type == 'C'){
  //     var client : Client = this.data.recipient as Client
      
  //     if(this.for == 'D'){
        
  //       var devis : Devis = data as Devis
  //       devis.client = client 
  //       devis.societe = null
  //       this.updateDevis(devis)
  //     }

  //   }

  //   else if(this.data.type == 'S'){
  //     var societe : Societe = this.data.recipient as Societe
  //     console.log("test")
  //     if(this.for == 'D'){
  //       console.log("test")
  //       console.log(this.data)
  //       var devis : Devis = data as Devis
  //       devis.client = null
  //       devis.societe = societe
  //       this.updateDevis(devis)
  //     }
  //   }
  // }

  // updateDevis(devis : Devis){
  //   this.devisService.updateDevisById(devis.id, devis).subscribe({
  //     error : e => console.log(e)
  //   })
  // }

  // updateFacture(){

  // }

}
