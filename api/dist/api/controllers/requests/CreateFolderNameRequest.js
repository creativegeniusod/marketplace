"use strict";
/*
 * spurtcommerce community API
 * Copyright (c) 2022 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.FolderNameRequest = void 0;
const tslib_1 = require("tslib");
require("reflect-metadata");
const class_validator_1 = require("class-validator");
class FolderNameRequest {
}
tslib_1.__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.MinLength(4, {
        message: 'folder is minimum 4 character',
    }),
    tslib_1.__metadata("design:type", String)
], FolderNameRequest.prototype, "folderName", void 0);
exports.FolderNameRequest = FolderNameRequest;
//# sourceMappingURL=CreateFolderNameRequest.js.map