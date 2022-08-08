/*
 * spurtcommerce community API
 * Copyright (c) 2022 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */

import { EntityRepository, Repository } from 'typeorm';
import { ProductImage } from '../models/ProductImage';

@EntityRepository(ProductImage)
export class ProductImageRepository extends Repository<ProductImage>  {

}
