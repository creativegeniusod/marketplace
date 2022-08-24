/*
 * spurtcommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */
import { Component, OnInit, Inject, PLATFORM_ID, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { ConfigService } from '../../../../core/service/config.service';
import { CommonSandbox } from '../../../../core/common/common.sandbox';
import { ProductControlSandbox } from '../../../../core/product-control/product-control.sandbox';
import { environment } from '../../../../environments/environment';
import { isPlatformBrowser } from '@angular/common';
import { ListsSandbox } from '../../../../core/lists/lists.sandbox';
import { MatSnackBar } from '@angular/material';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.scss']
})
export class TopMenuComponent implements OnInit, OnDestroy {
  // path of the image
  public imagePath: any;
  // menu
  public accountMenuTrigger: any;
  public index = 0;
  // public languageKey = 'language';
  private subscriptions: Array<Subscription> = [];
  isSearchInput: boolean = false;
  searchValue: any = '';
  public searchLists: any = [];


  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    public configService: ConfigService,
    public router: Router,
    public listSandbox: ListsSandbox,
    public commonSandbox: CommonSandbox,
    public productControl: ProductControlSandbox,
    public snackBar: MatSnackBar
  ) { }

  /**calls commonSandbox doGetProfile with default param
   * after calls commonSandbox getWishlistCounts.
   *
   * */
  ngOnInit() {
    this.imagePath = environment.imageUrl;
    if (isPlatformBrowser(this.platformId)) {
      if (localStorage.getItem('userToken')) {
        this.commonSandbox.doGetProfile();
        const params: any = {};
        params.limit = '';
        params.offset = 0;
        params.count = true;
        this.commonSandbox.getWishlistCounts(params);
      }
    }
  }

  toogleInput() {
    this.isSearchInput = !this.isSearchInput;
  }

  /**first clear the local storage data.
   * calls commonSandbox doSignout,
   * Then navigate to authentication module
   * */
  signOut() {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.clear();
      sessionStorage.clear();
    }
    this.commonSandbox.doSignout();
    this.productControl.clearCart();
    this.router.navigate(['/auth']);
  }

  // send the search value to product through navigation.If no value send 1 as default value.
  public searchData(value) {
    this.searchValue = value;
    if (!value) {
      // this.router.navigate(['/products'], {
      //     queryParams: { keyword: this.searchValue }
      // });
      this.searchLists = [];
    } else {
      // this.router.navigate(['/products'], {
      //     queryParams: { keyword: this.searchValue }
      // });
      this.getProductList(this.searchValue);
    }
  }
  /**
     * fetch product list from service. calling getProductList function from sandbox
     *
     * @param keyword filter
     */
  getProductList(keyword) {
    const params: any = {};
    params.limit = 100;
    params.offset = 0;
    params.categoryId = '';
    params.keyword = keyword;
    params.price = 'ASC';
    params.priceFrom = 0;
    params.priceTo = '';
    if (keyword) {
      this.listSandbox.getProductList(params)
      this.listSandbox.productlist$.subscribe(data => {
        this.searchLists = [...data];
      })
    }

  }

  ngOnDestroy() {
    this.subscriptions.forEach(each => {
      each.unsubscribe();
    });
  }
}
