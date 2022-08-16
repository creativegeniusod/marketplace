/*
 * spurtcommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */
import { Component, OnInit, Input } from '@angular/core';
import {
  SwiperConfigInterface,
  SwiperPaginationInterface
} from 'ngx-swiper-wrapper';
import { ConfigService } from '../../../../core/service/config.service';
import { AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListsSandbox } from '../../../../core/lists/lists.sandbox';

@Component({
  selector: 'app-main-submenu-carousel',
  templateUrl: './main-submenu-carousel.component.html',
  styleUrls: ['./main-submenu-carousel.component.scss']
})
export class MainSubmenuCarouselComponent implements OnInit, AfterViewInit {
  @Input() categoryId;
  public config: SwiperConfigInterface = {};
  // path of the image
  public imagePath: string;
  // pagination purpose
  private pagination: SwiperPaginationInterface = {
    el: '.swiper-pagination',
    clickable: true
  };

  constructor(
    private configService: ConfigService,
    private router: Router,
    public listSandbox: ListsSandbox
  ) { }

  // initially get data from config service
  ngOnInit() {
    this.imagePath = this.configService.getImageUrl();
  }

  // swipper for banners
  ngAfterViewInit() {
    this.config = {
      slidesPerView: 'auto',
      pagination: this.pagination,
      autoplay: true,
      observer: true,
      navigation: true,
      grabCursor: true,
      lazy: {
        loadPrevNext: true
        // loadOnTransitionStart: true,
      },
      speed: 700,
      effect: 'slide'
    };
  }

  // navigate to all products
  public allProducts() {
    this.router.navigate(['/products/', 'All']);
  }
}
