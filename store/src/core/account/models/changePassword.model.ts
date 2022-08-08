/*
 * spurtcommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */
export class ChangePasswordModel {
  public oldPassword: any;
  public newPassword: any;

  constructor(loginRequest: any) {
    this.oldPassword = loginRequest.currentPassword || '';
    this.newPassword = loginRequest.newPassword || '';
  }
}
