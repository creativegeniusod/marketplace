/*
 * spurtcommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */

import { Map, Record } from 'immutable';

export interface LayoutState extends Map<string, any> {
    settings: any;
}

export const layoutStateRecord = Record({
    settings: {}

});
