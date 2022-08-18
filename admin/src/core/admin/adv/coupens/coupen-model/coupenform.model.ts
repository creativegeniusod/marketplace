/*
 * SpurtCommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */

export class CoupenForm {
  public title: string;
  public content: string;
  public image: string;
  public link: string;
  public position: string;
  public coupenId: number;

  constructor(coupenForm: any) {
    this.title = coupenForm.title || '';
    this.content = coupenForm.content || '';
    this.image = coupenForm.image || '';
    this.link = coupenForm.link || '';
    this.position = coupenForm.position || '';
    if (coupenForm.coupenId) {
      this.coupenId = coupenForm.coupenId || '';
    }
  }
}
