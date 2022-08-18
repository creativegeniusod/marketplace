/*
 * SpurtCommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';
import { CoupenlistModel } from './coupen-model/coupenlist.model';
import { CoupencountModel } from './coupen-model/coupencount.model';
import { CoupenupdateModel } from './coupen-model/coupenupdate.model';
import { CoupenaddModel } from './coupen-model/coupenadd.model';
import { Api } from '../../providers/api/api';

@Injectable()
export class CoupenService extends Api {
  params: any = {};
  private url: string = this.getBaseUrl();
  coupenEditdata: any;

  // coupen edit service
  setCoupenListData(data) {
    this.coupenEditdata = data;
  }

  getcoupenListdata() {
    return this.coupenEditdata;
  }

  // list
  public coupenList(params: CoupenlistModel): Observable<any> {
    let reqOpts: any = {};
    reqOpts = params;
    return this.http.get(this.url + '/coupen/coupenList', { params: reqOpts });
  }

  //  Pagination
  public coupenPagiantion(params: CoupencountModel): Observable<any> {
    let reqOpts: any = {};
    reqOpts = params;
    return this.http.get(this.url + '/coupen/coupenlist', { params: reqOpts });
  }

  // Update
  public updateCoupen(param: CoupenupdateModel, Id: number): Observable<any> {
    return this.http.put(this.url + '/coupen/update-coupen/' + Id, param);
  }

  // add
  addCoupen(param: CoupenaddModel) {
    console.log('add coupen', param);
    return this.http.post(this.url + '/coupen/add-coupen', param);
  }

  // delete
  public deleteCoupen(param: any, Id: number): Observable<any> {
    return this.http.delete(this.url + '/coupen/delete-coupen/' + Id, param);
  }

  /**
   * Handles 'coupenBulkDelete' function. Calls post method with specific api address
   * along its param.
   *
   * @param param from Model
   */
  coupenBulkDelete(param) {
    return this.http.post(this.url + '/coupen/delete-coupen', param);
  }
}
