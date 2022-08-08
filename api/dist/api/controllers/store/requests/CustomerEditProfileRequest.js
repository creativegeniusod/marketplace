"use strict";
/*
 * spurtcommerce community API
 * Copyright (c) 2022 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerEditProfileRequest = void 0;
const tslib_1 = require("tslib");
require("reflect-metadata");
const class_validator_1 = require("class-validator");
class CustomerEditProfileRequest {
}
tslib_1.__decorate([
    class_validator_1.IsNotEmpty({
        message: 'First name is required',
    }),
    tslib_1.__metadata("design:type", String)
], CustomerEditProfileRequest.prototype, "firstName", void 0);
tslib_1.__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.MinLength(5, {
        message: 'Old Password is minimum 5 character',
    }),
    class_validator_1.IsNotEmpty(),
    tslib_1.__metadata("design:type", String)
], CustomerEditProfileRequest.prototype, "password", void 0);
tslib_1.__decorate([
    class_validator_1.IsEmail({}, {
        message: 'Please provide username as emailId',
    }),
    class_validator_1.IsNotEmpty({
        message: 'Email Id is required',
    }),
    tslib_1.__metadata("design:type", String)
], CustomerEditProfileRequest.prototype, "emailId", void 0);
tslib_1.__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsNotEmpty(),
    tslib_1.__metadata("design:type", Number)
], CustomerEditProfileRequest.prototype, "phoneNumber", void 0);
exports.CustomerEditProfileRequest = CustomerEditProfileRequest;
//# sourceMappingURL=CustomerEditProfileRequest.js.map