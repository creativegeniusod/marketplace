import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account-buttons',
  templateUrl: './account-buttons.component.html',
  styleUrls: ['./account-buttons.component.scss']
})
export class AccountButtonsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigateOnHelp(): void {
    this.router.navigate(['../help']);
  }

}
