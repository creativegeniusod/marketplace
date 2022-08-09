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
import { BannerlistModel } from '../banner-model/bannerlist.model';
import { BannerdeleteModel } from '../banner-model/bannerdelete.model';
import { BannercountModel } from '../banner-model/bannercount.model';
import { BannerupdateModel } from '../banner-model/bannerupdate.model';
import {
  DoProductBulkDelete,
  DoProductBulkDeleteFail,
  DoProductBulkDeleteSuccess
} from '../../../catalog/product/product-action/product.action';

export const ActionTypes = {
  DO_BANNER_LIST: type('[Banner] Do BannerList'),
  DO_BANNER_LIST_SUCCESS: type('[Banner] Do Banner Success'),
  DO_BANNER_LIST_FAIL: type('[Banner] Do Banner Fail'),

  DO_BANNER_LIST_COUNT: type('[Banner] Do BannerList count'),
  DO_BANNER_LIST_SUCCESS_COUNT: type('[Banner] Do Banner Success count'),
  DO_BANNER_LIST_FAIL_COUNT: type('[Banner] Do Banner Fail count'),

  DO_BANNER_LIST_ACTIVE: type('[Banner] Do BannerList active'),
  DO_BANNER_LIST_SUCCESS_ACTIVE: type('[Banner] Do Banner Success active'),
  DO_BANNER_LIST_FAIL_ACTIVE: type('[Banner] Do Banner Fail active'),

  DO_BANNER_LIST_IN_ACTIVE: type('[Banner] Do BannerList In-active'),
  DO_BANNER_LIST_SUCCESS_IN_ACTIVE: type(
    '[Banner] Do Banner Success In-active'
  ),
  DO_BANNER_LIST_FAIL_IN_ACTIVE: type('[Banner] Do Banner Fail In-active'),

  DO_BANNER_PAGINATION_ACTION: type('[Banner Pagination] Do Banner Paination '),
  DO_BANNER_PAGINATION_SUCCESS: type(
    '[Banner Pagination] Do Banner Paination  Success'
  ),
  DO_BANNER_PAGINATION_FAIL: type(
    '[Banner Pagination] Do Banner Paination  Fail'
  ),

  DO_ADD_BANNER_ACTION: type('[Banner Add] Do Banner Add '),
  DO_ADD_BANNER_SUCCESS: type('[Banner Add] Do Banner Add  Success'),
  DO_ADD_BANNER_FAIL: type('[Banner Add] Do Banner Add  Fail'),

  DO_UPDATE_BANNER_ACTION: type('[Banner Update] Do Banner Update '),
  DO_UPDATE_BANNER_SUCCESS: type('[Banner Update] Do Banner Update  Success'),
  DO_UPDATE_BANNER_FAIL: type('[Banner Update] Do Banner Update  Fail'),

  DO_DELETE_BANNER_ACTION: type('[Banner Delete] Do Banner Delete '),
  DO_DELETE_BANNER_SUCCESS: type('[Banner Delete] Do Banner Delete  Success'),
  DO_DELETE_BANNER_FAIL: type('[Banner Delete] Do Banner Delete  Fail'),

  DO_BANNER_BULK_DELETE: type('[BANNER BULK DELETE] DO Banner Bulk Delete'),
  DO_BANNER_BULK_DELETE_SUCCESS: type(
    '[BANNER BULK DELETE SUCCESS] Do Banner Bulk Delete Success'
  ),
  DO_BANNER_BULK_DELETE_FAIL: type(
    '[BANNER BULK DELETE] Do Banner Bulk Delete Fail'
  )
};

// BANNER LIST

export class DoBannerListAction implements Action {
  type = ActionTypes.DO_BANNER_LIST;

  constructor(public payload: BannerlistModel) {}
}

export class DoBannerListSuccessAction implements Action {
  type = ActionTypes.DO_BANNER_LIST_SUCCESS;

  constructor(public payload: any) {}
}

export class DoBannerListFailAction implements Action {
  type = ActionTypes.DO_BANNER_LIST_FAIL;

  constructor(public payload: any = null) {}
}

// BANNER COUNT LIST

export class DoBannerListCountAction implements Action {
  type = ActionTypes.DO_BANNER_LIST_COUNT;

  constructor(public payload: BannerlistModel) {}
}

export class DoBannerListCountSuccessAction implements Action {
  type = ActionTypes.DO_BANNER_LIST_SUCCESS_COUNT;

  constructor(public payload: any) {}
}

export class DoBannerListCountFailAction implements Action {
  type = ActionTypes.DO_BANNER_LIST_FAIL_COUNT;

  constructor(public payload: any = null) {}
}

// BANNER ACTIVE LIST

