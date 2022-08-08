/*
 * SpurtCommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */

export class ManufacturerAddresponseModel {
  public name: string;
  public path: string;

  constructor(manufacturerAddresponse: any) {
    this.name = manufacturerAddresponse || '';
    this.path = manufacturerAddresponse || '';
  }
}
