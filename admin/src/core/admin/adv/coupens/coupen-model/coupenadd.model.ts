/*
 * spurtcommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */

export class CoupenaddModel {
  public title: string;
  public content: string;
  public image: string;
  public link: string;
  public position: string;
  public status: number;

  constructor(coupenForm: any) {
    this.title = coupenForm.title || '';
    this.content = coupenForm.content || '';
    this.image = coupenForm.image || '';
    this.link = coupenForm.link || '';
    this.position = coupenForm.position || '';
    this.status = coupenForm.active || 0;
  }
}
