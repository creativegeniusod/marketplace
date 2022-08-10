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
import { DefaultCommonModule } from '../../default.common.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// components
import { DEMOLayoutComponent } from './components/layout/layout.component';
import { DEMOHeaderComponent } from './components/header/header.component';

// Routing Module
import { DEMORoutingModule } from './demo.routing';

// Shared Module
import { MaterialModule } from '../../default.material.module';

@NgModule({
  declarations: [DEMOLayoutComponent, DEMOHeaderComponent],
  imports: [
    CommonModule,
    DEMORoutingModule,
    DefaultCommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [],
  entryComponents: []
})
export class DEMOModule {}
