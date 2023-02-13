import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../http/client.service';
import { Client } from '../../models/client';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {

  clients :Array<Client> = []
  isEmpty : boolean = false;
  
  constructor(private clientService : ClientService) { }
  

  ngOnInit(): void {
    this.setAllClients();
  }

  setAllClients(){
    
    this.clientService.getClientList().subscribe({
      next : data => this.clients  = data,
      error : err => console.log(err.error),
      complete: () => {
        if(this.clients.length == 0) this.isEmpty = true
      }
    })

  }


}
