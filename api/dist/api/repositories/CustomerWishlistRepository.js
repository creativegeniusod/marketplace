"use strict";
/*
 * spurtcommerce community API
 * Copyright (c) 2022 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerWishlistRepository = void 0;
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
const CustomerWishlist_1 = require("../models/CustomerWishlist");
let CustomerWishlistRepository = class CustomerWishlistRepository extends typeorm_1.Repository {
};
CustomerWishlistRepository = tslib_1.__decorate([
    typeorm_1.EntityRepository(CustomerWishlist_1.CustomerWishlist)
], CustomerWishlistRepository);
exports.CustomerWishlistRepository = CustomerWishlistRepository;
//# sourceMappingURL=CustomerWishlistRepository.js.map