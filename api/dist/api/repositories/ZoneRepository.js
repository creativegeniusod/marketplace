"use strict";
/*
 * spurtcommerce community API
 * Copyright (c) 2022 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZoneRepository = void 0;
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
const Zone_1 = require("../models/Zone");
let ZoneRepository = class ZoneRepository extends typeorm_1.Repository {
};
ZoneRepository = tslib_1.__decorate([
    typeorm_1.EntityRepository(Zone_1.Zone)
], ZoneRepository);
exports.ZoneRepository = ZoneRepository;
//# sourceMappingURL=ZoneRepository.js.map