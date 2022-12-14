/*
 * spurtcommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
    production: false,
    facebookAppId: '314930319788683',
    storeUrl: 'http://stagingwebsites.info:9016/api/', // <Your API base url>
    imageUrl: 'http://stagingwebsites.info:9016/api/media/image-resize/' // <Your API url for image resize>
    // storeUrl: 'http://localhost:9016/api/', // <Your API base url>
    // imageUrl: 'http://localhost:9016/api/media/image-resize/' // <Your API url for image resize>
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
