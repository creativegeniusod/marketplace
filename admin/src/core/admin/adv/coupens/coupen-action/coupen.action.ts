/*
 * spurtcommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */
import { type } from '../../../shared/utility/utilityHelpers';
import { Action } from '@ngrx/store';
import { CoupenlistModel } from '../coupen-model/coupenlist.model';
import { CoupendeleteModel } from '../coupen-model/coupendelete.model';
import { CoupencountModel } from '../coupen-model/coupencount.model';
import { CoupenupdateModel } from '../coupen-model/coupenupdate.model';
import {
  DoProductBulkDelete,
  DoProductBulkDeleteFail,
  DoProductBulkDeleteSuccess
} from '../../../catalog/product/product-action/product.action';

export const ActionTypes = {
  DO_COUPEN_LIST: type('[Coupen] Do CoupenList'),
  DO_COUPEN_LIST_SUCCESS: type('[Coupen] Do Coupen Success'),
  DO_COUPEN_LIST_FAIL: type('[Coupen] Do Coupen Fail'),

  DO_COUPEN_LIST_COUNT: type('[Coupen] Do CoupenList count'),
  DO_COUPEN_LIST_SUCCESS_COUNT: type('[Coupen] Do Coupen Success count'),
  DO_COUPEN_LIST_FAIL_COUNT: type('[Coupen] Do Coupen Fail count'),

  DO_COUPEN_LIST_ACTIVE: type('[Coupen] Do CoupenList active'),
  DO_COUPEN_LIST_SUCCESS_ACTIVE: type('[Coupen] Do Coupen Success active'),
  DO_COUPEN_LIST_FAIL_ACTIVE: type('[Coupen] Do Coupen Fail active'),

  DO_COUPEN_LIST_IN_ACTIVE: type('[Coupen] Do CoupenList In-active'),
  DO_COUPEN_LIST_SUCCESS_IN_ACTIVE: type(
    '[Coupen] Do Coupen Success In-active'
  ),
  DO_COUPEN_LIST_FAIL_IN_ACTIVE: type('[Coupen] Do Coupen Fail In-active'),

  DO_COUPEN_PAGINATION_ACTION: type('[Coupen Pagination] Do Coupen Paination '),
  DO_COUPEN_PAGINATION_SUCCESS: type(
    '[Coupen Pagination] Do Coupen Paination  Success'
  ),
  DO_COUPEN_PAGINATION_FAIL: type(
    '[Coupen Pagination] Do Coupen Paination  Fail'
  ),

  DO_ADD_COUPEN_ACTION: type('[Coupen Add] Do Coupen Add '),
  DO_ADD_COUPEN_SUCCESS: type('[Coupen Add] Do Coupen Add  Success'),
  DO_ADD_COUPEN_FAIL: type('[Coupen Add] Do Coupen Add  Fail'),

  DO_UPDATE_COUPEN_ACTION: type('[Coupen Update] Do Coupen Update '),
  DO_UPDATE_COUPEN_SUCCESS: type('[Coupen Update] Do Coupen Update  Success'),
  DO_UPDATE_COUPEN_FAIL: type('[Coupen Update] Do Coupen Update  Fail'),

  DO_DELETE_COUPEN_ACTION: type('[Coupen Delete] Do Coupen Delete '),
  DO_DELETE_COUPEN_SUCCESS: type('[Coupen Delete] Do Coupen Delete  Success'),
  DO_DELETE_COUPEN_FAIL: type('[Coupen Delete] Do Coupen Delete  Fail'),

  DO_COUPEN_BULK_DELETE: type('[COUPEN BULK DELETE] DO Coupen Bulk Delete'),
  DO_COUPEN_BULK_DELETE_SUCCESS: type(
    '[COUPEN BULK DELETE SUCCESS] Do Coupen Bulk Delete Success'
  ),
  DO_COUPEN_BULK_DELETE_FAIL: type(
    '[COUPEN BULK DELETE] Do Coupen Bulk Delete Fail'
  )
};

// COUPEN LIST

export class DoCoupenListAction implements Action {
  type = ActionTypes.DO_COUPEN_LIST;

  constructor(public payload: CoupenlistModel) {}
}

export class DoCoupenListSuccessAction implements Action {
  type = ActionTypes.DO_COUPEN_LIST_SUCCESS;

  constructor(public payload: any) {}
}

export class DoCoupenListFailAction implements Action {
  type = ActionTypes.DO_COUPEN_LIST_FAIL;

  constructor(public payload: any = null) {}
}

// COUPEN COUNT LIST

export class DoCoupenListCountAction implements Action {
  type = ActionTypes.DO_COUPEN_LIST_COUNT;

  constructor(public payload: CoupenlistModel) {}
}

export class DoCoupenListCountSuccessAction implements Action {
  type = ActionTypes.DO_COUPEN_LIST_SUCCESS_COUNT;

  constructor(public payload: any) {}
}

export class DoCoupenListCountFailAction implements Action {
  type = ActionTypes.DO_COUPEN_LIST_FAIL_COUNT;

