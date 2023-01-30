import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-drop-menu',
  templateUrl: './drop-menu.component.html',
  styleUrls: ['./drop-menu.component.scss']
})
export class DropMenuComponent implements OnInit {

  @Input()
  type :'list'|'edit'|'show'|'global'

  @Input()
  size : 'sm'|'xs'

  @Input()
  for: 's'|'c'|'d'|'f'

  dropMenu :boolean = false
  constructor() { }

  ngOnInit(): void {
  }

  toggleDropMenu(){
    this.dropMenu = !this.dropMenu
    
  }

  closeMenu(){
    this.dropMenu = false
  }

}
