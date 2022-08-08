/*
 * spurtcommerce community API
 * Copyright (c) 2022 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */

import { EntityRepository, Repository } from 'typeorm';
import { OrderLog } from '../models/OrderLog';

@EntityRepository(OrderLog)
export class OrderLogRepository extends Repository<OrderLog>  {

}
