/*
 * spurtcommerce community API
 * Copyright (c) 2022 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */

import {Service} from 'typedi';
import {OrmRepository} from 'typeorm-typedi-extensions';
import {Logger, LoggerInterface} from '../../decorators/Logger';
import {Like} from 'typeorm/index';
import {PageRepository} from '../repositories/PageRepository';
import {Page} from '../models/Page';

@Service()
export class PageService {

    constructor(@OrmRepository() private pageRepository: PageRepository,
                @Logger(__filename) private log: LoggerInterface) {
    }

    // create page
    public async create(page: any): Promise<any> {
        this.log.info('Create a new page ');
        return this.pageRepository.save(page);
    }

    // find one page
    public findOne(page: any): Promise<any> {
        return this.pageRepository.findOne(page);
    }

    // update page
    public update(id: any, page: Page): Promise<any> {
        this.log.info('Update a page');
        page.pageId = id;
        return this.pageRepository.save(page);
    }

    // page List
    public list(limit: any, offset: any, select: any = [], search: any = [], whereConditions: any = [], count: number | boolean): Promise<any> {
        const condition: any = {};

        if (select && select.length > 0) {
            condition.select = select;
        }
        condition.where = {};

        if (whereConditions && whereConditions.length > 0) {
            whereConditions.forEach((item: any) => {
                condition.where[item.name] = item.value;
            });
        }

        if (search && search.length > 0) {
            search.forEach((table: any) => {
                const operator: string = table.op;
                if (operator === 'where' && table.value !== undefined) {
                    condition.where[table.name] = table.value;
                } else if (operator === 'like' && table.value !== undefined) {
                    condition.where[table.name] = Like('%' + table.value + '%');
                }
            });
        }

        condition.order = {createdDate: 'DESC'};

        if (limit && limit > 0) {
            condition.take = limit;
            condition.skip = offset;
        }
        if (count) {
            return this.pageRepository.count(condition);
        } else {
            return this.pageRepository.find(condition);
        }
    }

    // delete page
    public async delete(id: number): Promise<any> {
        return await this.pageRepository.delete(id);
    }
}
