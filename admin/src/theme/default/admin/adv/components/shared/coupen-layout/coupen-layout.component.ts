/*
 * spurtcommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { CoupenSandbox } from '../../../../../../../core/admin/adv/coupens/coupen.sandbox';

@Component({
  selector: 'app-coupen-layout',
  templateUrl: './coupen-layout.component.html',
  styleUrls: ['./coupen-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CoupenLayoutComponent implements OnInit {
  constructor(public sandbox: CoupenSandbox) {}
  ngOnInit() {
    this.getCoupenLists();
  }
  // to get total count
  getCoupenLists() {
    this.sandbox.getCoupenListCount({ count: 1 });
    this.sandbox.getCoupenListActive({ count: 1, status: 1 });
    this.sandbox.getCoupenListInActive({ count: 1, status: 0 });
  }
}
