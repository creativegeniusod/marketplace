/*
 * spurtcommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */
// store
import { AppState } from '../../../app.state.interface';
import { createSelector } from 'reselect';
// reducer
import * as fromLayout from './layout.reducer';

// *************************** PUBLIC API's ****************************
/**
 * Auth store functions
 */
export const getLayoutState = (state: AppState) => state.layout;
export const getSettingsResponse = createSelector(
    getLayoutState,
    fromLayout.getSettings
  );