/*
 * SpurtCommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */
export class BannercountResponseModel {
  public bannercount: any = {};

  constructor(bannercount: any) {
    this.bannercount = bannercount || '';
  }
}
