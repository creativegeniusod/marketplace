/*
 * spurtcommerce community API
 * Copyright (c) 2022 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */

import 'reflect-metadata';
import {IsNotEmpty} from 'class-validator';

export class CreateOption {
    @IsNotEmpty()
    public name: string;

    public type: string;

    @IsNotEmpty()
    public sortOrder: number;

    public optionValue: any;
}
