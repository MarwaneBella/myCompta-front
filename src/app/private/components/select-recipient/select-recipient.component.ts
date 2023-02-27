import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { forkJoin } from 'rxjs';
import { ClientService } from '../../http/client.service';
import { SocieteService } from '../../http/societe.service';
import { Client } from '../../models/client';
import { Societe } from '../../models/societe';

interface Data {
  recipient : Client | Societe
  type: 'C'| 'S' 
}

class Item{
  data : Data  = {} as Data
  name : string
  group : string
  icon: 'par'|'pro'
}

@Component({
  selector: 'app-select-recipient',
  templateUrl: './select-recipient.component.html',
  styleUrls: ['./select-recipient.component.scss']
})
export class SelectRecipientComponent implements OnInit {

  @Output()
  selected : EventEmitter<void>  = new EventEmitter()

  items : Item[] = []
  clients : Client[]
  societes : Societe[]
  data : Data
  constructor(
    private clientService: ClientService,
    private societeService : SocieteService,
    private translate : TranslateService
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

  

  setRecipients() {
    var item : Item = new Item()
    // item.name = 'Nouveau'
    // item.icon = 'add'
    // this.items = [...this.items,item]
    this.clients.forEach(client =>{
      item = new Item()
      item.data.recipient = client 
      item.data.type = 'C'
      item.icon = 'par'
      item.name = client.firstName + ' ' +client.lastName
      this.translate.get('TITLE.C').subscribe( res => item.group = res)
      this.items = [...this.items,item]

    })

    this.societes.forEach(async societe =>{
      item = new Item()
      item.data.recipient = societe 
      item.name = societe.name
      item.data.type = 'S'
      item.icon = 'pro'
      this.translate.get('TITLE.S').subscribe( res => item.group = res)
      this.items = [...this.items,item]
    })
  }

  selectChange(){
    this.selected.emit();
  }

}
