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
import { ComponentsModule } from '../../shared/components/index';
import { FormsModule } from '@angular/forms';
import { HomeMenuComponent } from './home-menu.component';

export const routes = [
    { path: '', component: HomeMenuComponent, pathMatch: 'full' }
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
        HomeMenuComponent,
    ],
    providers: []
})
export class HomeMenuModule {
}
