/*
 * spurtcommerce community API
 * Copyright (c) 2022 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */

import { EntityRepository, Repository } from 'typeorm';
import {EmailTemplate} from '../models/EmailTemplate';

@EntityRepository(EmailTemplate)
export class EmailTemplateRepository extends Repository<EmailTemplate>  {

}
