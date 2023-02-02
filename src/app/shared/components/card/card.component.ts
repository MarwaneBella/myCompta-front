import { Component, Input, OnInit } from '@angular/core';
import { Societe } from 'src/app/private/models/societe';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input()
  data : Societe 

  @Input()
  for : 'c'|'s'|'d'|'f'

  constructor() { }

  ngOnInit(): void {
    
  }

  

}
