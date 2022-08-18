/*
 * SpurtCommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */

export class CoupenlistResponseModel {
  public coupenId: number;
  public categoryId: number;
  public categoryChildId: number;
  public homecoupen: number;
  public position: number;
  public content: string;
  public image: string;
  public imagePath: string;
  public link: string;
  public title: string;
  public active: any;

  constructor(coupenlistResponse: any) {
    this.coupenId = coupenlistResponse.coupenId || 0;
    this.categoryId = coupenlistResponse.categoryId || 0;
    this.categoryChildId = coupenlistResponse.categoryChildId || 0;
    this.homecoupen = coupenlistResponse.homecoupen || 0;
    this.position = coupenlistResponse.position || 0;
    this.content = coupenlistResponse.content || '';
    this.image = coupenlistResponse.image || '';
    this.imagePath = coupenlistResponse.imagePath || '';
    this.link = coupenlistResponse.link || '';
    this.title = coupenlistResponse.title || '';
    this.active = coupenlistResponse.isActive;
  }
}
