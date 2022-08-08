/*
 * spurtcommerce community API
 * Copyright (c) 2022 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */

import 'reflect-metadata';
import {IsNotEmpty} from 'class-validator';

export class CreateOrderStatus {

    @IsNotEmpty({
        message: 'name is required',
    })
    public name: string;

    @IsNotEmpty()
    public colorCode: string;

    @IsNotEmpty()
    public status: number;

}
