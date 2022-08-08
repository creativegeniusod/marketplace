/*
 * SpurtCommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */

export class CategorycountResponseModel {
  public user: any = {};

  constructor(categorycountResponse: any) {
    this.user = categorycountResponse || '';
  }
}
