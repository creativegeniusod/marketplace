/*
 * spurtcommerce community API
 * Copyright (c) 2022 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */

import 'reflect-metadata';
import { IsNotEmpty } from 'class-validator';

export class CustomerAddress {

    @IsNotEmpty()
    public address1: string;

    public address2: string;

    @IsNotEmpty()
    public city: string;

    @IsNotEmpty()
    public state: string;

    public postcode: number;

    @IsNotEmpty()
    public addressType: number;
}
