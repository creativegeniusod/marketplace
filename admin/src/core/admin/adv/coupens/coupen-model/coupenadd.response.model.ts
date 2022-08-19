/*
 * SpurtCommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */

export class CoupenaddResponseModel {
  public bannerId: number;
  public position: number;
  public content: string;
  public image: string;
  public imagePath: string;
  public link: string;
  public title: string;
  public createdDate: string;
  public active: any;

  constructor(coupenaddResponse: any) {
    this.bannerId = coupenaddResponse.bannerId || 0;
    this.position = coupenaddResponse.position || 0;
    this.content = coupenaddResponse.content || '';
    this.image = coupenaddResponse.image || '';
    this.imagePath = coupenaddResponse.imagePath || '';
    this.link = coupenaddResponse.link || '';
    this.title = coupenaddResponse.title || '';
    this.createdDate = coupenaddResponse.createdDate || '';
    this.active = coupenaddResponse.isActive;
  }
}
