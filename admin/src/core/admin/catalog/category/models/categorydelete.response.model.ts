/*
 * SpurtCommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */

export class CategorydeleteResponseModel {
  public user: any = {};

  constructor(CategorydeleteResponse: any) {
    this.user = CategorydeleteResponse || '';
  }
}
