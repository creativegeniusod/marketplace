/*
 * SpurtCommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */
import { Map, Record } from 'immutable';

export interface CoupenState extends Map<string, any> {
  coupenList: any;
  coupenPagination: any;
  newCoupen: any;
  updateCoupen: any;
  deleteCoupen: any;
  addCoupen: any;
  coupenListCount: any;
  coupenListLoaded: boolean;
  coupenListFailed: boolean;
  coupenListLoading: boolean;
  coupenAddLoaded: boolean;
  coupenAddFailed: boolean;
  coupenAddLoading: boolean;
  coupenUpdateLoading: boolean;
  coupenUpdateLoaded: boolean;
  coupenUpdateFailed: boolean;
  coupenDeleteLoading: boolean;
  coupenDeleteLoaded: boolean;
  coupenDeleteFailed: boolean;
  coupenCountLoading: boolean;
  coupenCountLoaded: boolean;
  coupenCountFailed: boolean;
  coupenListCountLoaded: boolean;
  coupenListCountFailed: boolean;
  coupenListCountLoading: boolean;
  coupenListActive: any;
  coupenListActiveLoaded: boolean;
  coupenListACtiveFailed: boolean;
  coupenListActiveLoading: boolean;
  coupenListInActive: any;
  coupenListInActiveLoaded: boolean;
  coupenListInACtiveFailed: boolean;
  coupenListInActiveLoading: boolean;
}

export const CoupenRecordState = Record({
  coupenList: {},
  coupenPagination: {},
  newCoupen: {},
  updateCoupen: {},
  deleteCoupen: {},
  addCoupen: {},
  coupenListCount: {},
  coupenListLoaded: false,
  coupenListFailed: false,
  coupenListLoading: false,
  coupenAddLoaded: false,
  coupenAddFailed: false,
  coupenAddLoading: false,
  coupenUpdateLoading: false,
  coupenUpdateLoaded: false,
  coupenUpdateFailed: false,
  coupenDeleteLoading: false,
  coupenDeleteLoaded: false,
  coupenDeleteFailed: false,
  coupenCountLoading: false,
  coupenCountLoaded: false,
  coupenCountFailed: false,
  coupenListCountLoaded: false,
  coupenListCountFailed: false,
  coupenListCountLoading: false,
  coupenListActive: {},
  coupenListActiveLoaded: false,
  coupenListACtiveFailed: false,
  coupenListActiveLoading: false,
  coupenListInActive: {},
  coupenListInACtiveFailed: false,
  coupenListInActiveLoaded: false,
  coupenListInActiveLoading: false
});
