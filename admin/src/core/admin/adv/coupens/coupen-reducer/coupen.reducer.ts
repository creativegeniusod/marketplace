/*
 * SpurtCommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */

import * as actions from '../coupen-action/coupen.action';
import { CoupenState, CoupenRecordState } from '../coupen-store/coupen.state';
import { CoupenlistResponseModel } from '../coupen-model/coupenlist.response.model';
import { CoupenaddResponseModel } from '../coupen-model/coupenadd.response.model';

export const initialState: CoupenState = new CoupenRecordState() as CoupenState;

export function reducer(
  state = initialState,
  { type, payload }: any
): CoupenState {
  if (!type) {
    return state;
  }
  switch (type) {
    case actions.ActionTypes.DO_COUPEN_LIST: {
      return Object.assign({}, state, {
        coupenListCountLoaded: true,
        coupenListCountFailed: false,
        coupenListCountLoading: false
      });
    }
    case actions.ActionTypes.DO_COUPEN_LIST_COUNT: {
      return Object.assign({}, state, {
        coupenListCountLoaded: true,
        coupenListCountFailed: false,
        coupenListCountLoading: false
      });
    }
    case actions.ActionTypes.DO_COUPEN_LIST_SUCCESS_COUNT: {
      return Object.assign({}, state, {
        coupenListCount: payload,
        coupenListCountLoaded: true,
        coupenListCountFailed: false,
        coupenListCountLoading: false
      });
    }
    case actions.ActionTypes.DO_COUPEN_LIST_FAIL_COUNT: {
      return Object.assign({}, state, {
        coupenListCountLoaded: true,
        coupenListCountFailed: false,
        coupenListCountLoading: false
      });
    }
    case actions.ActionTypes.DO_COUPEN_LIST_ACTIVE: {
      return Object.assign({}, state, {
        coupenListActiveLoaded: true,
        coupenListACtiveFailed: false,
        coupenListActiveLoading: false
      });
    }
    case actions.ActionTypes.DO_COUPEN_LIST_SUCCESS_ACTIVE: {
      return Object.assign({}, state, {
        coupenListActive: payload,
        coupenListActiveLoaded: true,
        coupenListACtiveFailed: false,
        coupenListActiveLoading: false
      });
    }
    case actions.ActionTypes.DO_COUPEN_LIST_FAIL_ACTIVE: {
      return Object.assign({}, state, {
        coupenListInActiveLoaded: true,
        coupenListAInCtiveFailed: false,
        coupenListInActiveLoading: false
      });
    }
    case actions.ActionTypes.DO_COUPEN_LIST_IN_ACTIVE: {
      return Object.assign({}, state, {
        coupenListInActiveLoaded: true,
        coupenListInACtiveFailed: false,
        coupenListInActiveLoading: false
      });
    }
    case actions.ActionTypes.DO_COUPEN_LIST_SUCCESS_IN_ACTIVE: {
      return Object.assign({}, state, {
        coupenListInActive: payload,
        coupenListInActiveLoaded: true,
        coupenListInACtiveFailed: false,
        coupenListInActiveLoading: false
      });
    }
    case actions.ActionTypes.DO_COUPEN_LIST_FAIL_IN_ACTIVE: {
      return Object.assign({}, state, {
        coupenListActiveLoaded: true,
        coupenListACtiveFailed: false,
        coupenListActiveLoading: false
      });
    }
    case actions.ActionTypes.DO_COUPEN_PAGINATION_ACTION: {
      return Object.assign({}, state, {
        coupenCountLoading: true,
        coupenCountLoaded: false,
        coupenCountFailed: false
      });
    }
    case actions.ActionTypes.DO_ADD_COUPEN_ACTION: {
      return Object.assign({}, state, {
        coupenAddLoaded: true,
        coupenAddFailed: false,
        coupenAddLoading: false
      });
    }
    case actions.ActionTypes.DO_UPDATE_COUPEN_ACTION: {
      return Object.assign({}, state, {
        coupenUpdateLoading: true,
        coupenUpdateLoaded: false,
        coupenUpdateFailed: false
      });
    }
    case actions.ActionTypes.DO_DELETE_COUPEN_ACTION: {
      return Object.assign({}, state, {
        coupenDeleteLoading: true,
        coupenDeleteLoaded: false,
        coupenDeleteFailed: false
      });
    }
    // # Success functions
    case actions.ActionTypes.DO_COUPEN_LIST_SUCCESS: {
      const coupenListModel = payload.data.map(_coupenlistModel => {
        const tempcoupenListModel = new CoupenlistResponseModel(
          _coupenlistModel
        );
        return tempcoupenListModel;
      });
      return Object.assign({}, state, {
        coupenListLoaded: true,
        coupenListFailed: false,
        coupenListLoading: false,
        coupenList: coupenListModel
      });
    }
    case actions.ActionTypes.DO_ADD_COUPEN_SUCCESS: {
      const addCoupen = new CoupenaddResponseModel(payload.data);
      return Object.assign({}, state, {
        coupenAddLoaded: true,
        coupenAddFailed: false,
        coupenAddLoading: false,
        newCoupen: payload,
        addCoupen: addCoupen
      });
    }

    case actions.ActionTypes.DO_UPDATE_COUPEN_SUCCESS: {
      return Object.assign({}, state, {
        coupenUpdateLoaded: true,
        coupenUpdateFailed: false,
        coupenUpdateLoading: false,
        updateCoupen: payload
      });
    }
    case actions.ActionTypes.DO_DELETE_COUPEN_SUCCESS: {
      return Object.assign({}, state, {
        coupenDeleteLoaded: true,
        coupenDeleteFailed: false,
        coupenDeleteLoading: false,
        deleteCoupen: payload
      });
    }
    case actions.ActionTypes.DO_COUPEN_PAGINATION_SUCCESS: {
      return Object.assign({}, state, {
        coupenCountLoaded: true,
        coupenCountFailed: false,
        coupenCountLoading: false,
        coupenPagination: payload.coupencount.data
      });
    }
    // failure functions
    case actions.ActionTypes.DO_ADD_COUPEN_FAIL: {
      return Object.assign({}, state, {
        coupenAddLoaded: false,
        coupenAddFailed: true,
        coupenAddLoading: false,
        newCoupen: payload
      });
    }
    case actions.ActionTypes.DO_UPDATE_COUPEN_FAIL: {
      return Object.assign({}, state, {
        coupenUpdateLoaded: false,
        coupenUpdateFailed: true,
        coupenUpdateLoading: false,
        updateCoupen: payload
      });
    }
    case actions.ActionTypes.DO_COUPEN_LIST_FAIL: {
      return Object.assign({}, state, {
        coupenListLoaded: false,
        coupenListFailed: true,
        coupenListLoading: false
      });
    }
    case actions.ActionTypes.DO_COUPEN_PAGINATION_FAIL: {
      return Object.assign({}, initialState, {
        changePSW: payload,
        failed: true
      });
    }

    // Bulk Delete
    // Coupen delete action
    case actions.ActionTypes.DO_COUPEN_BULK_DELETE: {
      return Object.assign({}, state, {});
    }
    case actions.ActionTypes.DO_COUPEN_BULK_DELETE_SUCCESS: {
      return Object.assign({}, state, {
        deleteCoupen: payload
      });
    }
    case actions.ActionTypes.DO_COUPEN_BULK_DELETE_FAIL: {
      return Object.assign({}, state, {
        deleteCoupen: payload
      });
    }

    default: {
      return state;
    }
  }
}

