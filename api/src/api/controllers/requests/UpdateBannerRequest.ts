/*
 * spurtcommerce community API
 * Copyright (c) 2022 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */

import 'reflect-metadata';
import { IsNotEmpty  } from 'class-validator';

export class UpdateBanner {

    @IsNotEmpty()
    public bannerId: number;

    @IsNotEmpty()
    public title: string;

    public content: string;

    public image: string;

    public link: string;

    public position: number;
    @IsNotEmpty()
    public status: number;
}
