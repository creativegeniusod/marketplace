/*
 * spurtcommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// shared modules
import { SharedModule } from '../../shared/shared.module';
import { ComponentsModule } from '../../shared/components/index';
import { NumberAcceptModule } from './../../shared/validation-directives/onlyNumber.module';

// components
import { AccountComponent } from './account.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InformationComponent } from './information/information.component';
import { OrdersComponent } from './orders/orders.component';
import { OrderDetailComponent } from './orderdetail/orderdetail.component';

// store services
import { EffectsModule } from '@ngrx/effects';
import { CommonEffect } from '../../../core/common/effects/common.effect';
import { AccountEffect } from '../../../core/account/effect/account.effect';
import { CommonSandbox } from '../../../core/common/common.sandbox';
import { AccountSandbox } from '../../../core/account/account.sandbox';
import { CommonService } from '../../../core/common/common.service';
import { AccountService } from '../../../core/account/account.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { InfluencerManagementComponent } from './influencer-management/influencer-management.component';
import { BecomeSellerComponent } from './become-seller/become-seller.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { MyAddressComponent } from './my-address/my-address.component';



export const routes = [
    {
        path: '',
        component: AccountComponent, children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            { path: 'dashboard', component: DashboardComponent, data: { breadcrumb: 'Dashboard' } },
            { path: 'information', component: InformationComponent, data: { breadcrumb: 'Personal Information Setting' } },
            { path: 'orders', component: OrdersComponent, data: { breadcrumb: 'Orders' } },
            { path: 'order-detail/:id', component: OrderDetailComponent, data: { breadcrumb: 'Order Detail' } },

            { path: 'profile', component: MyProfileComponent, data: { breadcrumb: 'Create / Edit My Public Profile' } },
            { path: 'address', component: MyAddressComponent, data: { breadcrumb: 'My Addresses' } },
            { path: 'influencer', component: InfluencerManagementComponent, data: { breadcrumb: 'Influencer Detail' } },
            { path: 'become-seller', component: BecomeSellerComponent, data: { breadcrumb: 'Become seller' } },

        ],
    },

];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        ReactiveFormsModule,
        SharedModule,
        ComponentsModule,
        EffectsModule.forFeature([AccountEffect, CommonEffect]),
        NumberAcceptModule,
        NgbModule,
        FormsModule
    ],
    declarations: [
        AccountComponent,
        DashboardComponent,
        InformationComponent,
        OrdersComponent,
        OrderDetailComponent,
        InfluencerManagementComponent,
        BecomeSellerComponent,
        MyProfileComponent,
        MyAddressComponent
    ],
    providers: [CommonSandbox,
        AccountSandbox,
        CommonService,
        AccountService]

})
export class AccountModule {
}
