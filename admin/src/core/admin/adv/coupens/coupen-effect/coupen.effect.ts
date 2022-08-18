/*
 * SpurtCommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */

import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import * as actions from '../coupen-action/coupen.action';
import { catchError } from 'rxjs/internal/operators';
import { CoupenService } from '../coupen.service';
import { CoupencountResponseModel } from '../coupen-model/coupencount.response.model';
import { Store } from '@ngrx/store';
import * as store from '../../../../app.state.interface';

@Injectable()
export class CoupenEffect {
  constructor(
    private action$: Actions,
    private service: CoupenService,
    protected appState: Store<store.AppState>
  ) {}

  // Coupen List
  @Effect()
  doCoupenLists$: Observable<Action> = this.action$.pipe(
    ofType(actions.ActionTypes.DO_COUPEN_LIST),
    map((action: actions.DoCoupenListAction) => action.payload),
    switchMap(state => {
      return this.service.coupenList(state).pipe(
        switchMap(user => [new actions.DoCoupenListSuccessAction(user)]),
        catchError(error => of(new actions.DoCoupenListFailAction(error)))
      );
    })
  );

  // Coupen Count List
  @Effect()
  doCoupenCountLists$: Observable<Action> = this.action$.pipe(
    ofType(actions.ActionTypes.DO_COUPEN_LIST_COUNT),
    map((action: actions.DoCoupenListCountAction) => action.payload),
    switchMap(state => {
      return this.service.coupenList(state).pipe(
        switchMap(user => [new actions.DoCoupenListCountSuccessAction(user)]),
        catchError(error => of(new actions.DoCoupenListCountFailAction(error)))
      );
    })
  );

  // Coupen Active List
  @Effect()
  doCoupenActiveLists$: Observable<Action> = this.action$.pipe(
    ofType(actions.ActionTypes.DO_COUPEN_LIST_ACTIVE),
    map((action: actions.DoCoupenListActiveAction) => action.payload),
    switchMap(state => {
      return this.service.coupenList(state).pipe(
        switchMap(user => [new actions.DoCoupenListActiveSuccessAction(user)]),
        catchError(error => of(new actions.DoCoupenListActiveFailAction(error)))
      );
    })
  );

  // Coupen In-Active List
  @Effect()
  doCoupenInActiveLists$: Observable<Action> = this.action$.pipe(
    ofType(actions.ActionTypes.DO_COUPEN_LIST_IN_ACTIVE),
    map((action: actions.DoCoupenListInActiveAction) => action.payload),
    switchMap(state => {
      return this.service.coupenList(state).pipe(
        switchMap(user => [
          new actions.DoCoupenListInActiveSuccessAction(user)
        ]),
        catchError(error =>
          of(new actions.DoCoupenListInActiveFailAction(error))
        )
      );
    })
  );

  // Coupen LIST PAGINATION
  @Effect()
  doCoupenPagination$: Observable<Action> = this.action$.pipe(
    ofType(actions.ActionTypes.DO_COUPEN_PAGINATION_ACTION),
    map((action: actions.DoCoupenPaginationAction) => action.payload),
    switchMap(state => {
      return this.service.coupenPagiantion(state).pipe(
        switchMap(user => [
          new actions.DoCoupenPaginationSuccessAction(
            new CoupencountResponseModel(user)
          )
        ]),
        catchError(error => of(new actions.DoCoupenPaginationFailAction(error)))
      );
    })
  );

  // ADD COUPEN
  @Effect()
  doAddCoupen$: Observable<Action> = this.action$.pipe(
    ofType(actions.ActionTypes.DO_ADD_COUPEN_ACTION),
    map((action: actions.DoCoupenAddAction) => action.payload),
    switchMap(state => {
      console.log('do coupen effect', state);
      return this.service.addCoupen(state).pipe(
        switchMap(salesPayments => [
          new actions.DoCoupenAddSuccessAction(salesPayments)
        ]),
        catchError(error => of(new actions.DoCoupenAddFailAction(error)))
      );
    })
  );

  // Update
  @Effect()
  doUpdateCoupen$: Observable<Action> = this.action$.pipe(
    ofType(actions.ActionTypes.DO_UPDATE_COUPEN_ACTION),
    map((action: actions.DoCoupenUpdateAction) => action.payload),
    switchMap(state => {
      const Id = state.coupenId;
      if (state.image === '') {
        delete state.image;
      }
      return this.service.updateCoupen(state, Id).pipe(
        tap(response => {
          this.appState.dispatch(
            new actions.DoCoupenListActiveAction({ count: 1, status: 1 })
          );
          this.appState.dispatch(
            new actions.DoCoupenListInActiveAction({ count: 1, status: 0 })
          );
        }),
        switchMap(user => [new actions.DoCoupenUpdateSuccessAction(user)]),
        catchError(error => of(new actions.DoCoupenUpdateFailAction(error)))
      );
    })
  );

  // // Delete
  @Effect()
  doDeleteCoupen$: Observable<Action> = this.action$.pipe(
    ofType(actions.ActionTypes.DO_DELETE_COUPEN_ACTION),
    map((action: actions.DoCoupenDeleteAction) => action.payload),
    switchMap(state => {
      const coupenId = state.coupenId;
      return this.service.deleteCoupen(state, coupenId).pipe(
        tap(response => {
          this.appState.dispatch(
            new actions.DoCoupenListActiveAction({ count: 1, status: 1 })
          );
          this.appState.dispatch(
            new actions.DoCoupenListInActiveAction({ count: 1, status: 0 })
          );
        }),
        map(update => new actions.DoCoupenDeleteSuccessAction(update)),
        catchError(error => of(new actions.DoCoupenDeleteFailAction(error)))
      );
    })
  );

  // Product Bulk Delete
  @Effect()
  doProductCoupenDelete$: Observable<Action> = this.action$.pipe(
    ofType(actions.ActionTypes.DO_COUPEN_BULK_DELETE),
    map((action: actions.DoCoupenBulkDelete) => action.payload),
    switchMap(state => {
      return this.service.coupenBulkDelete(state).pipe(
        tap(response => {
          this.appState.dispatch(
            new actions.DoCoupenListActiveAction({ count: 1, status: 1 })
          );
          this.appState.dispatch(
            new actions.DoCoupenListInActiveAction({ count: 1, status: 0 })
          );
        }),
        switchMap(user => [new actions.DoCoupenBulkDeleteSuccess(user)]),
        catchError(error => of(new actions.DoCoupenBulkDeleteFail(error)))
      );
    })
  );
}
