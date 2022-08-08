/*
 * spurtcommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */
export class LoginModel {
  public emailId: any;
  public password: any;
  public type: string;
  constructor(loginRequest: any) {
    this.emailId = loginRequest.email || '';
    this.password = loginRequest.password || '';
    this.type = loginRequest.type || '';
  }
}
