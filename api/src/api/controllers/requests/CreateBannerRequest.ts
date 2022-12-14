/*
 * spurtcommerce community API
 * Copyright (c) 2022 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */

import 'reflect-metadata';
import { IsNotEmpty } from 'class-validator';

export class CreateBanner {

    @IsNotEmpty()
    public title: string;

    public content: string;

    @IsNotEmpty()
    public image: string;

    public link: string;
    
    public category: number;

    public subcategory: number;
    
    public homebanner: number;

    public position: number;
    @IsNotEmpty()
    public status: number;
}
