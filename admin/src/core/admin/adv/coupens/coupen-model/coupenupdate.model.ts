/*
 * SpurtCommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */

export class CoupenupdateModel {
  public title: string;
  public content: string;
  public image: string;
  public link: string;
  public position: string;
  public coupenId: number;
  public homecoupen: number;
  public categoryId: number;
  public categoryChildId: number;
  public status: number;

  constructor(coupenlistResponse: any) {
    this.title = coupenlistResponse.title || '';
    this.content = coupenlistResponse.content || '';
    this.image = coupenlistResponse.image || '';
    this.link = coupenlistResponse.link || '';
    // this.homebanner = coupenlistResponse.homebanner || '';
    this.categoryId = coupenlistResponse.categoryId || '';
    this.position = coupenlistResponse.position || '';
    if (coupenlistResponse.coupenId) {
      this.coupenId = coupenlistResponse.coupenId || '';
    }
    if (coupenlistResponse.homecoupen) {
      this.homecoupen = coupenlistResponse.homecoupen || '';
    }
    if (coupenlistResponse.categoryChildId) {
      this.categoryChildId = coupenlistResponse.categoryChildId || '';
    }
    this.status = coupenlistResponse.active || 0;
  }
}
