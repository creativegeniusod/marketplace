/*
 * SpurtCommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */
export class PagesupdateResponseModel {
  public pagesupdate: any = {};

  constructor(updateResponse: any) {
    this.pagesupdate = updateResponse || '';
  }
}
