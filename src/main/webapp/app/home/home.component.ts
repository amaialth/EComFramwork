import { Component, OnInit, Directive } from '@angular/core';
import { NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';
import { OwlOptions, SlidesOutputData } from 'ngx-owl-carousel-o';
import { LoginModalService, AccountService, Account } from 'app/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProductDetailModelComponent } from 'app/product-detail-model/product-detail-model.component';
@Component({
  selector: 'jhi-home',
  templateUrl: './home.component.html',
  styleUrls: ['home.scss']
})
export class HomeComponent implements OnInit {
  account: Account;
  modalRef: NgbModalRef;
  activeSlides: SlidesOutputData;
  openModalWindow = false;
  imagePointer: number;
  customOptions: OwlOptions = {
    loop: true,
    center: true,
    items: 4,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 200,
    autoWidth: true,
    autoHeight: true,
    animateIn: 'flipInX',
    navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 5
      }
    },
    nav: true
  };
  images = [
    {
      id: 'product1',
      name: 'Name One',
      src: '../../content/images/ecom/products/model1.jpg',
      price: '299',
      saleIcon: 'y',
      newIcon: 'n'
    },
    {
      id: 'product2',
      name: 'Name Two',
      src: '../../content/images/ecom/products/model2.jpg',
      price: '5000',
      saleIcon: 'n',
      newIcon: 'n'
    },
    {
      id: 'product3',
      name: 'Name Three',
      src: '../../content/images/ecom/products/model3.jpg',
      price: '488',
      saleIcon: 'n',
      newIcon: 'y'
    },
    {
      id: 'product4',
      name: 'Name Four',
      src: '../../content/images/ecom/products/model4.jpg',
      price: '300',
      saleIcon: 'n',
      newIcon: 'n'
    },
    {
      id: 'product5',
      name: 'Name Five',
      src: '../../content/images/ecom/products/model5.jpg',
      price: '578',
      saleIcon: 'n',
      newIcon: 'n'
    },
    {
      id: 'product6',
      name: 'Name Six',
      src: '../../content/images/ecom/products/model6.jpg',
      price: '489',
      saleIcon: 'n',
      newIcon: 'n'
    },
    {
      id: 'product7',
      name: 'Name Seven',
      src: '../../content/images/ecom/products/model7.jpg',
      price: '666',
      saleIcon: 'n',
      newIcon: 'n'
    }
  ];
  constructor(
    private accountService: AccountService,
    private loginModalService: LoginModalService,
    private eventManager: JhiEventManager,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.accountService.identity().then((account: Account) => {
      this.account = account;
    });
    this.registerAuthenticationSuccess();
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
  getData(data: SlidesOutputData) {
    this.activeSlides = data;
    console.log(this.activeSlides);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ProductDetailModelComponent, {
      width: '250px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
