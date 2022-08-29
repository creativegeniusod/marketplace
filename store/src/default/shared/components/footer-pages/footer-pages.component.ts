import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { UtilService } from 'src/core/shared/utility/utility.service';

@Component({
  selector: 'app-footer-pages',
  templateUrl: './footer-pages.component.html',
  styleUrls: ['./footer-pages.component.scss']
})
export class FooterPagesComponent implements OnInit {

  faqData: any;
  pageName: String;

  constructor(private utilityServce: UtilService, private activatedRoute: ActivatedRoute, router: Router) {
    this.pageName = this.activatedRoute.snapshot.url[0].path;
  }

  ngOnInit() {
    if (this.pageName) {
      this.getFAQdata();
    }
  }

  getFAQdata() {
    const params: any = {};
    params.slug = this.pageName;
    this.utilityServce.getFAQdata(params).subscribe(res => {
      this.faqData = res ? res.data.content : null;
    })
  }
}
