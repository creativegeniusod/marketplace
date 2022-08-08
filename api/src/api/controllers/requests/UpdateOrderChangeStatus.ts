/*
 * spurtcommerce community API
 * Copyright (c) 2022 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */

import 'reflect-metadata';
import { IsNotEmpty } from 'class-validator';

export class UpdateOrderChangeStatus {

    @IsNotEmpty()
    public orderId: number;

    @IsNotEmpty()
    public orderStatusId: number;
}
