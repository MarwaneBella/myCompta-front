import { Component, Input, OnInit } from '@angular/core';
import { NavigateService } from 'src/app/private/services/navigate.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {
  dropMenuAdd : boolean = false

  @Input()
  param : [id : number, slug : string]

  @Input()
  showData :[string, string?]

  @Input()
  for: 'C'|'S'|'D'|'F'

  @Input()
  type : 'add'|'edit'|'show'|'list'

  @Input()
  sizeMenu : 'sm'|'xs'

  constructor(
    protected navigate : NavigateService
  ) { }

  ngOnInit(): void {
    
  }

  toggleDropMenuAdd(){
    this.dropMenuAdd = !this.dropMenuAdd
    
  }

  closeMenuAdd(){
    this.dropMenuAdd = false
  }

}
