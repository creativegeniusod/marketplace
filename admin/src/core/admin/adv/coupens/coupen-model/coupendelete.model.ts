/*
 * SpurtCommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */

export class CoupendeleteModel {
  public coupenId: number;

  constructor(deletecoupen: any) {
    this.coupenId = deletecoupen.coupenId || '';
  }
}
