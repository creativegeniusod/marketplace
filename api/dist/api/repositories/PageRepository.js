"use strict";
/*
 * spurtcommerce community API
 * Copyright (c) 2022 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.PageRepository = void 0;
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
const Page_1 = require("../models/Page");
let PageRepository = class PageRepository extends typeorm_1.Repository {
};
PageRepository = tslib_1.__decorate([
    typeorm_1.EntityRepository(Page_1.Page)
], PageRepository);
exports.PageRepository = PageRepository;
//# sourceMappingURL=PageRepository.js.map