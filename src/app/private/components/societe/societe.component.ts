import { Component, OnInit } from '@angular/core';
import { SocieteService } from '../../http/societe.service';
import { Societe } from '../../models/societe';

@Component({
  selector: 'app-societe',
  templateUrl: './societe.component.html',
  styleUrls: ['./societe.component.scss']
})
export class SocieteComponent implements OnInit {
  isEmpty: boolean = false;
  list = [1,2,3,4,5,6,7,8]
  motCle = ["Dev","Design","Brand", "more","more"]
  societes :Societe[] =[]
  
  constructor(private societeService : SocieteService) { }
  

  ngOnInit(): void {
    this.setAllSocietes();
  }

  setAllSocietes(){
    this.societeService.getSocieteList().subscribe( (res :Societe[])=>{
      this.societes  = res;
    })
  }

  

  

}
