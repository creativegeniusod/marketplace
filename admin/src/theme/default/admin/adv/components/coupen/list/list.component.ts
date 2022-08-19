/*
 * SpurtCommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */
import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { NgbPanelChangeEvent } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
// Store Module
import { CoupenService } from '../../../../../../../core/admin/adv/coupens/coupen.service';
import { CoupenSandbox } from '../../../../../../../core/admin/adv/coupens/coupen.sandbox';
import { CategoriesSandbox } from '../../../../../../../core/admin/catalog/category/categories.sandbox';
import { ConfigService } from '../../../../../../../core/admin/service/config.service';
import { ToastrManager } from 'ng6-toastr-notifications';

@Component({
  selector: 'app-spurt-cms-coupen-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  encapsulation: ViewEncapsulation.None,
  styles: [
    `
      .dark-modal .modal-content {
        background-color: #009efb;
        color: white;
      }

      .dark-modal .close {
        color: white;
      }

      .light-blue-backdrop {
        background-color: #5cb3fd;
      }

      .image-manager .modal-dialog {
        max-width: 70%;
      }
    `
  ]
})
export class CoupenListComponent implements OnInit {
  //  variables
  public closeResult: string;
  public page: any;
  public pageSize = '10';
  private keyword: any = '';
  private offset: number;
  private currentPage: number;
  public index: number;
  public popoverContent: string;
  public pagenationCount: boolean;
  public imageUrl: string;
  public checkCondition: any = [];
  public checkmodules: any = [];
  public checkedData: any = [];
  public unCheckData: any = [];
  public coupenListImage = {};

  beforeChange($event: NgbPanelChangeEvent) {
    if ($event.panelId === 'preventchange-2') {
      $event.preventDefault();
    }

    if ($event.panelId === 'preventchange-3' && $event.nextState === false) {
      $event.preventDefault();
    }
  }

  constructor(
    public sandbox: CoupenSandbox,
    public categoriessandbox: CategoriesSandbox,
    private service: CoupenService,
    private toastr: ToastrManager,
    private router: Router,
    private configService: ConfigService
  ) {}

  // initially calls regSubscriptionEvents,coupenList
  ngOnInit  () {
    // this.getCategoryList();  commented for the time
    this.pageSize = localStorage.getItem('itemsPerPage')
      ? localStorage.getItem('itemsPerPage')
      : this.pageSize;
    this.imageUrl = this.configService.getImageUrl();
    this.pagenationCount = true;
    this.regSubscriptionEvents();
    this.index = 0;
    this.coupenList(this.offset, this.keyword);
  }

   // calling category list api with pagination
  getCategoryList() {
    const param: any = {};
    param.limit = '';
    param.offset = '';
    param.keyword = undefined;
    param.sortOrder = '';
    param.status = 1;
    this.categoriessandbox.categorylist(param);    
  }

  // this function navigate  to  create page coupen
  AddCoupen() {
    this.service.setCoupenListData('');
    this.router.navigate(['/adv/Coupens/add']);
  }

  /**
   * Handles form 'submit' event. Calls sandbox getCoupenList . function if form is valid.
   *
   * @param event form event
   * @param form entire form value
   */

  coupenList(offset: number = 0, keyword) {
    const params: any = {};
    params.offset = offset;
    params.limit = this.pageSize;
    params.keyword = this.keyword;
    this.sandbox.getCoupenList(params);
    if (this.pagenationCount) {
      params.count = 'true';
      this.sandbox.getCoupenPagination(params);
    }
    console.log("Get banne action");
    this.coupenListCount(0, keyword);
  }

  // to get total count
  coupenListCount(offset: number = 0, keyword) {
    const params: any = {};
    params.offset = offset;
    params.limit = this.pageSize;
    params.keyword = this.keyword;
    params.count = 1;
    // params.status = 1;
    // alert("ADV component");
    this.sandbox.getCoupenListCount(params);
  }

  // mat pagination function
  onPageChange(event: any) {
    this.currentPage = event.offset;
    this.pageSize = event.pageSize;
    this.index = event.pageIndex;
    const offset = event.pageSize * event.pageIndex;
    this.coupenList(offset, this.pageSize);
  }

  //  edit
  editCoupen(coupenData) {
    this.service.setCoupenListData(coupenData);
    this.router.navigate(['/adv/coupens/edit', coupenData.coupenId]);
  }

  //  function deleteCoupen to delete particular id in coupen list
  deleteCoupen(coupenId, deletePop) {
    this.popoverContent = deletePop;
    event.stopPropagation();
    this.sandbox.deletecoupen({ coupenId: coupenId });
  }

  // popup  regSubscriptionEvents
  regSubscriptionEvents() {
    this.sandbox.getdeletecoupen$.subscribe(_delete => {
      if (_delete && _delete.status && _delete.status === 1) {
        this.coupenList(this.offset, this.keyword);
      }
    });
  }

  // bulkDelete
  bulkDelete() {
    this.unCheckData = [];
    const param: any = {};
    param.coupenId = this.checkedData;
    this.sandbox.bulkDelete(param);
    this.checkedData = [];
    this.sandbox.getdeletecoupen$.subscribe(_delete => {
      if (_delete) {
        if (_delete.status === 1) {
          this.checkedData = [];
          this.coupenList(this.offset, this.keyword);
        }
      }
    });
  }

  selectChkBox(event, pageId) {
    if (event.target.checked === true) {
      this.checkedData.push(pageId);
    }
    if (event.target.checked === false) {
      this.unCheckData.push(pageId);
      this.unCheckData.forEach((value, index) => {
        this.checkedData = this.checkedData.filter(_value => {
          if (value === _value) {
            return false;
          } else {
            return true;
          }
        });
      });
    }
    this.unCheckData = [];
  }

  // bulkDeleteEmpty
  bulkDeleteEmpty() {
    this.showNotificationError('Choose atleast one Coupen');
  }

  /**
   * Shows error notification with given title and message
   *
   * @params message
   */
  private showNotificationError(message: string): void {
    this.toastr.errorToastr(message);
  }

  // CoupenList Image Loader
  CoupenListImageLoading(id) {
    this.coupenListImage[id] = true;
  }
}
