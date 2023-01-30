import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {
  dropMenuAdd : boolean = false

  @Input()
  for: 's'|'c'|'d'|'f'

  @Input()
  type : 'add'|'edit'|'show'|'list'

  @Input()
  sizeMenu : 'sm'|'xs'

  constructor() { }

  ngOnInit(): void {
  }

  toggleDropMenuAdd(){
    this.dropMenuAdd = !this.dropMenuAdd
    
  }

  closeMenuAdd(){
    this.dropMenuAdd = false
  }

}
