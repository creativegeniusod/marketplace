"use strict";
/*
 * spurtcommerce community API
 * version 2.2
 * Copyright (c) 2022 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.homeLoader = void 0;
const env_1 = require("../env");
exports.homeLoader = (settings) => {
    if (settings) {
        const expressApp = settings.getData('express_app');
        expressApp.get(env_1.env.app.routePrefix, (req, res) => {
            return res.json({
                name: env_1.env.app.name,
                version: env_1.env.app.version,
                description: env_1.env.app.description,
            });
        });
    }
};
//# sourceMappingURL=homeLoader.js.map