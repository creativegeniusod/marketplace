/*
 * spurtcommerce community API
 * Copyright (c) 2022 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */

import { Action } from 'routing-controllers';
import { Connection } from 'typeorm';

import { User } from '../api/models/User';

export function currentUserChecker(connection: Connection): (action: Action) => Promise<User | undefined> {
    return async function innerCurrentUserChecker(action: Action): Promise<User | undefined> {
        return action.request.user;
    };
}
