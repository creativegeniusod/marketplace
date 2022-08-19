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

// Component
import { CoupenAddComponent } from './add/add.component';
import { CoupenListComponent } from './list/list.component';

const coupenRoutes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: CoupenListComponent },
  { path: 'add', component: CoupenAddComponent },
  {
    path: 'edit/:id',
    component: CoupenAddComponent
  }
];
/*const coupenRoutes: Routes = [
    { path: '', component: CoupenListComponent }
];*/
// console.log("dddd")
@NgModule({
  imports: [RouterModule.forChild(coupenRoutes)],
  exports: [RouterModule]
})
export class CoupenRoutingModule {}
