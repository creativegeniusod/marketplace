/*
 * SpurtCommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */

export class CoupendeleteResponseModel {
  public coupendelete: any = {};

  constructor(deletecoupen: any) {
    this.coupendelete = deletecoupen || '';
  }
}
