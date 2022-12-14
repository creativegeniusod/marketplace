/*
 * SpurtCommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */

export class CategorylistForm {
  public limit: number;
  public offset: number;
  public parentInt: number;
  public adv: string;
  public keyword: string;
  public sortOrder: string;
  public status: string;
  constructor(categorylistForm: any) {
    this.limit = categorylistForm.limit || '';
    this.offset = categorylistForm.offset || '';
    this.parentInt = categorylistForm.parentInt || '';
    this.adv = categorylistForm.adv || '';
    this.keyword = categorylistForm.keyword || '';
    this.sortOrder = categorylistForm.sortOrder || '';
    this.status = categorylistForm.status || '';
  }
}
