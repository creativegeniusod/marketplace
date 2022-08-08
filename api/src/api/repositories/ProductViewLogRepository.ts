/*
 * spurtcommerce community API
 * Copyright (c) 2022 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */

import { EntityRepository, Repository } from 'typeorm';
import {ProductViewLog} from '../models/productViewLog';

@EntityRepository(ProductViewLog)
export class ProductViewLogRepository extends Repository<ProductViewLog>  {

}
