import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-societe',
  templateUrl: './societe.component.html',
  styleUrls: ['./societe.component.scss']
})
export class SocieteComponent implements OnInit {
  dropMenuAdd : boolean = false
  isEmpty: boolean = false;
  list = [1,2,3,4,5,6,7,8]
  motCle = ["Dev","Design","Brand", "more","more"]
  
  constructor() { }
  

  ngOnInit(): void {
    // for(let i=0; i>this.list.length ;i++){
    //   this.dropMenuEdit[i] = false;
    // }
    
    // console.log(this.dropMenuEdit)
    
  }

  toggleDropMenuAdd(){
      this.dropMenuAdd = !this.dropMenuAdd
      
  }

  closeMenuAdd(){
    this.dropMenuAdd = false
  }

  

}
