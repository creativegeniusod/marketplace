/*
 * spurtcommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */

export class ForgotResponseModel {
  // Declare Default Params

  public user: any = {};
  constructor(forgotFormResponse: any) {
    this.user = forgotFormResponse || '';
  }
}