export class DoBannerListActiveAction implements Action {
  type = ActionTypes.DO_BANNER_LIST_ACTIVE;

  constructor(public payload: any) {}
}

export class DoBannerListActiveSuccessAction implements Action {
  type = ActionTypes.DO_BANNER_LIST_SUCCESS_ACTIVE;

  constructor(public payload: any) {}
}

export class DoBannerListActiveFailAction implements Action {
  type = ActionTypes.DO_BANNER_LIST_FAIL_ACTIVE;

  constructor(public payload: any = null) {}
}

// BANNER IN-ACTIVE LIST

export class DoBannerListInActiveAction implements Action {
  type = ActionTypes.DO_BANNER_LIST_IN_ACTIVE;

  constructor(public payload: any) {}
}

export class DoBannerListInActiveSuccessAction implements Action {
  type = ActionTypes.DO_BANNER_LIST_SUCCESS_IN_ACTIVE;

  constructor(public payload: any) {}
}

export class DoBannerListInActiveFailAction implements Action {
  type = ActionTypes.DO_BANNER_LIST_FAIL_IN_ACTIVE;

  constructor(public payload: any = null) {}
}

// Banner LIST  PAGINATION

export class DoBannerPaginationAction implements Action {
  type = ActionTypes.DO_BANNER_PAGINATION_ACTION;

  constructor(public payload: BannercountModel) {}
}

export class DoBannerPaginationSuccessAction implements Action {
  type = ActionTypes.DO_BANNER_PAGINATION_SUCCESS;

  constructor(public payload: any) {}
}

export class DoBannerPaginationFailAction implements Action {
  type = ActionTypes.DO_BANNER_PAGINATION_SUCCESS;

  constructor(public payload: any = null) {}
}

// Add BANNER ACTION

export class DoBannerAddAction implements Action {
  type = ActionTypes.DO_ADD_BANNER_ACTION;

  constructor(public payload: any) {
    console.log('add banner action', payload);

  }
}

export class DoBannerAddSuccessAction implements Action {
  type = ActionTypes.DO_ADD_BANNER_SUCCESS;

  constructor(public payload: any) {}
}

export class DoBannerAddFailAction implements Action {
  type = ActionTypes.DO_ADD_BANNER_FAIL;

  constructor(public payload: any = null) {}
}

// # UPDATE BANNER ACTION

export class DoBannerUpdateAction implements Action {
  type = ActionTypes.DO_UPDATE_BANNER_ACTION;

  constructor(public payload: BannerupdateModel) {}
}

export class DoBannerUpdateSuccessAction implements Action {
  type = ActionTypes.DO_UPDATE_BANNER_SUCCESS;

  constructor(public payload: any) {}
}

export class DoBannerUpdateFailAction implements Action {
  type = ActionTypes.DO_UPDATE_BANNER_FAIL;

  constructor(public payload: any = null) {}
}

// #  DELETE BANNER ACTION

export class DoBannerDeleteAction implements Action {
  type = ActionTypes.DO_DELETE_BANNER_ACTION;

  constructor(public payload: BannerdeleteModel) {}
}

export class DoBannerDeleteSuccessAction implements Action {
  type = ActionTypes.DO_DELETE_BANNER_SUCCESS;

  constructor(public payload: any) {}
}

export class DoBannerDeleteFailAction implements Action {
  type = ActionTypes.DO_DELETE_BANNER_FAIL;

  constructor(public payload: any = null) {}
}

// Do Banner Bulk Delete
export class DoBannerBulkDelete implements Action {
  type = ActionTypes.DO_BANNER_BULK_DELETE;

  constructor(public payload: any = null) {}
}

export class DoBannerBulkDeleteSuccess implements Action {
  type = ActionTypes.DO_BANNER_BULK_DELETE_SUCCESS;

  constructor(public payload: any) {}
}

export class DoBannerBulkDeleteFail implements Action {
  type = ActionTypes.DO_BANNER_BULK_DELETE_FAIL;

  constructor(public payload: any = null) {}
}

export type Actions =
  | DoBannerListAction
  | DoBannerListSuccessAction
  | DoBannerListFailAction
  | DoBannerPaginationAction
  | DoBannerPaginationSuccessAction
  | DoBannerPaginationSuccessAction
  | DoBannerAddAction
  | DoBannerAddSuccessAction
  | DoBannerAddFailAction
  | DoBannerUpdateAction
  | DoBannerUpdateSuccessAction
  | DoBannerUpdateFailAction
  | DoBannerDeleteAction
  | DoBannerDeleteSuccessAction
  | DoBannerDeleteFailAction
  | DoBannerBulkDelete
  | DoBannerBulkDeleteSuccess
  | DoBannerBulkDeleteFail;
