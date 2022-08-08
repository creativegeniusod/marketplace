/*
 * spurtcommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as store from '../../app.state.interface';
import { getLoginSuccessResponse } from '../auth/reducer/selectors';
import { LoginResponseModel } from '../auth/models/login.response.model';
import * as layoutAction from './actions/layout.action';
import { getSettingsResponse } from './reducer/layout.selector';


@Injectable()
export class LayoutSandbox {
  public user$ = this.appState$.select(getLoginSuccessResponse);
  public settings$ = this.appState$.select(getSettingsResponse);


  constructor(
    protected appState$: Store<store.AppState>,
    private router: Router
  ) {}

  public getSettings(): void {
    this.appState$.dispatch(new layoutAction.GetSettings());
  }

  public logOut() {
    const userResponse: LoginResponseModel = new LoginResponseModel({});
    userResponse.remove();
    this.router.navigate(['/auth/login']);
  }
}
