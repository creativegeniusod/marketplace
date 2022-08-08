"use strict";
/*
 * spurtcommerce community API
 * Copyright (c) 2022 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserGroupRepository = void 0;
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
const UserGroup_1 = require("../models/UserGroup");
let UserGroupRepository = class UserGroupRepository extends typeorm_1.Repository {
};
UserGroupRepository = tslib_1.__decorate([
    typeorm_1.EntityRepository(UserGroup_1.UserGroup)
], UserGroupRepository);
exports.UserGroupRepository = UserGroupRepository;
//# sourceMappingURL=UserGroupRepository.js.map