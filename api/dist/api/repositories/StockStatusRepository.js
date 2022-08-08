"use strict";
/*
 * spurtcommerce community API
 * Copyright (c) 2022 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.StockStatusRepository = void 0;
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
const stockStatus_1 = require("../models/stockStatus");
let StockStatusRepository = class StockStatusRepository extends typeorm_1.Repository {
};
StockStatusRepository = tslib_1.__decorate([
    typeorm_1.EntityRepository(stockStatus_1.StockStatus)
], StockStatusRepository);
exports.StockStatusRepository = StockStatusRepository;
//# sourceMappingURL=StockStatusRepository.js.map