/*
 * spurtcommerce
 * www.spurtcommerce.com
 *
 * Copyright (c) 2022 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */
import { Component, OnInit, PLATFORM_ID, Inject } from '@angular/core';

import { isPlatformBrowser } from '@angular/common';
import { ListsSandbox } from '../../../core/lists/lists.sandbox';
import { ActivatedRoute } from '@angular/router';


@Component({
    selector: 'app-home-menu',
    templateUrl: './home-menu.component.html',
    styleUrls: ['./home-menu.component.scss']
})
export class HomeMenuComponent implements OnInit {
    public categoryId = '';

    constructor(
        public listSandbox: ListsSandbox,
        @Inject(PLATFORM_ID) private platformId: Object,
        private activatedRoute: ActivatedRoute) {

        this.activatedRoute.params.subscribe(param => {
            this.categoryId = param.id;
            this.getBannerList()
        })
    }
    // Initially calls getBannerList,getBransList
    ngOnInit() {
        // this.getBannerList();
        // this.getBransList();
        // this.getTodayDealList();
        // this.listSandbox.getSettings();
        // if (isPlatformBrowser(this.platformId)) {
        //     localStorage.removeItem('checkout');
        // }
    }
    // fetch banner list from sandbox
    getBannerList() {
        const params: any = {};
        params.limit = 100;
        params.offset = 0;
        params.parent = this.categoryId
        this.listSandbox.getBannerList(params);
    }
    // fetch brand list from sandbox

    getBransList() {
        const params: any = {};
        params.limit = 10;
        params.offset = 0;
        params.keyword = '';
        this.listSandbox.getManufacturerList(params);
    }
    // fetch getTodayDealList product list from sandbox
    public getTodayDealList() {
        const params: any = {};
        params.limit = 0;
        params.offset = 0;
        params.keyword = '';
        params.sku = '';
        // params.count = '';
        this.listSandbox.getTodayDealList(params);
    }

}
