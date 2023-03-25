import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-drop-menu-per',
  templateUrl: './drop-menu-per.component.html',
  styleUrls: ['./drop-menu-per.component.scss']
})
export class DropMenuPerComponent {

  @Input()
  for : 'DP'

  @Output()
  addClicked : EventEmitter<void> = new EventEmitter()

  dropMenu:boolean=false

  toggleDropMenu(){
    this.dropMenu = !this.dropMenu
  }
  closeMenu(){
    this.dropMenu = false
  }

  onClicked(){
    this.dropMenu = false
    this.addClicked.emit()
  }

}



