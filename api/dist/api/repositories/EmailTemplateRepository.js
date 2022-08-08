"use strict";
/*
 * spurtcommerce community API
 * Copyright (c) 2022 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailTemplateRepository = void 0;
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
const EmailTemplate_1 = require("../models/EmailTemplate");
let EmailTemplateRepository = class EmailTemplateRepository extends typeorm_1.Repository {
};
EmailTemplateRepository = tslib_1.__decorate([
    typeorm_1.EntityRepository(EmailTemplate_1.EmailTemplate)
], EmailTemplateRepository);
exports.EmailTemplateRepository = EmailTemplateRepository;
//# sourceMappingURL=EmailTemplateRepository.js.map