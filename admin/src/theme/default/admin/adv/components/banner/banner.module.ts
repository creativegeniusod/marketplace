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
import { BannerAddComponent } from './add/add.component';
import { BannerListComponent } from './list/list.component';

// Store Actions
import { EffectsModule } from '@ngrx/effects';
import { BannerSandbox } from '../../../../../../core/admin/adv/banners/banner.sandbox';
import { BannerService } from '../../../../../../core/admin/adv/banners/banner.service';
import { BannerEffect } from '../../../../../../core/admin/adv/banners/banner-effect/banner.effect';

// Imported action to Inhance functionality
import { CategoriesSandbox } from '../../../../../../core/admin/catalog/category/categories.sandbox';
import { CategoriesService } from '../../../../../../core/admin/catalog/category/categories.service';
// Imported action to Inhance functionality

// Routing Module
import { BannerRoutingModule } from './banner.routing';

// Shared Module
import { MaterialModule } from '../../../../default.material.module';
import { CKEditorModule } from 'ng2-ckeditor';
import { BannerLayoutComponent } from '../shared/banner-layout/banner-layout.component';

@NgModule({
  declarations: [
    BannerAddComponent,
    BannerListComponent,
    BannerLayoutComponent
  ],
  imports: [
    CommonModule,
    DefaultCommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    BannerRoutingModule,
    EffectsModule.forRoot([BannerEffect]),
    CKEditorModule
  ],
  providers: [BannerService, BannerSandbox, CategoriesService, CategoriesSandbox],
  bootstrap: [],
  entryComponents: []
})
export class BannerModule {}
