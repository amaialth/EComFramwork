import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

import { VERSION } from 'app/app.constants';
import { AccountService, LoginModalService, LoginService } from 'app/core';
import { ProfileService } from 'app/layouts/profiles/profile.service';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { CounterService } from '../../counter-service.service';
import { map } from 'rxjs/operators';
@Component({
  selector: 'jhi-navbar',
  templateUrl: './searchnavbar.html',
  styleUrls: ['navbar.scss']
})
export class NavbarComponent implements OnInit {
  categoryMap = new Map<string, string[]>([
    ['Women', ['Clothings', 'Shoes', 'sub 3']],
    ['Men', ['Men Category']],
    ['Kids', ['Kids Category']]
  ]);
  inProduction: boolean;
  isNavbarCollapsed: boolean;
  languages: any[];
  swaggerEnabled: boolean;
  modalRef: NgbModalRef;
  version: string;
  faShoppingCart = faShoppingCart;
  count = 0;
  constructor(
    private loginService: LoginService,
    private accountService: AccountService,
    private loginModalService: LoginModalService,
    private profileService: ProfileService,
    private router: Router,
    private counterService: CounterService
  ) {
    this.version = VERSION ? 'v' + VERSION : '';
    this.isNavbarCollapsed = true;
  }
  ngOnInit() {
    this.profileService.getProfileInfo().then(profileInfo => {
      this.inProduction = profileInfo.inProduction;
      this.swaggerEnabled = profileInfo.swaggerEnabled;
    });
  }

  collapseNavbar() {
    this.isNavbarCollapsed = true;
  }

  isAuthenticated() {
    // return this.accountService.isAuthenticated();
    return true;
  }

  login() {
    this.modalRef = this.loginModalService.open();
  }

  logout() {
    this.collapseNavbar();
    this.loginService.logout();
    this.router.navigate(['']);
  }

  toggleNavbar() {
    this.isNavbarCollapsed = !this.isNavbarCollapsed;
  }

  getSuubCatergory(category: string) {
    return this.categoryMap.get(category);
  }

  getImageUrl() {
    // return this.isAuthenticated() ? this.accountService.getImageUrl() : null;
    return false;
  }
}
