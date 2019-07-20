import { Component, OnInit, Directive } from '@angular/core';
import { NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';
import { LoginModalService, AccountService, Account } from 'app/core';
import { CommonUtilService } from '../common-util.service';
@Component({
  selector: 'jhi-home',
  templateUrl: './home.component.html',
  styleUrls: ['home.scss']
})
export class HomeComponent implements OnInit {
  account: Account;
  modalRef: NgbModalRef;
  deals: any = [];
  deals2: any = [];
  products: any = [];
  images = [
    {
      src: '../../content/images/ecom/shop-slider/slide1/shoe_wall.jpg',
      alt: 'First Image',
      text1: { label: '50% Discount', cssClass: 'animated fadeInDown' },
      text2: { label: 'Top Brands at lowest price', cssClass: 'animated fadeInUp' }
    },
    {
      src: '../../content/images/ecom/shop-slider/slide2/watches_wall.jpg',
      alt: 'Second Image',
      text1: { label: '60% Discount', cssClass: 'animated fadeInDown' },
      text2: { label: 'Top Brands at lowest price', cssClass: 'animated fadeInUp' }
    },
    {
      src: '../../content/images/ecom/shop-slider/slide3/women_whites.jpg',
      alt: 'Third Image',
      text1: { label: 'Top Brands', cssClass: 'animated fadeInDown' },
      text2: { label: 'Top Brands at lowest price', cssClass: 'animated fadeInUp' }
    },
    {
      src: '../../content/images/ecom/shop-slider/slide4/train_toy.jpg',
      alt: 'Forth Image',
      text1: { label: 'Trending collections', cssClass: 'animated fadeInDown' },
      text2: { label: 'Top Brands at lowest price', cssClass: 'animated fadeInUp' }
    }
  ];
  constructor(
    private accountService: AccountService,
    private loginModalService: LoginModalService,
    private eventManager: JhiEventManager,
    private commonUtilService: CommonUtilService
  ) {
    this.commonUtilService.getProducts().subscribe(data => {
      this.products = data;
      console.log(this.products);
    });
  }

  ngOnInit() {
    this.accountService.identity().then((account: Account) => {
      this.account = account;
    });
    this.registerAuthenticationSuccess();
    this.commonUtilService.getDeals().subscribe(data => {
      this.deals = data;
    });
    this.commonUtilService.getDeals2().subscribe(data => {
      this.deals2 = data;
    });
  }

  registerAuthenticationSuccess() {
    this.eventManager.subscribe('authenticationSuccess', message => {
      this.accountService.identity().then(account => {
        this.account = account;
      });
    });
  }

  isAuthenticated() {
    return this.accountService.isAuthenticated();
  }

  login() {
    this.modalRef = this.loginModalService.open();
  }
}
