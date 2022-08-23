/*
 * spurtcommerce
 * version 3.0
 * www.spurtcommerce.com
 *
 * Copyright (c) 2022 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */
import {
    Component, Input, OnInit, ViewChild, PLATFORM_ID,
    Inject
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { ListsSandbox } from '../../../../core/lists/lists.sandbox';
import { Router } from '@angular/router';
import { AppSettings, Settings } from '../../../app.settings';
import { MatMenuTrigger } from '@angular/material';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
    // decorators
    @Input() categories: any;
    @Input() categoriesExpanded: any;
    @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;

    public category = { name: 'Select Category' };
    searchValue: any = '';

    // param calls getProductList
    private brand: number;
    // local storage
    public clearBrand: string;
    // selecting  category index
    public index: number;
    // category hover
    public hover: any;
    // category id  from event
    public categoryId: string;
    // make category active
    public categorylinkActive: string;
    // theme
    public settings: Settings;
    public searchLists: any = [];

    constructor(public listSandbox: ListsSandbox,
        public appSettings: AppSettings,
        @Inject(PLATFORM_ID) private platformId: Object,
        public router: Router) {
        this.settings = this.appSettings.settings;
        if (isPlatformBrowser(this.platformId)) {
            const setTheme = localStorage.getItem('optionsTheme');
            this.settings.theme = setTheme;
        }
    }

    ngOnInit() {


    }


    /** index for selecting categories.
     * @param index from event
     * @param categoryId from event
     * **/
    indexData(index, id) {
        this.index = index;
        this.categoryId = id;
        this.trigger.openMenu();
        this.openMegaMenu();
    }

    openMegaMenu() {
        const pane = document.getElementsByClassName('cdk-overlay-pane');
        [].forEach.call(pane, function (el) {
            if (el.children.length > 0) {
                if (el.children[0].classList.contains('mega-menu')) {
                    el.classList.add('mega-menu-pane');
                }
            }
        });
    }


    closeMyMenu() {
        this.trigger.closeMenu();
    }

    // Make category link active if category got selected
    linkActive() {
        this.categorylinkActive = this.categoryId;
    }

    /**
     * calls listSandbox productFilterData and send the value
     * @param productFilter set default value getting from template file
     */
    sendUniqueId(productFilter) {
        this.listSandbox.productFilterData.next(productFilter);
    }

    // send the search value to product through navigation.If no value send 1 as default value.
    public searchData(value) {
        this.searchValue = value;
        if (!value) {
            // this.router.navigate(['/products'], {
            //     queryParams: { keyword: this.searchValue }
            // });
            this.searchLists = [];
        } else {
            // this.router.navigate(['/products'], {
            //     queryParams: { keyword: this.searchValue }
            // });
            this.getProductList(this.searchValue);
        }
    }

    /**
   * fetch product list from service. calling getProductList function from sandbox
   *
   * @param keyword filter
   */
    getProductList(keyword) {
        const params: any = {};
        params.limit = 100;
        params.offset = 0;
        params.categoryId = this.categoryId ? this.categoryId : '';
        params.keyword = keyword;
        params.price = 'ASC';
        params.priceFrom = 0;
        params.priceTo = '';
        if (keyword) {
            this.listSandbox.getProductList(params)
            this.listSandbox.productlist$.subscribe(data => {
                this.searchLists = [...data];
            })
        }

    }
}
