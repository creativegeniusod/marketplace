/*
 * spurtcommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */
export class ProfileModel {
  public address: string;
  public avatar: string;
  public avatarPath: string;
  public zoneId: number;
  public countryId: number;
  public createdDate: string;
  public email: string;
  public firstName: string;
  public lastName: string;
  public pincode: string;
  public mobileNumber: string;
  public id: string;
  public lastLogin: string;
  public username: string;
  public bio: string;
  public iam: string;
  public interest: string;
  public phoneNumber: string;
  public checkPhoneNumber: number;
  public primaryAddess: String;
  public checkPrimaryAddess: Number;
  public recoveryEmail: String;
  public dob: String;
  public gender: String;

  constructor(bannerRequest: any) {
    this.address = bannerRequest.address || '';
    this.avatar = bannerRequest.avatar || '';
    this.avatarPath = bannerRequest.avatarPath || '';
    this.zoneId = bannerRequest.zoneId || '';
    this.countryId = bannerRequest.countryId || '';
    this.createdDate = bannerRequest.createdDate || '';
    this.email = bannerRequest.email || '';
    this.firstName = bannerRequest.firstName || '';
    this.lastName = bannerRequest.lastName || '';
    this.pincode = bannerRequest.pincode || '';
    this.mobileNumber = bannerRequest.mobileNumber || '';
    this.id = bannerRequest.id || '';
    this.lastLogin = bannerRequest.lastLogin || '';
    this.username = bannerRequest.username || '';
    this.bio = bannerRequest.bio || '';
    this.iam = bannerRequest.iam || '';
    this.interest = bannerRequest.interest || '';
    this.checkPhoneNumber = bannerRequest.interest || '';
    this.primaryAddess = bannerRequest.primaryAddess || '';
    this.checkPrimaryAddess = bannerRequest.checkPrimaryAddess || '';
    this.recoveryEmail = bannerRequest.recoveryEmail || '';
    this.dob = bannerRequest.dob || '';
    this.gender = bannerRequest.gender || '';
  }
}
