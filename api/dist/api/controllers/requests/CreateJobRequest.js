"use strict";
/*
 * spurtcommerce community API
 * Copyright (c) 2022 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateJob = void 0;
const tslib_1 = require("tslib");
require("reflect-metadata");
const class_validator_1 = require("class-validator");
class CreateJob {
}
tslib_1.__decorate([
    class_validator_1.IsNotEmpty(),
    tslib_1.__metadata("design:type", String)
], CreateJob.prototype, "jobTitle", void 0);
tslib_1.__decorate([
    class_validator_1.IsNotEmpty(),
    tslib_1.__metadata("design:type", String)
], CreateJob.prototype, "jobDescription", void 0);
tslib_1.__decorate([
    class_validator_1.IsEmail(),
    tslib_1.__metadata("design:type", String)
], CreateJob.prototype, "contactPersonEmail", void 0);
tslib_1.__decorate([
    class_validator_1.MaxLength(15, {
        message: 'mobile number is maximum 15 character',
    }),
    class_validator_1.MinLength(8, {
        message: 'mobile number is minimum 8 character',
    }),
    tslib_1.__metadata("design:type", Number)
], CreateJob.prototype, "contactPersonMobile", void 0);
tslib_1.__decorate([
    class_validator_1.IsNotEmpty(),
    tslib_1.__metadata("design:type", Number)
], CreateJob.prototype, "status", void 0);
exports.CreateJob = CreateJob;
//# sourceMappingURL=CreateJobRequest.js.map