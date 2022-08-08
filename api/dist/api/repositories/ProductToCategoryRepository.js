"use strict";
/*
 * spurtcommerce community API
 * Copyright (c) 2022 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductToCategoryRepository = void 0;
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
const ProductToCategory_1 = require("../models/ProductToCategory");
let ProductToCategoryRepository = class ProductToCategoryRepository extends typeorm_1.Repository {
};
ProductToCategoryRepository = tslib_1.__decorate([
    typeorm_1.EntityRepository(ProductToCategory_1.ProductToCategory)
], ProductToCategoryRepository);
exports.ProductToCategoryRepository = ProductToCategoryRepository;
//# sourceMappingURL=ProductToCategoryRepository.js.map