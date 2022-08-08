/*
 * SpurtCommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */

export class SalesDeleteModel {
  public orderId: number;

  constructor(salesdeleteForm: any) {
    this.orderId = salesdeleteForm.orderId || '';
  }
}
