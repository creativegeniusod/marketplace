/*
 * spurtcommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */
export class ChangePasswordForm {
  public oldPassword: String;
  public newPassword: String;

  constructor(changePasswordForm: any) {
    this.oldPassword = changePasswordForm.oldpsw || '';
    this.newPassword = changePasswordForm.newpsw || '';
  }
}
