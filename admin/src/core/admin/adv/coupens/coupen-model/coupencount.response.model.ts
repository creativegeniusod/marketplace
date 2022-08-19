/*
 * SpurtCommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */
export class CoupencountResponseModel {
  public coupencount: any = {};

  constructor(coupencount: any) {
    this.coupencount = coupencount || '';
  }
}
