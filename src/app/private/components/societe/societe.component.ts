import { AfterViewInit, Component, OnChanges, OnInit } from '@angular/core';
import { firstValueFrom, isEmpty } from 'rxjs';
import { SocieteService } from '../../http/societe.service';
import { Societe } from '../../models/societe';

@Component({
  selector: 'app-societe',
  templateUrl: './societe.component.html',
  styleUrls: ['./societe.component.scss']
})
export class SocieteComponent implements OnInit{
  societes :Societe[] = [];
  isEmpty : boolean = false;
  
  constructor(private societeService : SocieteService) { }
  
  async ngOnInit(): Promise<void> {
    await this.setAllSocietes();
  }


  async setAllSocietes(){
    await firstValueFrom(this.societeService.getSocieteList())
    .then(res => this.societes = res )
    .catch(console.log)
    .finally( () =>{
      if(this.societes.length == 0) this.isEmpty = true
      console.log(this.societes)
    })
    
  }

  

  

}
