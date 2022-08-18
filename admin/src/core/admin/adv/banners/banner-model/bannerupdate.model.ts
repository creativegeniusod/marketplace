/*
 * SpurtCommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */

export class BannerupdateModel {
  public title: string;
  public content: string;
  public image: string;
  public link: string;
  public position: string;
  public bannerId: number;
  public homebanner: number;
  public categoryId: number;
  public categoryChildId: number;
  public status: number;

  constructor(bannerupdate: any) {
    this.title = bannerupdate.title || '';
    this.content = bannerupdate.content || '';
    this.image = bannerupdate.image || '';
    this.link = bannerupdate.link || '';
    // this.homebanner = bannerupdate.homebanner || '';
    this.categoryId = bannerupdate.categoryId || '';
    this.position = bannerupdate.position || '';
    if (bannerupdate.bannerId) {
      this.bannerId = bannerupdate.bannerId || '';
    }
    if (bannerupdate.homebanner) {
      this.homebanner = bannerupdate.homebanner || '';
    }
    if (bannerupdate.categoryChildId) {
      this.categoryChildId = bannerupdate.categoryChildId || '';
    }
    this.status = bannerupdate.active || 0;
  }
}
