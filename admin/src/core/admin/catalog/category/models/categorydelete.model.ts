/*
 * SpurtCommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */

export class CategorydeleteForm {
  public categoryId: number;

  constructor(categorydeleteForm: any) {
    this.categoryId = categorydeleteForm.categoryId || '';
  }
}
