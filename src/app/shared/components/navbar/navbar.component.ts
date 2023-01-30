import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  dropMenuMobile = false;
  dropMenuProfile = false;
  constructor() { }


  ngOnInit(): void {
  }

  toggleDropMenuMobile(event:Event){
    event.preventDefault();
    if (this.dropMenuMobile) {
      this.dropMenuMobile = false;
    } else {
      this.dropMenuMobile = true;
    }
  }

  toggleDropMenuProfile(event:Event){
    event.preventDefault();
    if (this.dropMenuProfile) {
      this.dropMenuProfile = false;
    } else {
      this.dropMenuProfile = true;
    }
  }

}
