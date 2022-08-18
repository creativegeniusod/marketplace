/*
 * SpurtCommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */
import { Injectable, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { ToastrManager } from 'ng6-toastr-notifications';
import * as coupenActions from '../coupens/coupen-action/coupen.action';
import { Subscription } from 'rxjs/index';
import * as store from '../../../app.state.interface';
import { Router } from '@angular/router';
import {
  getaddCoupen,
  getcoupenaddfailed,
  getcoupenaddloaded,
  getcoupenaddloading,
  getcoupencountfailed,
  getcoupencountloaded,
  getcoupencountloading,
  getcoupendeletefailed,
  getcoupendeleteloaded,
  getcoupendeleteloading,
  getcoupenlistfailed,
  getcoupenlistloaded,
  getcoupenlistloading,
  getCoupenlst,
  getcoupenpagination,
  getcoupenupdatefailed,
  getcoupenupdateloaded,
  getcoupenupdateloading,
  getdeletecoupen,
  getUpdatecoupen,
  getcoupenListCountLoading,
  getcoupenListCountFailed,
  getcoupenListCountLoaded,
  getcoupenListCount,
  getcoupenListActiveLoading,
  getcoupenListACtiveFailed,
  getcoupenListActiveLoaded,
  getcoupenListActive,
  getcoupenListInActiveLoading,
  getcoupenListInACtiveFailed,
  getcoupenListInActiveLoaded,
  getcoupenListInActive
} from './coupen-reducer/coupen.selector';
import { getAddCoupens } from './coupen-reducer/coupen.selector';
import { CoupenlistModel } from './coupen-model/coupenlist.model';
import { CoupendeleteModel } from './coupen-model/coupendelete.model';
import { CoupencountModel } from './coupen-model/coupencount.model';
import * as pagesActions from '../pages/pagesaction/page.action';

@Injectable()
export class CoupenSandbox implements OnDestroy {
  public getcoupenlist$ = this.appState.select(getCoupenlst);
  public getcoupenpagelength$ = this.appState.select(getcoupenpagination);
  public getAddNewCoupen$ = this.appState.select(getAddCoupens);
  public getaddCoupen$ = this.appState.select(getaddCoupen);
  public getUpdatecoupen$ = this.appState.select(getUpdatecoupen);
  public getdeletecoupen$ = this.appState.select(getdeletecoupen);
  public getcoupenaddloaded$ = this.appState.select(getcoupenaddloaded);
  public getcoupenaddfailed$ = this.appState.select(getcoupenaddfailed);
  public getcoupenaddloading$ = this.appState.select(getcoupenaddloading);
  public getcoupenupdateloading$ = this.appState.select(getcoupenupdateloading);
  public getcoupenupdateloaded$ = this.appState.select(getcoupenupdateloaded);
  public getcoupenupdatefailed$ = this.appState.select(getcoupenupdatefailed);
  public getcoupendeleteloading$ = this.appState.select(getcoupendeleteloading);
  public getcoupendeleteloaded$ = this.appState.select(getcoupendeleteloaded);
  public getcoupendeletefailed$ = this.appState.select(getcoupendeletefailed);
  public getcoupencountloading$ = this.appState.select(getcoupencountloading);
  public getcoupencountloaded$ = this.appState.select(getcoupencountloaded);
  public getcoupencountfailed$ = this.appState.select(getcoupencountfailed);
  public getcoupenlistloaded$ = this.appState.select(getcoupenlistloaded);
  public getcoupenlistfailed$ = this.appState.select(getcoupenlistfailed);
  public getcoupenlistloading$ = this.appState.select(getcoupenlistloading);

  public getcoupenListCount$ = this.appState.select(getcoupenListCount);
  public getcoupenListCountLoaded$ = this.appState.select(
    getcoupenListCountLoaded
  );
  public getcoupenListCountFailed$ = this.appState.select(
    getcoupenListCountFailed
  );
  public getcoupenListCountLoading$ = this.appState.select(
    getcoupenListCountLoading
  );

  public getcoupenListActive$ = this.appState.select(getcoupenListActive);
  public getcoupenListActiveLoaded$ = this.appState.select(
    getcoupenListActiveLoaded
  );
  public getcoupenListACtiveFailed$ = this.appState.select(
    getcoupenListACtiveFailed
  );
  public getcoupenListActiveLoading$ = this.appState.select(
    getcoupenListActiveLoading
  );

  public getcoupenListInActive$ = this.appState.select(getcoupenListInActive);
  public getcoupenListInActiveLoaded$ = this.appState.select(
    getcoupenListInActiveLoaded
  );
  public getcoupenListInACtiveFailed$ = this.appState.select(
    getcoupenListInACtiveFailed
  );
  public getcoupenListInActiveLoading$ = this.appState.select(
    getcoupenListInActiveLoading
  );

  private subscriptions: Array<Subscription> = [];

  constructor(
    protected appState: Store<store.AppState>,
    private router: Router,
    private toastr: ToastrManager
  ) {
    this.subscribe();
  }

  public getCoupenList(value: any) {
    this.appState.dispatch(
      new coupenActions.DoCoupenListAction(new CoupenlistModel(value))
    );
  }
  public getCoupenListCount(value: any) {
    this.appState.dispatch(
      new coupenActions.DoCoupenListCountAction(new CoupenlistModel(value))
    );
  }
  public getCoupenListActive(value: any) {
    this.appState.dispatch(
      new coupenActions.DoCoupenListActiveAction(new CoupenlistModel(value))
    );
  }

  public getCoupenListInActive(value: any) {
    this.appState.dispatch(
      new coupenActions.DoCoupenListInActiveAction(new CoupenlistModel(value))
    );
  }

  public getCoupenPagination(value: any) {
    this.appState.dispatch(
      new coupenActions.DoCoupenPaginationAction(new CoupencountModel(value))
    );
  }

  public addCoupen(data) {
    console.log('add coupen sandbox', data);
    this.appState.dispatch(new coupenActions.DoCoupenAddAction(data));
  }

  public UpdateCoupen(data) {
    console.log("Trigger Action");
    this.appState.dispatch(new coupenActions.DoCoupenUpdateAction(data));
  }

  public deletecoupen(data) {
    this.appState.dispatch(
      new coupenActions.DoCoupenDeleteAction(new CoupendeleteModel(data))
    );
  }

  // Do coupen Bulk Delete
  public bulkDelete(value) {
    this.appState.dispatch(new coupenActions.DoCoupenBulkDelete(value));
  }

  subscribe() {
    this.subscriptions.push(
      this.getAddNewCoupen$.subscribe(data => {
        if (data && data.status === 1) {
          if (data.message) {
            this.router.navigate(['/adv/coupens/list']);
          }
        }
      })
    );

    this.subscriptions.push(
      this.getUpdatecoupen$.subscribe(data => {
        if (data && data.status === 1) {
          if (data.message) {
            this.router.navigate(['/adv/coupens/list']);
          }
        }
      })
    );
  }

  public ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}