export const getcoupenaddloaded = (state: CoupenState) => state.coupenAddLoaded;
export const getcoupenaddfailed = (state: CoupenState) => state.coupenAddFailed;
export const getcoupenaddloading = (state: CoupenState) =>
  state.coupenAddLoading;

export const getcoupenupdateloading = (state: CoupenState) =>
  state.coupenUpdateLoading;
export const getcoupenupdateloaded = (state: CoupenState) =>
  state.coupenUpdateLoaded;
export const getcoupenupdatefailed = (state: CoupenState) =>
  state.coupenUpdateFailed;

export const getcoupendeleteloading = (state: CoupenState) =>
  state.coupenDeleteLoading;
export const getcoupendeleteloaded = (state: CoupenState) =>
  state.coupenDeleteLoaded;
export const getcoupendeletefailed = (state: CoupenState) =>
  state.coupenDeleteFailed;

export const getcoupenpagination = (state: CoupenState) =>
  state.coupenPagination;
export const getcoupencountloading = (state: CoupenState) =>
  state.coupenCountLoading;
export const getcoupencountloaded = (state: CoupenState) =>
  state.coupenCountLoaded;
export const getcoupencountfailed = (state: CoupenState) =>
  state.coupenCountFailed;

export const getcoupenlistloaded = (state: CoupenState) =>
  state.coupenListLoaded;
export const getcoupenlistfailed = (state: CoupenState) =>
  state.coupenListFailed;
export const getcoupenlistloading = (state: CoupenState) =>
  state.coupenListLoading;
export const getCoupenlist = (state: CoupenState) => state.coupenList;

export const getAddCoupen = (state: CoupenState) => state.newCoupen;
export const getaddCoupen = (state: CoupenState) => state.addCoupen;
export const getUpdatecoupen = (state: CoupenState) => state.updateCoupen;
export const getdeletecoupen = (state: CoupenState) => state.deleteCoupen;

export const getcoupenListCount = (state: CoupenState) => state.coupenListCount;
export const getcoupenListCountLoaded = (state: CoupenState) =>
  state.coupenListCountLoaded;
export const getcoupenListCountFailed = (state: CoupenState) =>
  state.coupenListCountFailed;
export const getcoupenListCountLoading = (state: CoupenState) =>
  state.coupenListCountLoading;

export const getcoupenListActive = (state: CoupenState) =>
  state.coupenListActive;
export const getcoupenListActiveLoaded = (state: CoupenState) =>
  state.coupenListActiveLoaded;
export const getcoupenListACtiveFailed = (state: CoupenState) =>
  state.coupenListACtiveFailed;
export const getcoupenListActiveLoading = (state: CoupenState) =>
  state.coupenListActiveLoading;

export const getcoupenListInActive = (state: CoupenState) =>
  state.coupenListInActive;
export const getcoupenListInActiveLoaded = (state: CoupenState) =>
  state.coupenListInActiveLoaded;
export const getcoupenListInACtiveFailed = (state: CoupenState) =>
  state.coupenListInACtiveFailed;
export const getcoupenListInActiveLoading = (state: CoupenState) =>
  state.coupenListInActiveLoading;
