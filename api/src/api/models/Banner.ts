/*
 * spurtcommerce community API
 * Copyright (c) 2022 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */

import {Column, Entity, BeforeInsert, BeforeUpdate, PrimaryGeneratedColumn} from 'typeorm';
import {BaseModel} from './BaseModel';
import moment = require('moment/moment');

@Entity('banner')
export class Banner extends BaseModel {

    @PrimaryGeneratedColumn({name: 'banner_id'})
    public bannerId: number;

    @Column({name: 'title'})
    public title: string;

    @Column({name: 'sort_order'})
    public sortOrder: number;

    @Column({name: 'url'})
    public url: string;

    @Column({name: 'link'})
    public link: string;

    @Column({name: 'content'})
    public content: string;

    @Column({name: 'position'})
    public position: number;

    @Column({name: 'banner_group_id'})
    public bannerGroupId: number;

    @Column({name: 'category_id'})
    public categoryId: number;

    @Column({name: 'category_child_id'})
    public categoryChildId: number;

    @Column({name: 'homebanner'})
    public homebanner: number;
    
    @Column({name: 'image'})
    public image: string;

    @Column({name: 'image_path'})
    public imagePath: string;

    @Column({name: 'container_name'})
    public containerName: string;

    @Column({name: 'view_page_count'})
    public viewPageCount: number;

    @Column({name: 'is_active'})
    public isActive: number;

    @BeforeInsert()
    public async createDetails(): Promise<void> {
        this.createdDate = moment().format('YYYY-MM-DD HH:mm:ss');
    }

    @BeforeUpdate()
    public async updateDetails(): Promise<void> {
        this.modifiedDate = moment().format('YYYY-MM-DD HH:mm:ss');
    }
}
