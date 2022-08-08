/*
 * spurtcommerce community API
 * Copyright (c) 2022 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */

import { EntityRepository, Repository } from 'typeorm';

import { Category } from '../models/CategoryModel';

@EntityRepository(Category)
export class CategoryRepository extends Repository<Category>  {

}
