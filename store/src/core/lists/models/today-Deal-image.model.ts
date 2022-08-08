/*
 * spurtcommerce
 * www.spurtcommerce.com
 *
 * Copyright (c) 2022 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */
export class TodayDealImageModel {
  public containerName: string;
  public defaultImage: string;
  public productId: number;
  public image: string;

  constructor(todayDealsImageResponse: any) {
    this.containerName = todayDealsImageResponse.containerName || '';
    this.defaultImage = todayDealsImageResponse.defaultImage || '';
    this.productId = todayDealsImageResponse.productId || 0;
    this.image = todayDealsImageResponse.image || '';
  }
}
