/*
 * SpurtCommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */

export class ProductListModel {
  public limit: number;
  public offset: number;
  public keyword: string;
  public sku: string;
  public status: string;
  public price: number;
  public regular: number;
  public count: boolean;

  constructor(fromProductList: any) {
    this.limit = fromProductList.limit || 0;
    this.offset = fromProductList.offset || 0;
    this.keyword = fromProductList.keyword || '';
    this.sku = fromProductList.sku || '';
    this.status = fromProductList.status || '';
    this.price = fromProductList.price || '';
    this.regular = fromProductList.price || '';
    this.count = fromProductList.count || false;
  }
}
