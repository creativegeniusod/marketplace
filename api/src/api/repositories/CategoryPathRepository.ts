/*
 * spurtcommerce community API
 * Copyright (c) 2022 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */

import { EntityRepository, Repository } from 'typeorm';

import { CategoryPath } from '../models/CategoryPath';

@EntityRepository(CategoryPath)
export class CategoryPathRepository extends Repository<CategoryPath>  {

}
