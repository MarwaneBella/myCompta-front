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
  dropMenuFacture = false;
  data: string = '';
  navBarType: 'facturation' | 'personnel' | 'global';
  event$: any;

  constructor(
    private filterService: FilterService,
    private router: Router,
    protected navigate: NavigateService
  ) {}

  ngOnInit(): void {
    this.setNavBarType();
  }

  checkfacturesRouteIsActive() : boolean{
    return this.router.isActive(this.navigate.f_facturePath,{paths: 'subset', queryParams: 'subset', fragment: 'ignored', matrixParams: 'subset'})
  }

  setNavBarType() {
    if (/.*\/facturation.*/g.test(this.router.url)) {
      this.navBarType = 'facturation';
      return;
    } else if (/.*\/personnel.*/g.test(this.router.url)) {
      this.navBarType = 'personnel';
      return;
    }

    this.navBarType = 'global';
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
