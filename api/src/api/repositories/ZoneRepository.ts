/*
 * spurtcommerce community API
 * Copyright (c) 2022 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */

import { EntityRepository, Repository } from 'typeorm';
import { Zone } from '../models/Zone';

@EntityRepository(Zone)
export class ZoneRepository extends Repository<Zone>  {

}
