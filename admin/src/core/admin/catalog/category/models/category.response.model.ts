/*
 * SpurtCommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */

export class CategoryResponseModel {
  public add: any = {};

  constructor(categoryFormResponse: any) {
    this.add = categoryFormResponse || '';
  }
}
