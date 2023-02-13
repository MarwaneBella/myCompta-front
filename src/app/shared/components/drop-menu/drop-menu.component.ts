import { Component, Input, OnInit } from '@angular/core';
import { NavigateService } from 'src/app/private/services/navigate.service';

@Component({
  selector: 'app-drop-menu',
  templateUrl: './drop-menu.component.html',
  styleUrls: ['./drop-menu.component.scss']
})
export class DropMenuComponent implements OnInit {

  @Input()
  param : [id : number, slug : string]

  @Input()
  type :'list'|'edit'|'show'|'global'

  @Input()
  size : 'sm'|'xs'

  @Input()
  for: 'C'|'S'|'D'|'F'

  dropMenu :boolean = false

  constructor(public navigate : NavigateService) { }

  ngOnInit(): void {
  }
  

  toggleDropMenu(){
    this.dropMenu = !this.dropMenu
  }
  closeMenu(){
    this.dropMenu = false
  }

}
