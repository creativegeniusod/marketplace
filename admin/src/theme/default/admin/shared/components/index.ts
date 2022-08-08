/*
 * SpurtCommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { DefaultCommonModule } from '../../../default.common.module';

// custom directive component
import { NavigationComponent } from './navigation/navigation.component';
import { ProfileBarComponent } from './profile-bar/profile.bar.component';
import { MaterialModule } from '../../../default.material.module';
import { RatingComponent } from './rating/rating.component';
import { CurrencySymbolPipe } from './pipes/currency-symbol.pipe';


export const COMPONENTS = [
  NavigationComponent,
  ProfileBarComponent,
  RatingComponent,
  CurrencySymbolPipe,

];

@NgModule({
  imports: [
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    DefaultCommonModule,
    MaterialModule
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS,
  entryComponents: [],
  providers: []
})
export class ComponentsModule {}
