/*
 * spurtcommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */

export class ForgotForm {
  // Declare Default Params
  public email: String;
  constructor(forgotForm: any) {
    this.email = forgotForm.email || '';
  }
}
