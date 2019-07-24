import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

import { VERSION } from 'app/app.constants';
import { AccountService, LoginModalService, LoginService } from 'app/core';
import { ProfileService } from 'app/layouts/profiles/profile.service';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { CounterService } from '../../counter-service.service';
import { map } from 'rxjs/operators';
import { EcomModelService } from 'app/ecom-model-service.service';
import { ProductCategory } from 'app/shared/model/product-category.model';
import { CommonUtilService } from 'app/common-util.service';
import { EcomModel } from 'app/model/EcomModel.model';
@Component({
  selector: 'jhi-navbar',
  templateUrl: './searchnavbar.html',
  styleUrls: ['navbar.scss']
})
export class NavbarComponent implements OnInit {
  ecomModel: EcomModel;
  categories: ProductCategory[];
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
    private counterService: CounterService,
    private ecomModelService: EcomModelService,
    private commonUtilService: CommonUtilService
  ) {
    this.version = VERSION ? 'v' + VERSION : '';
    this.isNavbarCollapsed = true;
  }
  ngOnInit() {
    if (this.ecomModelService.ecomModel) {
      this.ecomModel = this.ecomModelService.ecomModel;
    } else {
      this.ecomModel = new EcomModel();
    }
    this.profileService.getProfileInfo().then(profileInfo => {
      this.inProduction = profileInfo.inProduction;
      this.swaggerEnabled = profileInfo.swaggerEnabled;
    });
    if (!this.categories) {
      this.commonUtilService.getProductCategory().subscribe(data => {
        this.categories = data as ProductCategory[];
        this.ecomModel.categories = this.categories;
        this.ecomModelService.ecomModel = this.ecomModel;
      });
    }
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

  getImageUrl() {
    // return this.isAuthenticated() ? this.accountService.getImageUrl() : null;
    return false;
  }
}
