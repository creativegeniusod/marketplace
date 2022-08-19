/*
 * SpurtCommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */

export class CoupenlistModel {
  public limit: number;
  public offset: number;
  public keyword: string;
  public count: any;
  public status: any;

  constructor(coupenlistForm: any) {
    this.limit = coupenlistForm.limit || 0;
    this.offset = coupenlistForm.offset || 0;
    if (coupenlistForm.count === 1 && coupenlistForm.status === 1) {
      this.count = coupenlistForm.count || 0;
      this.status = coupenlistForm.status || 0;
    }
    if (coupenlistForm.count === 1 && coupenlistForm.status === 0) {
      this.count = coupenlistForm.count || 0;
      this.status = coupenlistForm.status || 0;
    }
    if (coupenlistForm.count === 1 && !coupenlistForm.status) {
      this.count = coupenlistForm.count || 0;
    }
    this.keyword = coupenlistForm.keyword || '';
  }
}
