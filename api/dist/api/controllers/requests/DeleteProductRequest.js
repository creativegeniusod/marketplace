"use strict";
/*
 * spurtcommerce community API
 * Copyright (c) 2022 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteProductRequest = void 0;
const tslib_1 = require("tslib");
require("reflect-metadata");
const class_validator_1 = require("class-validator");
class DeleteProductRequest {
}
tslib_1.__decorate([
    class_validator_1.IsNotEmpty(),
    tslib_1.__metadata("design:type", Array)
], DeleteProductRequest.prototype, "productId", void 0);
exports.DeleteProductRequest = DeleteProductRequest;
//# sourceMappingURL=DeleteProductRequest.js.map