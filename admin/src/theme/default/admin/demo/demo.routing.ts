/*
 * SpurtCommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DEMOLayoutComponent } from './components/layout/layout.component';

const cmsRoutes: Routes = [
  { path: '', redirectTo: 'banners', pathMatch: 'full' },
  {
    path: '',
    component: DEMOLayoutComponent,
    children: [
      {
        path: 'banners',
        loadChildren: './components/banner/banner.module#BannerModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(cmsRoutes)],
  exports: [RouterModule]
})
export class DEMORoutingModule {}
