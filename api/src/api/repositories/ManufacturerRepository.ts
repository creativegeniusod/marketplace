/*
 * spurtcommerce community API
 * Copyright (c) 2022 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */

import { EntityRepository, Repository } from 'typeorm';

import { Manufacturer } from '../models/ManufacturerModel';

@EntityRepository(Manufacturer)
export class ManufacturerRepository extends Repository<Manufacturer>  {

}
