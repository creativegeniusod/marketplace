/*
 * spurtcommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */
import { Map, Record } from 'immutable';

export interface ProductControlState extends Map<string, any> {
  wishlist: any;
  cartList: any;
  cartCount: any;
  totalCartPrice: any;
  checkedOut: any;
  checkoutLoading: any;
  checkoutLoaded: any;
  checkoutFailed: any;
  whislistLoading: boolean;

}


export const productControlRecord = Record({
  wishlist: [],
  cartList: [],
  cartCount: [],
  totalCartPrice: [],
  checkedOut: [],

  checkoutLoading: false,
  checkoutLoaded: false,
  checkoutFailed: false,
  whislistLoading: false

});
