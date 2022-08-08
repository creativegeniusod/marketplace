"use strict";
/*
 * spurtcommerce community API
 * version 2.0.0
 * http://api.spurtcommerce.com
 *
 * Copyright (c) 2022 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_seeding_1 = require("typeorm-seeding");
const Setting_1 = require("../../api/models/Setting");
typeorm_seeding_1.define(Setting_1.Settings, (faker, settings) => {
    const setiings = new Setting_1.Settings();
    return setiings;
});
//# sourceMappingURL=SettingFactory.js.map