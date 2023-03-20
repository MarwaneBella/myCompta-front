import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Route, Router } from '@angular/router';
import { FilterService } from 'src/app/shared/services/filter.service';
import { NavigateService } from '../../../shared/services/navigate.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  dropMenuMobile = false;
  dropMenuProfile = false;
  data: string = '';
  navBarType : 'facturation'|'personnel'|'global'
  event$ : any

  constructor(private filterService: FilterService, private router: Router, protected navigate : NavigateService) {}

  ngOnInit(): void {
    this.setNavBarType()
  }

  setNavBarType(){
    if(/.*\/facturation.*/g.test(this.router.url)){
      this.navBarType = 'facturation'
      return
    }
    else if(/.*\/personnel.*/g.test(this.router.url)){
      this.navBarType = 'personnel'
      return
    }

    this.navBarType = 'global'
  }



  dataSearchChange() {
    this.filterService.callMethodSearch(this.data);
  }

  toggleDropMenuMobile(event: Event) {
    event.preventDefault();
    if (this.dropMenuMobile) {
      this.dropMenuMobile = false;
    } else {
      this.dropMenuMobile = true;
    }
  }

  toggleDropMenuProfile(event: Event) {
    event.preventDefault();
    if (this.dropMenuProfile) {
      this.dropMenuProfile = false;
    } else {
      this.dropMenuProfile = true;
    }
  }
}
