/*
 * spurtcommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */
export class EditProfileModal {
  public firstName: any;
  public lastName: any;
  public password: any;
  public emailId: any;
  public phoneNumber: any;
  public image: any;
  public bio: string;
  public iam: string;
  public interest: string;

  constructor(editRequest: any) {
    this.firstName = editRequest.firstName || '';
    this.lastName = editRequest.lastName || '';
    this.password = editRequest.password || '';
    this.emailId = editRequest.email || '';
    this.phoneNumber = editRequest.phoneNumber || '';
    this.image = editRequest.image || '';
    this.bio = editRequest.bio || '';
    this.iam = editRequest.iam || '';
    this.interest = editRequest.interest || '';
  }
}
