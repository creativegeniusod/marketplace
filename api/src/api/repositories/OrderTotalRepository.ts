/*
 * spurtcommerce community API
 * Copyright (c) 2022 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */

import { EntityRepository, Repository } from 'typeorm';
import { OrderTotal } from '../models/OrderTotal';

@EntityRepository(OrderTotal)
export class OrderTotalRepository extends Repository<OrderTotal>  {

}
