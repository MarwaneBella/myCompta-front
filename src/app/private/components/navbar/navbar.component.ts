import { Component, OnInit } from '@angular/core';
import { SocieteComponent } from 'src/app/private/components/societe/societe.component';
import { FilterService } from 'src/app/shared/services/filter.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  dropMenuMobile = false;
  dropMenuProfile = false;
  data :string = '';
  constructor(private filterService : FilterService) { 
  }

  ngOnInit(): void {
    
  }

  dataSearchChange(){
    this.filterService.callMethodSearch(this.data);
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
