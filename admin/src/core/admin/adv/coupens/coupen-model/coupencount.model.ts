/*
 * SpurtCommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */

export class CoupencountModel {
  public limit: number;
  public offset: number;
  public keyword: string;
  public count: string;

  constructor(coupencountForm: any) {
    this.limit = coupencountForm.limit || 0;
    this.offset = coupencountForm.offset || 0;
    this.keyword = coupencountForm.keyword || '';
    this.count = coupencountForm.count || '';
  }
}
