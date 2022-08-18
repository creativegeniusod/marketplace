/*
 * SpurtCommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */

export class CoupenupdateResponseModel {
  public title: string;
  public content: string;
  public image: string;
  public link: string;
  public position: string;
  public coupenId: number;
  public active: any;

  constructor(updateResponse: any) {
    this.title = updateResponse.title || '';
    this.content = updateResponse.content || '';
    this.image = updateResponse.image || '';
    this.link = updateResponse.link || '';
    this.position = updateResponse.position || '';
    this.coupenId = updateResponse.coupenId || '';
    this.active = updateResponse.isActive;
  }
}
