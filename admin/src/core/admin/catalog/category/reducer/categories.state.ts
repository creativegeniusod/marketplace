/*
 * SpurtCommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */

import { Map, Record } from 'immutable';

export interface CategoriesState extends Map<string, any> {
  categoryListnCount: any;
  categoryList: any;
  subcategoryList: any;
  categoryListFilter: any;
  categoryDoDelete: any;
  addCatagoryStatus: any;
  addCatagoryData: any;
  updateCatagory: any;
  categoryCountData: any;
  updateCategoryBadresponse: any;

  deleteCategoriesResponse: any;
  deleteCategoriesRequestLoading: any;
  deleteCategoriesRequestLoaded: any;
  deleteCategoriesRequestFailed: any;

  categoriesCountResponse: any;
  categoriesCountRequestLoading: any;
  categoriesCountRequestLoaded: any;
  categoriesCountRequestFailed: any;

  categoriesListResponse: any;
  categoriesListRequestLoading: any;
  categoriesListRequestLoaded: any;
  categoriesListRequestFailed: any;

  subcategoriesListResponse: any;
  subcategoriesListRequestLoading: any;
  subcategoriesListRequestLoaded: any;
  subcategoriesListRequestFailed: any;

  updateCategoriesResponse: any;
  updateCategoriesRequestLoading: any;
  updateCategoriesRequestLoaded: any;
  updateCategoriesRequestFailed: any;

  addCategoriesResponse: any;
  addCategoriesRequestLoading: any;
  addCategoriesRequestLoaded: any;
  addCategoriesRequestFailed: any;
}

export const CategoriesStateRecord = Record({
  categoryListnCount: {},
  categoryList: [],
  subcategoryList: [],
  categoryListFilter: {},
  categoryDoDelete: {},
  addCatagory: {},
  addCatagoryData: {},
  updateCatagory: {},
  categoryCountData: {},
  updateCategoryBadresponse: {},
  addCatagoryStatus: {},

  deleteCategoriesResponse: {},
  deleteCategoriesRequestLoading: {},
  deleteCategoriesRequestLoaded: {},
  deleteCategoriesRequestFailed: {},

  categoriesCountResponse: {},
  categoriesCountRequestLoading: {},
  categoriesCountRequestLoaded: {},
  categoriesCountRequestFailed: {},

  categoriesListResponse: {},
  categoriesListRequestLoading: {},
  categoriesListRequestLoaded: {},
  categoriesListRequestFailed: {},


  subcategoriesListResponse: {},
  subcategoriesListRequestLoading: {},
  subcategoriesListRequestLoaded: {},
  subcategoriesListRequestFailed: {},

  updateCategoriesResponse: {},
  updateCategoriesRequestLoading: {},
  updateCategoriesRequestLoaded: {},
  updateCategoriesRequestFailed: {},

  addCategoriesResponse: {},
  addCategoriesRequestLoading: {},
  addCcategoriesRequestLoaded: {},
  addCategoriesRequestFailed: {}
});
