/*
 * SpurtCommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */

import { createSelector } from 'reselect';
import * as fromcoupen from '../coupen-reducer/coupen.reducer';
import { AppState } from '../../../../app.state.interface';
// *************************** PUBLIC API's ****************************
/**
 * Auth store functions
 */
export const getCoupenState = (state: AppState) => state.coupen;
export const getCoupenlst = createSelector(
  getCoupenState,
  fromcoupen.getCoupenlist
);
export const getcoupenpagination = createSelector(
  getCoupenState,
  fromcoupen.getcoupenpagination
);
export const getAddCoupens = createSelector(
  getCoupenState,
  fromcoupen.getAddCoupen
);
export const getaddCoupen = createSelector(
  getCoupenState,
  fromcoupen.getaddCoupen
);
export const getdeletecoupen = createSelector(
  getCoupenState,
  fromcoupen.getdeletecoupen
);

export const getcoupenaddloaded = createSelector(
  getCoupenState,
  fromcoupen.getcoupenaddloaded
);
export const getcoupenaddfailed = createSelector(
  getCoupenState,
  fromcoupen.getcoupenaddfailed
);
export const getcoupenaddloading = createSelector(
  getCoupenState,
  fromcoupen.getcoupenaddloading
);

export const getUpdatecoupen = createSelector(
  getCoupenState,
  fromcoupen.getUpdatecoupen
);
export const getcoupenupdateloading = createSelector(
  getCoupenState,
  fromcoupen.getcoupenupdateloading
);
export const getcoupenupdateloaded = createSelector(
  getCoupenState,
  fromcoupen.getcoupenupdateloaded
);
export const getcoupenupdatefailed = createSelector(
  getCoupenState,
  fromcoupen.getcoupenupdatefailed
);

export const getcoupendeleteloading = createSelector(
  getCoupenState,
  fromcoupen.getcoupendeleteloading
);
export const getcoupendeleteloaded = createSelector(
  getCoupenState,
  fromcoupen.getcoupendeleteloaded
);
export const getcoupendeletefailed = createSelector(
  getCoupenState,
  fromcoupen.getcoupendeletefailed
);

export const getcoupencountloading = createSelector(
  getCoupenState,
  fromcoupen.getcoupencountloading
);
export const getcoupencountloaded = createSelector(
  getCoupenState,
  fromcoupen.getcoupencountloaded
);
export const getcoupencountfailed = createSelector(
  getCoupenState,
  fromcoupen.getcoupencountfailed
);

export const getcoupenlistloaded = createSelector(
  getCoupenState,
  fromcoupen.getcoupenlistloaded
);
export const getcoupenlistfailed = createSelector(
  getCoupenState,
  fromcoupen.getcoupenlistfailed
);
export const getcoupenlistloading = createSelector(
  getCoupenState,
  fromcoupen.getcoupenlistloading
);

export const getcoupenListCount = createSelector(
  getCoupenState,
  fromcoupen.getcoupenListCount
);
export const getcoupenListCountLoaded = createSelector(
  getCoupenState,
  fromcoupen.getcoupenListCountLoaded
);
export const getcoupenListCountFailed = createSelector(
  getCoupenState,
  fromcoupen.getcoupenListCountFailed
);
export const getcoupenListCountLoading = createSelector(
  getCoupenState,
  fromcoupen.getcoupenListCountLoading
);

export const getcoupenListActive = createSelector(
  getCoupenState,
  fromcoupen.getcoupenListActive
);
export const getcoupenListActiveLoaded = createSelector(
  getCoupenState,
  fromcoupen.getcoupenListActiveLoaded
);
export const getcoupenListACtiveFailed = createSelector(
  getCoupenState,
  fromcoupen.getcoupenListACtiveFailed
);
export const getcoupenListActiveLoading = createSelector(
  getCoupenState,
  fromcoupen.getcoupenListActiveLoading
);

export const getcoupenListInActive = createSelector(
  getCoupenState,
  fromcoupen.getcoupenListInActive
);
export const getcoupenListInActiveLoaded = createSelector(
  getCoupenState,
  fromcoupen.getcoupenListInActiveLoaded
);
export const getcoupenListInACtiveFailed = createSelector(
  getCoupenState,
  fromcoupen.getcoupenListInACtiveFailed
);
export const getcoupenListInActiveLoading = createSelector(
  getCoupenState,
  fromcoupen.getcoupenListInActiveLoading
);
