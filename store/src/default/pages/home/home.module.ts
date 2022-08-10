/*
 * spurtcommerce
 * www.spurtcommerce.com
 *
 * Copyright (c) 2022 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { HomeComponent } from './home.component';
import { ComponentsModule } from '../../shared/components/index';
import { FormsModule } from '@angular/forms';
import { TrendingProductComponent } from './trending-product/trending-product.component';
import { AdvertismentProductComponent } from './advertisment-product/advertisment-product.component';

export const routes = [
    { path: '', component: HomeComponent, pathMatch: 'full' }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        SharedModule,
        FormsModule,
        ComponentsModule,
    ],
    declarations: [
        HomeComponent,
        TrendingProductComponent,
        AdvertismentProductComponent
    ],
    providers: []
})
export class HomeModule {
}
