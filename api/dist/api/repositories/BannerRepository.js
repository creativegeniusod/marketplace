"use strict";
/*
 * spurtcommerce community API
 * Copyright (c) 2022 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.BannerRepository = void 0;
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
const Banner_1 = require("../models/Banner");
let BannerRepository = class BannerRepository extends typeorm_1.Repository {
};
BannerRepository = tslib_1.__decorate([
    typeorm_1.EntityRepository(Banner_1.Banner)
], BannerRepository);
exports.BannerRepository = BannerRepository;
//# sourceMappingURL=BannerRepository.js.map