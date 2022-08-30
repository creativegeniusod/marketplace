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
  public mobileNumber: any;
  public image: any;
  public bio: string;
  public iam: string;
  public interest: string;
  public orderNotificationFirst: any;
  public primaryAddess: String;
  public orderNotificationsecond: any;
  public recoveryEmail: String;
  public birthday: String;
  public gender: String;


  constructor(editRequest: any) {
    this.firstName = editRequest.firstName || '';
    this.lastName = editRequest.lastName || '';
    this.password = editRequest.password || '';
    this.emailId = editRequest.email || '';
    this.mobileNumber = editRequest.mobileNumber || '';
    this.image = editRequest.image || '';
    this.bio = editRequest.bio || '';
    this.iam = editRequest.iam || '';
    this.interest = editRequest.interest || '';
    this.orderNotificationFirst = editRequest.orderNotificationFirst ? 1 : 0;
    this.primaryAddess = editRequest.primaryAddess || '';
    this.orderNotificationsecond = editRequest.orderNotificationsecond ? 1 : 0;
    this.recoveryEmail = editRequest.recoveryEmail || '';
    this.birthday = editRequest.birthday || '';
    this.gender = editRequest.gender || '';
  }
}
