/*
 * SpurtCommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultCommonModule } from '../../../../default.common.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// components
import { CoupenAddComponent } from './add/add.component';
import { CoupenListComponent } from './list/list.component';

// Store Actions
import { EffectsModule } from '@ngrx/effects';
import { CoupenSandbox } from '../../../../../../core/admin/adv/coupens/coupen.sandbox';
import { CoupenService } from '../../../../../../core/admin/adv/coupens/coupen.service';
import { CoupenEffect } from '../../../../../../core/admin/adv/coupens/coupen-effect/coupen.effect';

// Imported action to Inhance functionality
import { CategoriesSandbox } from '../../../../../../core/admin/catalog/category/categories.sandbox';
import { CategoriesService } from '../../../../../../core/admin/catalog/category/categories.service';
// Imported action to Inhance functionality

// Routing Module
import { CoupenRoutingModule } from './coupen.routing';

// Shared Module
import { MaterialModule } from '../../../../default.material.module';
import { CKEditorModule } from 'ng2-ckeditor';
import { CoupenLayoutComponent } from '../shared/coupen-layout/coupen-layout.component';

@NgModule({
  declarations: [
    CoupenAddComponent,
    CoupenListComponent,
    CoupenLayoutComponent
  ],
  imports: [
    CommonModule,
    DefaultCommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    CoupenRoutingModule,
    EffectsModule.forRoot([CoupenEffect]),
    CKEditorModule
  ],
  providers: [CoupenService, CoupenSandbox, CategoriesService, CategoriesSandbox],
  bootstrap: [],
  entryComponents: []
})
export class CoupenModule {}
