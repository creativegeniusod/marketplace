"use strict";
/*
 * spurtcommerce community API
 * Copyright (c) 2022 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateStockStatus = void 0;
const tslib_1 = require("tslib");
require("reflect-metadata");
const class_validator_1 = require("class-validator");
class CreateStockStatus {
}
tslib_1.__decorate([
    class_validator_1.IsNotEmpty({
        message: 'name is required',
    }),
    tslib_1.__metadata("design:type", String)
], CreateStockStatus.prototype, "name", void 0);
tslib_1.__decorate([
    class_validator_1.IsNotEmpty({
        message: 'status is required',
    }),
    tslib_1.__metadata("design:type", Number)
], CreateStockStatus.prototype, "status", void 0);
exports.CreateStockStatus = CreateStockStatus;
//# sourceMappingURL=CreateStockStatusRequest.js.map