import { Component, Input, Output } from '@angular/core';
import { Card } from '../../models/card';

@Component({
  selector: 'app-card-global',
  templateUrl: './card-global.component.html',
  styleUrls: ['./card-global.component.scss']
})
export class CardGlobalComponent {

  @Input()
  card: Card = {} as Card;

  @Input()
  route : string
  
  textColor: string = 'text-green'


}