  constructor(public payload: any = null) {}
}

// COUPEN ACTIVE LIST

export class DoCoupenListActiveAction implements Action {
  type = ActionTypes.DO_COUPEN_LIST_ACTIVE;

  constructor(public payload: any) {}
}

export class DoCoupenListActiveSuccessAction implements Action {
  type = ActionTypes.DO_COUPEN_LIST_SUCCESS_ACTIVE;

  constructor(public payload: any) {}
}

export class DoCoupenListActiveFailAction implements Action {
  type = ActionTypes.DO_COUPEN_LIST_FAIL_ACTIVE;

  constructor(public payload: any = null) {}
}

// COUPEN IN-ACTIVE LIST

export class DoCoupenListInActiveAction implements Action {
  type = ActionTypes.DO_COUPEN_LIST_IN_ACTIVE;

  constructor(public payload: any) {}
}

export class DoCoupenListInActiveSuccessAction implements Action {
  type = ActionTypes.DO_COUPEN_LIST_SUCCESS_IN_ACTIVE;

  constructor(public payload: any) {}
}

export class DoCoupenListInActiveFailAction implements Action {
  type = ActionTypes.DO_COUPEN_LIST_FAIL_IN_ACTIVE;

  constructor(public payload: any = null) {}
}

// Coupen LIST  PAGINATION

export class DoCoupenPaginationAction implements Action {
  type = ActionTypes.DO_COUPEN_PAGINATION_ACTION;

  constructor(public payload: CoupencountModel) {}
}

export class DoCoupenPaginationSuccessAction implements Action {
  type = ActionTypes.DO_COUPEN_PAGINATION_SUCCESS;

  constructor(public payload: any) {}
}

export class DoCoupenPaginationFailAction implements Action {
  type = ActionTypes.DO_COUPEN_PAGINATION_SUCCESS;

  constructor(public payload: any = null) {}
}

// Add COUPEN ACTION

export class DoCoupenAddAction implements Action {
  type = ActionTypes.DO_ADD_COUPEN_ACTION;

  constructor(public payload: any) {
    console.log('add coupen action', payload);

  }
}

export class DoCoupenAddSuccessAction implements Action {
  type = ActionTypes.DO_ADD_COUPEN_SUCCESS;

  constructor(public payload: any) {}
}

export class DoCoupenAddFailAction implements Action {
  type = ActionTypes.DO_ADD_COUPEN_FAIL;

  constructor(public payload: any = null) {}
}

// # UPDATE COUPEN ACTION

export class DoCoupenUpdateAction implements Action {
  type = ActionTypes.DO_UPDATE_COUPEN_ACTION;

  constructor(public payload: CoupenupdateModel) {}
}

export class DoCoupenUpdateSuccessAction implements Action {
  type = ActionTypes.DO_UPDATE_COUPEN_SUCCESS;

  constructor(public payload: any) {}
}

export class DoCoupenUpdateFailAction implements Action {
  type = ActionTypes.DO_UPDATE_COUPEN_FAIL;

  constructor(public payload: any = null) {}
}

// #  DELETE COUPEN ACTION

export class DoCoupenDeleteAction implements Action {
  type = ActionTypes.DO_DELETE_COUPEN_ACTION;

  constructor(public payload: CoupendeleteModel) {}
}

export class DoCoupenDeleteSuccessAction implements Action {
  type = ActionTypes.DO_DELETE_COUPEN_SUCCESS;

  constructor(public payload: any) {}
}

export class DoCoupenDeleteFailAction implements Action {
  type = ActionTypes.DO_DELETE_COUPEN_FAIL;

  constructor(public payload: any = null) {}
}

// Do Coupen Bulk Delete
export class DoCoupenBulkDelete implements Action {
  type = ActionTypes.DO_COUPEN_BULK_DELETE;

  constructor(public payload: any = null) {}
}

export class DoCoupenBulkDeleteSuccess implements Action {
  type = ActionTypes.DO_COUPEN_BULK_DELETE_SUCCESS;

  constructor(public payload: any) {}
}

export class DoCoupenBulkDeleteFail implements Action {
  type = ActionTypes.DO_COUPEN_BULK_DELETE_FAIL;

  constructor(public payload: any = null) {}
}

export type Actions =
  | DoCoupenListAction
  | DoCoupenListSuccessAction
  | DoCoupenListFailAction
  | DoCoupenPaginationAction
  | DoCoupenPaginationSuccessAction
  | DoCoupenPaginationSuccessAction
  | DoCoupenAddAction
  | DoCoupenAddSuccessAction
  | DoCoupenAddFailAction
  | DoCoupenUpdateAction
  | DoCoupenUpdateSuccessAction
  | DoCoupenUpdateFailAction
  | DoCoupenDeleteAction
  | DoCoupenDeleteSuccessAction
  | DoCoupenDeleteFailAction
  | DoCoupenBulkDelete
  | DoCoupenBulkDeleteSuccess
  | DoCoupenBulkDeleteFail;
