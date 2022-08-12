(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-home-home-module"],{

/***/ "./src/default/pages/home/advertisment-product/advertisment-product.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/default/pages/home/advertisment-product/advertisment-product.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container>\n  <mat-sidenav-content class=\"all-products\" ngClass.gt-sm=\"p-left\">\n    <!-- <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutAlign=\"space-between center\"\n      class=\"filter-row mat-elevation-z1 text-muted\">\n      <button *ngIf=\"!sidenavOpen\" mat-icon-button (click)=\"sidenav.toggle()\">\n        <mat-icon>more_vert</mat-icon>\n      </button>\n      <div>\n\n        <mat-menu #sortMenu=\"matMenu\" xPosition=\"before\" class=\"app-dropdown\" overlapTrigger=\"true\">\n          <span (mouseleave)=\"sortMenuTrigger.closeMenu()\">\n            <button mat-menu-item *ngFor=\"let sort of sortings\" (click)=\"changeSorting(sort)\">\n              <span>{{sort.order}}</span>\n            </button>\n          </span>\n        </mat-menu>\n      </div>\n    </div> -->\n    <!-- *ngIf=\"listSandbox.productLoading$ | async\" -->\n    <div class=\"wrapper\">\n      <div class=\"overlay\">\n        <div class=\"spinner-wrapper\">\n          <app-spinner [isShow]=\"listSandbox.productLoading$ | async\"></app-spinner>\n        </div>\n      </div>\n    </div>\n    <div *ngIf=\"viewType == 'grid'\" fxLayout=\"row wrap\" class=\"products-wrapper\">\n\n      <div *ngFor=\"let product of (listSandbox.productlist$ | async)\" fxFlex=\"100\" [fxFlex.gt-sm]=\"viewCol\"\n        fxFlex.sm=\"50\" class=\"col\">\n        <mat-card class=\"product-item text-center card-hover\">\n          <!-- <a [routerLink]=\"['/products/productdetails', product.productId]\" class=\"image-link\"> -->\n          <img *ngIf=\"product['Images'].defaultImage == 1\" style=\"height:200px\"\n            [src]=\"imagePath+ '?path=' + product['Images'].containerName + '&name=' + product['Images'].image + '&width=260&height=260'\"\n            onError=\"this.src='/assets/images/default_image.png';\">\n        </mat-card>\n      </div>\n    </div>\n\n  </mat-sidenav-content>\n</mat-sidenav-container>"

/***/ }),

/***/ "./src/default/pages/home/advertisment-product/advertisment-product.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/default/pages/home/advertisment-product/advertisment-product.component.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

<<<<<<< HEAD
module.exports = ".del {\n  color: grey; }\n\n.mediaIcons {\n  max-height: 65px; }\n\n.shareAlign {\n  margin-left: 60%; }\n\n::ng-deep.app.green .mat-checkbox-checkmark-path {\n  stroke: green !important; }\n\n.bannercursor {\n  cursor: pointer; }\n\n.mat-card.product-image {\n  padding: 6px;\n  text-align: center; }\n\n.mat-card.product-image button {\n    position: absolute;\n    top: 0;\n    right: 0;\n    z-index: 99; }\n\n.mat-card.product-image img {\n    max-width: 100%; }\n\n.supvalidation {\n  color: red; }\n\n.small-carousel {\n  margin-top: 8px; }\n\n.small-carousel .swiper-container {\n    padding: 2px; }\n\n.small-carousel .swiper-container .swiper-slide {\n      text-align: center; }\n\n.small-carousel .swiper-container .swiper-slide img {\n        cursor: pointer;\n        max-width: 100%;\n        height: 6vh; }\n\n.small-carousel .swiper-button-next.swiper-button-disabled,\n  .small-carousel .swiper-button-prev.swiper-button-disabled {\n    opacity: 0; }\n\n.small-carousel .swiper-button-prev {\n    left: -10px; }\n\n.small-carousel .swiper-button-next {\n    right: -10px; }\n\n.mat-card.zoom-viewer {\n  position: absolute;\n  display: none;\n  background-repeat: no-repeat;\n  padding: 8px;\n  z-index: 99; }\n\n.mt-16 {\n  margin-top: 16px; }\n\n.details button {\n  padding: 0;\n  min-width: 36px;\n  margin-left: 6px; }\n\n.mat-list.reviews .mat-list-item .mat-list-avatar.review-author {\n  width: 80px;\n  height: 80px; }\n\n.mat-list.reviews .mat-list-item .mat-line.text {\n  white-space: unset;\n  font-style: italic;\n  margin: 10px 0; }\n\n.full-desc {\n  padding: 30px 40px; }\n\n@media (min-width: 1280px) {\n  .mat-card.product-image img {\n    cursor: zoom-in;\n    cursor: url('zoom.svg') 10 10, zoom-in; } }\n\n.card-hover {\n  transition: all .25s ease; }\n\n.card-hover:hover {\n    transform: translateY(-4px) scale(1.05);\n    box-shadow: 0 14px 24px rgba(62, 57, 107, 0.1); }\n\n.fix-image {\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n.spinner-wrapper {\n  text-align: center; }\n\n.no-review {\n  text-align: center; }\n\n.big-carousel {\n  margin-top: 8px;\n  height: 300px; }\n\n.big-carousel .swiper-container {\n    padding: 2px;\n    height: 300px; }\n\n.big-carousel .swiper-container .swiper-wrapper {\n      height: 300px; }\n\n.big-carousel .swiper-container .swiper-wrapper .swiper-slide {\n        height: 300px;\n        text-align: center; }\n\n.big-carousel .swiper-container .swiper-wrapper .swiper-slide img {\n          cursor: pointer; }\n\n.big-carousel .swiper-container .swiper-wrapper .swiper-slide .changeColor {\n          box-shadow: 1px -1px 0px 3px #0000FF; }\n\n.big-carousel .swiper-button-next.swiper-button-disabled,\n  .big-carousel .swiper-button-prev.swiper-button-disabled {\n    opacity: 0; }\n\n.big-carousel .swiper-button-prev {\n    left: -10px; }\n\n.big-carousel .swiper-button-next {\n    right: -10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi93ZWJyb290L3B1YmxpY19odG1sL3dlYnNpdGVzL29kei9tYXJrZXRwbGFjZS9zdG9yZS9zcmMvZGVmYXVsdC9wYWdlcy9ob21lL2FkdmVydGlzbWVudC1wcm9kdWN0L2FkdmVydGlzbWVudC1wcm9kdWN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBVyxFQUNkOztBQUVEO0VBQ0ksaUJBQWdCLEVBQ25COztBQUVEO0VBQ0ksaUJBQWdCLEVBQ25COztBQUVEO0VBQ0kseUJBQXdCLEVBQzNCOztBQVFEO0VBQ0ksZ0JBQWUsRUFDbEI7O0FBRUQ7RUFDSSxhQUFZO0VBQ1osbUJBQWtCLEVBVXJCOztBQVpEO0lBSVEsbUJBQWtCO0lBQ2xCLE9BQU07SUFDTixTQUFRO0lBQ1IsWUFBVyxFQUNkOztBQVJMO0lBVVEsZ0JBQWUsRUFDbEI7O0FBR0w7RUFDSSxXQUFVLEVBQ2I7O0FBRUQ7RUFDSSxnQkFBZSxFQTBCbEI7O0FBM0JEO0lBR1EsYUFBWSxFQWFmOztBQWhCTDtNQUtZLG1CQUFrQixFQVVyQjs7QUFmVDtRQU9nQixnQkFBZTtRQUNmLGdCQUFlO1FBQ2YsWUFBVyxFQUNkOztBQVZiOztJQW1CUSxXQUFVLEVBQ2I7O0FBcEJMO0lBc0JRLFlBQVcsRUFDZDs7QUF2Qkw7SUF5QlEsYUFBWSxFQUNmOztBQUdMO0VBQ0ksbUJBQWtCO0VBQ2xCLGNBQWE7RUFDYiw2QkFBNEI7RUFDNUIsYUFBWTtFQUNaLFlBQVcsRUFDZDs7QUFFRDtFQUNJLGlCQUFnQixFQUNuQjs7QUFFRDtFQUNJLFdBQVU7RUFDVixnQkFBZTtFQUNmLGlCQUFnQixFQUNuQjs7QUFFRDtFQUVRLFlBQVc7RUFDWCxhQUFZLEVBQ2Y7O0FBSkw7RUFNUSxtQkFBa0I7RUFDbEIsbUJBQWtCO0VBQ2xCLGVBQWMsRUFDakI7O0FBR0w7RUFDSSxtQkFBa0IsRUFDckI7O0FBRUQ7RUFDSTtJQUNJLGdCQUFlO0lBQ2YsdUNBQXVFLEVBQzFFLEVBQUE7O0FBR0w7RUFJSSwwQkFBeUIsRUFVNUI7O0FBZEQ7SUFVUSx3Q0FBdUM7SUFFdkMsK0NBQTZDLEVBQ2hEOztBQUdMO0VBQ0kscUJBQWlCO0tBQWpCLGtCQUFpQixFQUdwQjs7QUFFRDtFQUNJLG1CQUFrQixFQUNyQjs7QUFFRDtFQUNJLG1CQUFrQixFQUNyQjs7QUFFRDtFQUNJLGdCQUFlO0VBQ2YsY0FBYSxFQStCaEI7O0FBakNEO0lBSVEsYUFBWTtJQUNaLGNBQWEsRUFpQmhCOztBQXRCTDtNQU9ZLGNBQWEsRUFjaEI7O0FBckJUO1FBU2dCLGNBQWE7UUFDYixtQkFBa0IsRUFVckI7O0FBcEJiO1VBWW9CLGdCQUFlLEVBR2xCOztBQWZqQjtVQWlCb0IscUNBQW9DLEVBRXZDOztBQW5CakI7O0lBeUJRLFdBQVUsRUFDYjs7QUExQkw7SUE0QlEsWUFBVyxFQUNkOztBQTdCTDtJQStCUSxhQUFZLEVBQ2YiLCJmaWxlIjoic3JjL2RlZmF1bHQvcGFnZXMvaG9tZS9hZHZlcnRpc21lbnQtcHJvZHVjdC9hZHZlcnRpc21lbnQtcHJvZHVjdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kZWwge1xuICAgIGNvbG9yOiBncmV5O1xufVxuXG4ubWVkaWFJY29ucyB7XG4gICAgbWF4LWhlaWdodDogNjVweDtcbn1cblxuLnNoYXJlQWxpZ24ge1xuICAgIG1hcmdpbi1sZWZ0OiA2MCU7XG59XG5cbjo6bmctZGVlcC5hcHAuZ3JlZW4gLm1hdC1jaGVja2JveC1jaGVja21hcmstcGF0aCB7XG4gICAgc3Ryb2tlOiBncmVlbiAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAuYXBwLmdyZWVuIC5tYXQtbWVudS1wYW5lbCB7XG4gICAgLy9tYXJnaW4tbGVmdDogMzUlO1xuICAgIC8vbWluLXdpZHRoOiA5MXB4ICFpbXBvcnRhbnQ7XG4gICAgLy9tYXgtd2lkdGg6IDI0NnB4O1xufVxuXG4uYmFubmVyY3Vyc29yIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5tYXQtY2FyZC5wcm9kdWN0LWltYWdlIHtcbiAgICBwYWRkaW5nOiA2cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJ1dHRvbiB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgei1pbmRleDogOTk7XG4gICAgfVxuICAgIGltZyB7XG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICB9XG59XG5cbi5zdXB2YWxpZGF0aW9uIHtcbiAgICBjb2xvcjogcmVkO1xufVxuXG4uc21hbGwtY2Fyb3VzZWwge1xuICAgIG1hcmdpbi10b3A6IDhweDtcbiAgICAuc3dpcGVyLWNvbnRhaW5lciB7XG4gICAgICAgIHBhZGRpbmc6IDJweDtcbiAgICAgICAgLnN3aXBlci1zbGlkZSB7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA2dmg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuY2hhbmdlQ29sb3Ige1xuICAgICAgICAgICAgICAgIC8vIGJveC1zaGFkb3c6IDFweCAtMXB4IDBweCAzcHggIzAwMDBGRjtcbiAgICAgICAgICAgICAgICAvLyBib3gtc2hhZG93OiA1cHggN3B4IDhweCAjMDAwMEZGO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC5zd2lwZXItYnV0dG9uLW5leHQuc3dpcGVyLWJ1dHRvbi1kaXNhYmxlZCxcbiAgICAuc3dpcGVyLWJ1dHRvbi1wcmV2LnN3aXBlci1idXR0b24tZGlzYWJsZWQge1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgIH1cbiAgICAuc3dpcGVyLWJ1dHRvbi1wcmV2IHtcbiAgICAgICAgbGVmdDogLTEwcHg7XG4gICAgfVxuICAgIC5zd2lwZXItYnV0dG9uLW5leHQge1xuICAgICAgICByaWdodDogLTEwcHg7XG4gICAgfVxufVxuXG4ubWF0LWNhcmQuem9vbS12aWV3ZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgcGFkZGluZzogOHB4O1xuICAgIHotaW5kZXg6IDk5O1xufVxuXG4ubXQtMTYge1xuICAgIG1hcmdpbi10b3A6IDE2cHg7XG59XG5cbi5kZXRhaWxzIGJ1dHRvbiB7XG4gICAgcGFkZGluZzogMDtcbiAgICBtaW4td2lkdGg6IDM2cHg7XG4gICAgbWFyZ2luLWxlZnQ6IDZweDtcbn1cblxuLm1hdC1saXN0LnJldmlld3Mge1xuICAgIC5tYXQtbGlzdC1pdGVtIC5tYXQtbGlzdC1hdmF0YXIucmV2aWV3LWF1dGhvciB7XG4gICAgICAgIHdpZHRoOiA4MHB4O1xuICAgICAgICBoZWlnaHQ6IDgwcHg7XG4gICAgfVxuICAgIC5tYXQtbGlzdC1pdGVtIC5tYXQtbGluZS50ZXh0IHtcbiAgICAgICAgd2hpdGUtc3BhY2U6IHVuc2V0O1xuICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgICAgIG1hcmdpbjogMTBweCAwO1xuICAgIH1cbn1cblxuLmZ1bGwtZGVzYyB7XG4gICAgcGFkZGluZzogMzBweCA0MHB4O1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogMTI4MHB4KSB7XG4gICAgLm1hdC1jYXJkLnByb2R1Y3QtaW1hZ2UgaW1nIHtcbiAgICAgICAgY3Vyc29yOiB6b29tLWluO1xuICAgICAgICBjdXJzb3I6IHVybCgnLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9vdGhlcnMvem9vbS5zdmcnKSAxMCAxMCwgem9vbS1pbjtcbiAgICB9XG59XG5cbi5jYXJkLWhvdmVyIHtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAuMjVzIGVhc2U7XG4gICAgLW8tdHJhbnNpdGlvbjogYWxsIC4yNXMgZWFzZTtcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAuMjVzIGVhc2U7XG4gICAgdHJhbnNpdGlvbjogYWxsIC4yNXMgZWFzZTtcbiAgICAmOmhvdmVyIHtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTRweCkgc2NhbGUoMS4wMSk7XG4gICAgICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC00cHgpIHNjYWxlKDEuMDEpO1xuICAgICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC00cHgpIHNjYWxlKDEuMDEpO1xuICAgICAgICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTRweCkgc2NhbGUoMS4wMSk7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNHB4KSBzY2FsZSgxLjA1KTtcbiAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDE0cHggMjRweCByZ2JhKDYyLCA1NywgMTA3LCAuMSk7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMTRweCAyNHB4IHJnYmEoNjIsIDU3LCAxMDcsIC4xKTtcbiAgICB9XG59XG5cbi5maXgtaW1hZ2Uge1xuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgIC8vd2lkdGg6IDQ0MnB4O1xuICAgIC8vaGVpZ2h0OiA0MDBweDtcbn1cblxuLnNwaW5uZXItd3JhcHBlciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubm8tcmV2aWV3IHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5iaWctY2Fyb3VzZWwge1xuICAgIG1hcmdpbi10b3A6IDhweDtcbiAgICBoZWlnaHQ6IDMwMHB4O1xuICAgIC5zd2lwZXItY29udGFpbmVyIHtcbiAgICAgICAgcGFkZGluZzogMnB4O1xuICAgICAgICBoZWlnaHQ6IDMwMHB4O1xuICAgICAgICAuc3dpcGVyLXdyYXBwZXIge1xuICAgICAgICAgICAgaGVpZ2h0OiAzMDBweDtcbiAgICAgICAgICAgIC5zd2lwZXItc2xpZGUge1xuICAgICAgICAgICAgICAgIGhlaWdodDogMzAwcHg7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgLy8gbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAvLyBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5jaGFuZ2VDb2xvciB7XG4gICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDFweCAtMXB4IDBweCAzcHggIzAwMDBGRjtcbiAgICAgICAgICAgICAgICAgICAgLy8gYm94LXNoYWRvdzogNXB4IDdweCA4cHggIzAwMDBGRjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLnN3aXBlci1idXR0b24tbmV4dC5zd2lwZXItYnV0dG9uLWRpc2FibGVkLFxuICAgIC5zd2lwZXItYnV0dG9uLXByZXYuc3dpcGVyLWJ1dHRvbi1kaXNhYmxlZCB7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuICAgIC5zd2lwZXItYnV0dG9uLXByZXYge1xuICAgICAgICBsZWZ0OiAtMTBweDtcbiAgICB9XG4gICAgLnN3aXBlci1idXR0b24tbmV4dCB7XG4gICAgICAgIHJpZ2h0OiAtMTBweDtcbiAgICB9XG59Il19 */"
=======
module.exports = ".del {\n  color: grey; }\n\n.mediaIcons {\n  max-height: 65px; }\n\n.shareAlign {\n  margin-left: 60%; }\n\n::ng-deep.app.green .mat-checkbox-checkmark-path {\n  stroke: green !important; }\n\n.bannercursor {\n  cursor: pointer; }\n\n.mat-card.product-image {\n  padding: 6px;\n  text-align: center; }\n\n.mat-card.product-image button {\n    position: absolute;\n    top: 0;\n    right: 0;\n    z-index: 99; }\n\n.mat-card.product-image img {\n    max-width: 100%; }\n\n.supvalidation {\n  color: red; }\n\n.small-carousel {\n  margin-top: 8px; }\n\n.small-carousel .swiper-container {\n    padding: 2px; }\n\n.small-carousel .swiper-container .swiper-slide {\n      text-align: center; }\n\n.small-carousel .swiper-container .swiper-slide img {\n        cursor: pointer;\n        max-width: 100%;\n        height: 6vh; }\n\n.small-carousel .swiper-button-next.swiper-button-disabled,\n  .small-carousel .swiper-button-prev.swiper-button-disabled {\n    opacity: 0; }\n\n.small-carousel .swiper-button-prev {\n    left: -10px; }\n\n.small-carousel .swiper-button-next {\n    right: -10px; }\n\n.mat-card.zoom-viewer {\n  position: absolute;\n  display: none;\n  background-repeat: no-repeat;\n  padding: 8px;\n  z-index: 99; }\n\n.mt-16 {\n  margin-top: 16px; }\n\n.details button {\n  padding: 0;\n  min-width: 36px;\n  margin-left: 6px; }\n\n.mat-list.reviews .mat-list-item .mat-list-avatar.review-author {\n  width: 80px;\n  height: 80px; }\n\n.mat-list.reviews .mat-list-item .mat-line.text {\n  white-space: unset;\n  font-style: italic;\n  margin: 10px 0; }\n\n.full-desc {\n  padding: 30px 40px; }\n\n@media (min-width: 1280px) {\n  .mat-card.product-image img {\n    cursor: zoom-in;\n    cursor: url('zoom.svg') 10 10, zoom-in; } }\n\n.card-hover {\n  transition: all .25s ease; }\n\n.card-hover:hover {\n    transform: translateY(-4px) scale(1.05);\n    box-shadow: 0 14px 24px rgba(62, 57, 107, 0.1); }\n\n.fix-image {\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n.spinner-wrapper {\n  text-align: center; }\n\n.no-review {\n  text-align: center; }\n\n.big-carousel {\n  margin-top: 8px;\n  height: 300px; }\n\n.big-carousel .swiper-container {\n    padding: 2px;\n    height: 300px; }\n\n.big-carousel .swiper-container .swiper-wrapper {\n      height: 300px; }\n\n.big-carousel .swiper-container .swiper-wrapper .swiper-slide {\n        height: 300px;\n        text-align: center; }\n\n.big-carousel .swiper-container .swiper-wrapper .swiper-slide img {\n          cursor: pointer; }\n\n.big-carousel .swiper-container .swiper-wrapper .swiper-slide .changeColor {\n          box-shadow: 1px -1px 0px 3px #0000FF; }\n\n.big-carousel .swiper-button-next.swiper-button-disabled,\n  .big-carousel .swiper-button-prev.swiper-button-disabled {\n    opacity: 0; }\n\n.big-carousel .swiper-button-prev {\n    left: -10px; }\n\n.big-carousel .swiper-button-next {\n    right: -10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvdGVzdDAxL21hcmtldHBsYWNlL3N0b3JlL3NyYy9kZWZhdWx0L3BhZ2VzL2hvbWUvYWR2ZXJ0aXNtZW50LXByb2R1Y3QvYWR2ZXJ0aXNtZW50LXByb2R1Y3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFXLEVBQ2Q7O0FBRUQ7RUFDSSxpQkFBZ0IsRUFDbkI7O0FBRUQ7RUFDSSxpQkFBZ0IsRUFDbkI7O0FBRUQ7RUFDSSx5QkFBd0IsRUFDM0I7O0FBUUQ7RUFDSSxnQkFBZSxFQUNsQjs7QUFFRDtFQUNJLGFBQVk7RUFDWixtQkFBa0IsRUFVckI7O0FBWkQ7SUFJUSxtQkFBa0I7SUFDbEIsT0FBTTtJQUNOLFNBQVE7SUFDUixZQUFXLEVBQ2Q7O0FBUkw7SUFVUSxnQkFBZSxFQUNsQjs7QUFHTDtFQUNJLFdBQVUsRUFDYjs7QUFFRDtFQUNJLGdCQUFlLEVBMEJsQjs7QUEzQkQ7SUFHUSxhQUFZLEVBYWY7O0FBaEJMO01BS1ksbUJBQWtCLEVBVXJCOztBQWZUO1FBT2dCLGdCQUFlO1FBQ2YsZ0JBQWU7UUFDZixZQUFXLEVBQ2Q7O0FBVmI7O0lBbUJRLFdBQVUsRUFDYjs7QUFwQkw7SUFzQlEsWUFBVyxFQUNkOztBQXZCTDtJQXlCUSxhQUFZLEVBQ2Y7O0FBR0w7RUFDSSxtQkFBa0I7RUFDbEIsY0FBYTtFQUNiLDZCQUE0QjtFQUM1QixhQUFZO0VBQ1osWUFBVyxFQUNkOztBQUVEO0VBQ0ksaUJBQWdCLEVBQ25COztBQUVEO0VBQ0ksV0FBVTtFQUNWLGdCQUFlO0VBQ2YsaUJBQWdCLEVBQ25COztBQUVEO0VBRVEsWUFBVztFQUNYLGFBQVksRUFDZjs7QUFKTDtFQU1RLG1CQUFrQjtFQUNsQixtQkFBa0I7RUFDbEIsZUFBYyxFQUNqQjs7QUFHTDtFQUNJLG1CQUFrQixFQUNyQjs7QUFFRDtFQUNJO0lBQ0ksZ0JBQWU7SUFDZix1Q0FBdUUsRUFDMUUsRUFBQTs7QUFHTDtFQUlJLDBCQUF5QixFQVU1Qjs7QUFkRDtJQVVRLHdDQUF1QztJQUV2QywrQ0FBNkMsRUFDaEQ7O0FBR0w7RUFDSSxxQkFBaUI7S0FBakIsa0JBQWlCLEVBR3BCOztBQUVEO0VBQ0ksbUJBQWtCLEVBQ3JCOztBQUVEO0VBQ0ksbUJBQWtCLEVBQ3JCOztBQUVEO0VBQ0ksZ0JBQWU7RUFDZixjQUFhLEVBK0JoQjs7QUFqQ0Q7SUFJUSxhQUFZO0lBQ1osY0FBYSxFQWlCaEI7O0FBdEJMO01BT1ksY0FBYSxFQWNoQjs7QUFyQlQ7UUFTZ0IsY0FBYTtRQUNiLG1CQUFrQixFQVVyQjs7QUFwQmI7VUFZb0IsZ0JBQWUsRUFHbEI7O0FBZmpCO1VBaUJvQixxQ0FBb0MsRUFFdkM7O0FBbkJqQjs7SUF5QlEsV0FBVSxFQUNiOztBQTFCTDtJQTRCUSxZQUFXLEVBQ2Q7O0FBN0JMO0lBK0JRLGFBQVksRUFDZiIsImZpbGUiOiJzcmMvZGVmYXVsdC9wYWdlcy9ob21lL2FkdmVydGlzbWVudC1wcm9kdWN0L2FkdmVydGlzbWVudC1wcm9kdWN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRlbCB7XG4gICAgY29sb3I6IGdyZXk7XG59XG5cbi5tZWRpYUljb25zIHtcbiAgICBtYXgtaGVpZ2h0OiA2NXB4O1xufVxuXG4uc2hhcmVBbGlnbiB7XG4gICAgbWFyZ2luLWxlZnQ6IDYwJTtcbn1cblxuOjpuZy1kZWVwLmFwcC5ncmVlbiAubWF0LWNoZWNrYm94LWNoZWNrbWFyay1wYXRoIHtcbiAgICBzdHJva2U6IGdyZWVuICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcC5hcHAuZ3JlZW4gLm1hdC1tZW51LXBhbmVsIHtcbiAgICAvL21hcmdpbi1sZWZ0OiAzNSU7XG4gICAgLy9taW4td2lkdGg6IDkxcHggIWltcG9ydGFudDtcbiAgICAvL21heC13aWR0aDogMjQ2cHg7XG59XG5cbi5iYW5uZXJjdXJzb3Ige1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLm1hdC1jYXJkLnByb2R1Y3QtaW1hZ2Uge1xuICAgIHBhZGRpbmc6IDZweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYnV0dG9uIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICB6LWluZGV4OiA5OTtcbiAgICB9XG4gICAgaW1nIHtcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIH1cbn1cblxuLnN1cHZhbGlkYXRpb24ge1xuICAgIGNvbG9yOiByZWQ7XG59XG5cbi5zbWFsbC1jYXJvdXNlbCB7XG4gICAgbWFyZ2luLXRvcDogOHB4O1xuICAgIC5zd2lwZXItY29udGFpbmVyIHtcbiAgICAgICAgcGFkZGluZzogMnB4O1xuICAgICAgICAuc3dpcGVyLXNsaWRlIHtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDZ2aDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5jaGFuZ2VDb2xvciB7XG4gICAgICAgICAgICAgICAgLy8gYm94LXNoYWRvdzogMXB4IC0xcHggMHB4IDNweCAjMDAwMEZGO1xuICAgICAgICAgICAgICAgIC8vIGJveC1zaGFkb3c6IDVweCA3cHggOHB4ICMwMDAwRkY7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLnN3aXBlci1idXR0b24tbmV4dC5zd2lwZXItYnV0dG9uLWRpc2FibGVkLFxuICAgIC5zd2lwZXItYnV0dG9uLXByZXYuc3dpcGVyLWJ1dHRvbi1kaXNhYmxlZCB7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuICAgIC5zd2lwZXItYnV0dG9uLXByZXYge1xuICAgICAgICBsZWZ0OiAtMTBweDtcbiAgICB9XG4gICAgLnN3aXBlci1idXR0b24tbmV4dCB7XG4gICAgICAgIHJpZ2h0OiAtMTBweDtcbiAgICB9XG59XG5cbi5tYXQtY2FyZC56b29tLXZpZXdlciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBwYWRkaW5nOiA4cHg7XG4gICAgei1pbmRleDogOTk7XG59XG5cbi5tdC0xNiB7XG4gICAgbWFyZ2luLXRvcDogMTZweDtcbn1cblxuLmRldGFpbHMgYnV0dG9uIHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1pbi13aWR0aDogMzZweDtcbiAgICBtYXJnaW4tbGVmdDogNnB4O1xufVxuXG4ubWF0LWxpc3QucmV2aWV3cyB7XG4gICAgLm1hdC1saXN0LWl0ZW0gLm1hdC1saXN0LWF2YXRhci5yZXZpZXctYXV0aG9yIHtcbiAgICAgICAgd2lkdGg6IDgwcHg7XG4gICAgICAgIGhlaWdodDogODBweDtcbiAgICB9XG4gICAgLm1hdC1saXN0LWl0ZW0gLm1hdC1saW5lLnRleHQge1xuICAgICAgICB3aGl0ZS1zcGFjZTogdW5zZXQ7XG4gICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICAgICAgbWFyZ2luOiAxMHB4IDA7XG4gICAgfVxufVxuXG4uZnVsbC1kZXNjIHtcbiAgICBwYWRkaW5nOiAzMHB4IDQwcHg7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiAxMjgwcHgpIHtcbiAgICAubWF0LWNhcmQucHJvZHVjdC1pbWFnZSBpbWcge1xuICAgICAgICBjdXJzb3I6IHpvb20taW47XG4gICAgICAgIGN1cnNvcjogdXJsKCcuLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL290aGVycy96b29tLnN2ZycpIDEwIDEwLCB6b29tLWluO1xuICAgIH1cbn1cblxuLmNhcmQtaG92ZXIge1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIC4yNXMgZWFzZTtcbiAgICAtby10cmFuc2l0aW9uOiBhbGwgLjI1cyBlYXNlO1xuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIC4yNXMgZWFzZTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjI1cyBlYXNlO1xuICAgICY6aG92ZXIge1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNHB4KSBzY2FsZSgxLjAxKTtcbiAgICAgICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTRweCkgc2NhbGUoMS4wMSk7XG4gICAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTRweCkgc2NhbGUoMS4wMSk7XG4gICAgICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNHB4KSBzY2FsZSgxLjAxKTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC00cHgpIHNjYWxlKDEuMDUpO1xuICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMTRweCAyNHB4IHJnYmEoNjIsIDU3LCAxMDcsIC4xKTtcbiAgICAgICAgYm94LXNoYWRvdzogMCAxNHB4IDI0cHggcmdiYSg2MiwgNTcsIDEwNywgLjEpO1xuICAgIH1cbn1cblxuLmZpeC1pbWFnZSB7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgLy93aWR0aDogNDQycHg7XG4gICAgLy9oZWlnaHQ6IDQwMHB4O1xufVxuXG4uc3Bpbm5lci13cmFwcGVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5uby1yZXZpZXcge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmJpZy1jYXJvdXNlbCB7XG4gICAgbWFyZ2luLXRvcDogOHB4O1xuICAgIGhlaWdodDogMzAwcHg7XG4gICAgLnN3aXBlci1jb250YWluZXIge1xuICAgICAgICBwYWRkaW5nOiAycHg7XG4gICAgICAgIGhlaWdodDogMzAwcHg7XG4gICAgICAgIC5zd2lwZXItd3JhcHBlciB7XG4gICAgICAgICAgICBoZWlnaHQ6IDMwMHB4O1xuICAgICAgICAgICAgLnN3aXBlci1zbGlkZSB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzMDBweDtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgICAgICAvLyBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIC8vIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmNoYW5nZUNvbG9yIHtcbiAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMXB4IC0xcHggMHB4IDNweCAjMDAwMEZGO1xuICAgICAgICAgICAgICAgICAgICAvLyBib3gtc2hhZG93OiA1cHggN3B4IDhweCAjMDAwMEZGO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAuc3dpcGVyLWJ1dHRvbi1uZXh0LnN3aXBlci1idXR0b24tZGlzYWJsZWQsXG4gICAgLnN3aXBlci1idXR0b24tcHJldi5zd2lwZXItYnV0dG9uLWRpc2FibGVkIHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG4gICAgLnN3aXBlci1idXR0b24tcHJldiB7XG4gICAgICAgIGxlZnQ6IC0xMHB4O1xuICAgIH1cbiAgICAuc3dpcGVyLWJ1dHRvbi1uZXh0IHtcbiAgICAgICAgcmlnaHQ6IC0xMHB4O1xuICAgIH1cbn0iXX0= */"
>>>>>>> 85c5e2989e9bf20ec75f2c1837a5509a280d7faf

/***/ }),

/***/ "./src/default/pages/home/advertisment-product/advertisment-product.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/default/pages/home/advertisment-product/advertisment-product.component.ts ***!
  \***************************************************************************************/
/*! exports provided: AdvertismentProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvertismentProductComponent", function() { return AdvertismentProductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var src_core_lists_lists_sandbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/core/lists/lists.sandbox */ "./src/core/lists/lists.sandbox.ts");
/* harmony import */ var src_core_service_config_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/core/service/config.service */ "./src/core/service/config.service.ts");
/* harmony import */ var src_default_shared_components_products_carousel_product_dialog_product_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/default/shared/components/products-carousel/product-dialog/product-dialog.component */ "./src/default/shared/components/products-carousel/product-dialog/product-dialog.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};







var AdvertismentProductComponent = /** @class */ (function () {
    function AdvertismentProductComponent(activatedRoute, dialog, snackBar, router, listSandbox, configService, changeDetectRef, platformId) {
        var _this = this;
        this.activatedRoute = activatedRoute;
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.router = router;
        this.listSandbox = listSandbox;
        this.configService = configService;
        this.changeDetectRef = changeDetectRef;
        this.platformId = platformId;
        // side nav
        this.sidenavOpen = true;
        // card view
        this.viewType = 'grid';
        this.viewCol = 25;
        this.sortData = 'Price Low To High';
        // parameters for product list
        this.startKey = 0;
        this.viewOrder = 'ASC';
        this.keyword = '';
        this.categoryId = '';
        this.brand = '';
        this.priceFrom = '';
        this.priceTo = '';
        // pagination
        this.pagesize = 4;
        this.index = 0;
        // product list
        this.isClicked = [];
        // discount price
        this.discountPrice = 20;
        this.fiftyPercent = 50;
        this.subscription = [];
        // subscribe route params
        this.subscription.push(this.activatedRoute.queryParams.subscribe(function (query) {
            if (query['keyword']) {
                _this.keyword = query['keyword'];
                if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["isPlatformBrowser"])(_this.platformId)) {
                    localStorage.setItem('keywordData', query['keyword']);
                    _this.keyword = localStorage.getItem('keywordData');
                }
                _this.getProductList(_this.startKey, _this.viewOrder, _this.categoryId);
            }
            if (query['brand']) {
                _this.brand = query['brand'];
                _this.getProductList(_this.startKey, _this.viewOrder, _this.categoryId);
            }
        }));
        this.subscription.push(this.activatedRoute.params.subscribe(function (param) {
            _this.queryParams = param;
            // if route params contains id assign id to the parameter categoryId
            if (_this.queryParams.id) {
                if (_this.queryParams.id === 'All' && !_this.brand) {
                    _this.isClicked = [];
                    _this.brand = '';
                    _this.keyword = '';
                    _this.categoryId = '';
                    _this.getProductList(_this.startKey, _this.viewOrder, _this.categoryId);
                }
                else {
                    _this.isClicked = [];
                    _this.isClicked[_this.queryParams.id] = true;
                    _this.categoryId = _this.queryParams.id;
                    _this.getProductList(_this.startKey, _this.viewOrder, _this.categoryId);
                }
            }
        }));
    }
    // initially remove local storage and calls listSandbox getSettings
    AdvertismentProductComponent.prototype.ngOnInit = function () {
        if (!this.queryParams.id && this.keyword === '') {
            this.getProductList(this.startKey, this.viewOrder, this.categoryId);
        }
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["isPlatformBrowser"])(this.platformId)) {
            localStorage.removeItem('fromPrice');
            localStorage.removeItem('priceTo');
        }
        // this.listSandbox.getSettings();
        this.sortings = [
            { order: 'Price Low To High', value: 'ASC' },
            { order: 'Price High To Low', value: 'DESC' }
        ];
        // this.imagePath = this.configService.get('resize').imageUrl;
        this.imagePath = this.configService.getImageUrl();
        this.changeDetectRef.detectChanges();
        if (window.innerWidth < 960) {
            this.sidenavOpen = false;
        }
        if (window.innerWidth < 1280) {
            this.viewCol = 33.3;
        }
    };
    /**
     * fetch product list from service. calling getProductList function from sandbox
     *
     * @param limit number of records to be load
     * @param offset startkey of the records to be load
     * @param manufacturerId brand id to be filtered
     * @param categoryId category id to be filtered
     * @param price price to be filtered
     * @param priceFrom filter (from price)
     * @param keyword filter (to price)
     */
    AdvertismentProductComponent.prototype.getProductList = function (offset, price, category) {
        var params = {};
        params.limit = this.pagesize;
        params.offset = offset;
        if (this.brand == null) {
            this.brand = '';
        }
        params.manufacturerId = this.brand;
        params.categoryId = this.categoryId;
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["isPlatformBrowser"])(this.platformId)) {
            localStorage.setItem('categoryIdDataKey', this.categoryId);
        }
        params.keyword = this.keyword;
        params.price = price;
        if (this.priceFrom) {
            params.priceFrom = this.priceFrom;
        }
        else {
            params.priceFrom = 0;
        }
        if (this.condition) {
            params.condition = this.condition;
        }
        params.priceTo = this.priceTo;
        this.listSandbox.getProductList(params);
        params.price = '';
        params.count = true;
        this.listSandbox.getProductCount(params);
    };
    /**
     * open quick view of the product
     *
     * @param data passing selected product detail to dialog
     */
    AdvertismentProductComponent.prototype.openProductDialog = function (product) {
        var _this = this;
        var dialogRef = this.dialog.open(src_default_shared_components_products_carousel_product_dialog_product_dialog_component__WEBPACK_IMPORTED_MODULE_6__["ProductDialogComponent"], {
            panelClass: 'product-dialog',
            data: product
        });
        dialogRef.afterClosed().subscribe(function (products) {
            if (products) {
                _this.router.navigate(['/products/productdetails', products.productId]);
            }
        });
    };
    // sidebar open close based on the window size
    AdvertismentProductComponent.prototype.onWindowResize = function () {
        window.innerWidth < 960
            ? (this.sidenavOpen = false)
            : (this.sidenavOpen = true);
        window.innerWidth < 1280 ? (this.viewCol = 33.3) : (this.viewCol = 25);
    };
    // changing the view type
    AdvertismentProductComponent.prototype.changeViewType = function (viewType, viewCol) {
        this.viewType = viewType;
        this.viewCol = viewCol;
    };
    // calls getProductList for sorting list
    AdvertismentProductComponent.prototype.changeSorting = function (sort) {
        this.sortData = sort.order;
        this.viewOrder = sort.value;
        this.getProductList(this.startKey, this.viewOrder, this.categoryId);
    };
    // calls getProductList for pagination
    AdvertismentProductComponent.prototype.onPageChange = function (event) {
        this.startKey = event.pageSize * event.pageIndex;
        this.pagesize = event.pageSize;
        this.index = event.pageIndex;
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["isPlatformBrowser"])(this.platformId)) {
            this.priceFrom = localStorage.getItem('fromPrice');
            this.priceTo = localStorage.getItem('priceTo');
        }
        if (this.priceTo == null) {
            this.priceTo = '';
        }
        this.getProductList(this.startKey, this.viewOrder, this.categoryId);
    };
    /**
     *  receive data which is emitted from the child component through event emitter,
     * set's local storage value(brandKey). And calls getProductList.
     *
     *  @param event from event  emitter.
     *
     *  **/
    AdvertismentProductComponent.prototype.receiveProgress = function (event) {
        this.priceFrom = '';
        this.brand = event.manufacturerId;
        // this.categoryId = event.categoryId;
        this.priceFrom = event.priceFrom;
        this.priceTo = event.priceTo;
        this.condition = event.condition;
        var defaultCallValue = this.viewOrder;
        this.categoryId = event.categoryId;
        this.getProductList(0, defaultCallValue, event.categoryId);
    };
    AdvertismentProductComponent.prototype.ngOnDestroy = function () {
        this.subscription.forEach(function (each) {
            each.unsubscribe();
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('sidenav'),
        __metadata("design:type", Object)
    ], AdvertismentProductComponent.prototype, "sidenav", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:resize'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], AdvertismentProductComponent.prototype, "onWindowResize", null);
    AdvertismentProductComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-advertisment-product',
            template: __webpack_require__(/*! ./advertisment-product.component.html */ "./src/default/pages/home/advertisment-product/advertisment-product.component.html"),
            styles: [__webpack_require__(/*! ./advertisment-product.component.scss */ "./src/default/pages/home/advertisment-product/advertisment-product.component.scss")]
        })
        // implements OnInit, OnDestroy, AfterViewInit
        ,
        __param(7, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"])),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            src_core_lists_lists_sandbox__WEBPACK_IMPORTED_MODULE_4__["ListsSandbox"],
            src_core_service_config_service__WEBPACK_IMPORTED_MODULE_5__["ConfigService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"],
            Object])
    ], AdvertismentProductComponent);
    return AdvertismentProductComponent;
}());



/***/ }),

/***/ "./src/default/pages/home/home.component.html":
/*!****************************************************!*\
  !*** ./src/default/pages/home/home.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-main-carousel></app-main-carousel>\r\n\r\n<div class=\"products-tabs featured-tabs\">\r\n    <mat-tab-group mat-stretch-tabs>\r\n        <mat-tab label=\"Most Popular and Trending\">\r\n            <app-trending-product></app-trending-product>\r\n        </mat-tab>\r\n    </mat-tab-group>\r\n</div>\r\n\r\n<div class=\"products-tabs featured-tabs\">\r\n    <mat-tab-group mat-stretch-tabs>\r\n        <mat-tab label=\"Dynamic Text Area\">\r\n            <app-advertisment-product></app-advertisment-product>\r\n        </mat-tab>\r\n    </mat-tab-group>\r\n</div>\r\n\r\n<div class=\"products-tabs featured-tabs\">\r\n    <mat-tab-group mat-stretch-tabs>\r\n        <mat-tab label=\"Dynamic Text Area\">\r\n            <app-advertisment-product></app-advertisment-product>\r\n        </mat-tab>\r\n    </mat-tab-group>\r\n</div>\r\n\r\n<div class=\"products-tabs featured-tabs\">\r\n    <mat-tab-group mat-stretch-tabs>\r\n        <mat-tab label=\"Dynamic Text Area\">\r\n            <app-advertisment-product></app-advertisment-product>\r\n        </mat-tab>\r\n    </mat-tab-group>\r\n</div>\r\n\r\n<div class=\"products-tabs featured-tabs\">\r\n    <mat-tab-group mat-stretch-tabs>\r\n        <mat-tab label=\"Dynamic Text Area\">\r\n            <app-advertisment-product></app-advertisment-product>\r\n        </mat-tab>\r\n    </mat-tab-group>\r\n</div>\r\n\r\n<div class=\"products-tabs featured-tabs\">\r\n    <mat-tab-group mat-stretch-tabs>\r\n        <mat-tab label=\"Dynamic Text Area\">\r\n            <app-advertisment-product></app-advertisment-product>\r\n        </mat-tab>\r\n    </mat-tab-group>\r\n</div>\r\n\r\n\r\n<!-- <div class=\"products-tabs featured-tabs\">\r\n    <mat-tab-group mat-stretch-tabs>\r\n        <mat-tab label=\"Today Deals\">\r\n            <app-products-carousel [products]=\"listSandbox.todayDealList$ | async\"></app-products-carousel>\r\n        </mat-tab>\r\n    </mat-tab-group>\r\n</div> -->\r\n\r\n<!-- <app-brands-carousel [brands]=\"listSandbox.manufacturer$ | async\"></app-brands-carousel> -->"

/***/ }),

/***/ "./src/default/pages/home/home.component.scss":
/*!****************************************************!*\
  !*** ./src/default/pages/home/home.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

<<<<<<< HEAD
module.exports = ".products-tabs {\n  margin-top: 30px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi93ZWJyb290L3B1YmxpY19odG1sL3dlYnNpdGVzL29kei9tYXJrZXRwbGFjZS9zdG9yZS9zcmMvZGVmYXVsdC9wYWdlcy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBZ0IsRUFDbkIiLCJmaWxlIjoic3JjL2RlZmF1bHQvcGFnZXMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2R1Y3RzLXRhYnN7XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4OyAgIFxyXG59Il19 */"
=======
module.exports = ".products-tabs {\n  margin-top: 30px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvdGVzdDAxL21hcmtldHBsYWNlL3N0b3JlL3NyYy9kZWZhdWx0L3BhZ2VzL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFnQixFQUNuQiIsImZpbGUiOiJzcmMvZGVmYXVsdC9wYWdlcy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZHVjdHMtdGFic3tcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7ICAgXHJcbn0iXX0= */"
>>>>>>> 85c5e2989e9bf20ec75f2c1837a5509a280d7faf

/***/ }),

/***/ "./src/default/pages/home/home.component.ts":
/*!**************************************************!*\
  !*** ./src/default/pages/home/home.component.ts ***!
  \**************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _core_lists_lists_sandbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/lists/lists.sandbox */ "./src/core/lists/lists.sandbox.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/*
 * spurtcommerce
 * www.spurtcommerce.com
 *
 * Copyright (c) 2022 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */



var HomeComponent = /** @class */ (function () {
    function HomeComponent(listSandbox, platformId) {
        this.listSandbox = listSandbox;
        this.platformId = platformId;
    }
    // Initially calls getBannerList,getBransList
    HomeComponent.prototype.ngOnInit = function () {
        this.getBannerList();
        this.getBransList();
        this.getTodayDealList();
        this.listSandbox.getSettings();
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(this.platformId)) {
            localStorage.removeItem('checkout');
        }
    };
    // fetch banner list from sandbox
    HomeComponent.prototype.getBannerList = function () {
        var params = {};
        params.limit = 100;
        params.offset = 0;
        this.listSandbox.getBannerList(params);
    };
    // fetch brand list from sandbox
    HomeComponent.prototype.getBransList = function () {
        var params = {};
        params.limit = 10;
        params.offset = 0;
        params.keyword = '';
        this.listSandbox.getManufacturerList(params);
    };
    // fetch getTodayDealList product list from sandbox
    HomeComponent.prototype.getTodayDealList = function () {
        var params = {};
        params.limit = 0;
        params.offset = 0;
        params.keyword = '';
        params.sku = '';
        // params.count = '';
        this.listSandbox.getTodayDealList(params);
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/default/pages/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/default/pages/home/home.component.scss")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"])),
        __metadata("design:paramtypes", [_core_lists_lists_sandbox__WEBPACK_IMPORTED_MODULE_2__["ListsSandbox"],
            Object])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/default/pages/home/home.module.ts":
/*!***********************************************!*\
  !*** ./src/default/pages/home/home.module.ts ***!
  \***********************************************/
/*! exports provided: routes, HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/default/shared/shared.module.ts");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home.component */ "./src/default/pages/home/home.component.ts");
/* harmony import */ var _shared_components_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/components/index */ "./src/default/shared/components/index.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _trending_product_trending_product_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./trending-product/trending-product.component */ "./src/default/pages/home/trending-product/trending-product.component.ts");
/* harmony import */ var _advertisment_product_advertisment_product_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./advertisment-product/advertisment-product.component */ "./src/default/pages/home/advertisment-product/advertisment-product.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/*
 * spurtcommerce
 * www.spurtcommerce.com
 *
 * Copyright (c) 2022 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */









var routes = [
    { path: '', component: _home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"], pathMatch: 'full' }
];
var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _shared_components_index__WEBPACK_IMPORTED_MODULE_5__["ComponentsModule"],
            ],
            declarations: [
                _home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
                _trending_product_trending_product_component__WEBPACK_IMPORTED_MODULE_7__["TrendingProductComponent"],
                _advertisment_product_advertisment_product_component__WEBPACK_IMPORTED_MODULE_8__["AdvertismentProductComponent"]
            ],
            providers: []
        })
    ], HomeModule);
    return HomeModule;
}());



/***/ }),

/***/ "./src/default/pages/home/trending-product/trending-product.component.html":
/*!*********************************************************************************!*\
  !*** ./src/default/pages/home/trending-product/trending-product.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"spinner-wrapper\">\n  <app-spinner></app-spinner>\n</div>\n\n<div class=\"content\">\n  <div fxLayout=\"row wrap\" fxLayoutGap=\"16px grid\">\n    <div fxFlex=\"25%\" fxFlex.xs=\"100%\" fxFlex.sm=\"33%\" *ngFor=\"let num of [1,2,3,4]\">\n      <mat-card class=\"mat-elevation-z4\">\n        <img mat-card-image src=\"../../../../assets/images/ms-row-img.png\">\n        <mat-card-content>\n          <p>\n            The Himalayas is a mountain range in Asia.\n          </p>\n        </mat-card-content>\n        <mat-card-actions>\n          <div class='prod-icon'>\n            <button mat-icon-button>\n              <mat-icon>favorite</mat-icon>\n            </button>\n            <button mat-icon-button matTooltip=\"Quick view\">\n              <mat-icon>remove_red_eye</mat-icon>\n            </button>\n            <button mat-icon-button matTooltip=\"Add to cart\">\n              <mat-icon>shopping_cart</mat-icon>\n            </button>\n            <span class=\"cart-lk\">\n              <a> Add to Cart </a>\n            </span>\n          </div>\n        </mat-card-actions>\n      </mat-card>\n    </div>\n  </div>\n</div> -->\n\n<mat-sidenav-container>\n  <mat-sidenav-content class=\"all-products\" ngClass.gt-sm=\"p-left\">\n    <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutAlign=\"space-between center\"\n      class=\"filter-row mat-elevation-z1 text-muted\">\n      <button *ngIf=\"!sidenavOpen\" mat-icon-button (click)=\"sidenav.toggle()\">\n        <mat-icon>more_vert</mat-icon>\n      </button>\n      <div>\n\n        <mat-menu #sortMenu=\"matMenu\" xPosition=\"before\" class=\"app-dropdown\" overlapTrigger=\"true\">\n          <span (mouseleave)=\"sortMenuTrigger.closeMenu()\">\n            <button mat-menu-item *ngFor=\"let sort of sortings\" (click)=\"changeSorting(sort)\">\n              <span>{{sort.order}}</span>\n            </button>\n          </span>\n        </mat-menu>\n      </div>\n    </div>\n    <div class=\"wrapper\" *ngIf=\"listSandbox.productLoading$ | async\">\n      <div class=\"overlay\">\n        <div class=\"spinner-wrapper\">\n          <app-spinner [isShow]=\"listSandbox.productLoading$ | async\"></app-spinner>\n        </div>\n      </div>\n    </div>\n    <div *ngIf=\"viewType == 'grid'\" fxLayout=\"row wrap\" class=\"products-wrapper\">\n\n      <div *ngFor=\"let product of (listSandbox.productlist$ | async)\" fxFlex=\"100\" [fxFlex.gt-sm]=\"viewCol\"\n        fxFlex.sm=\"50\" class=\"col\">\n        <mat-card class=\"product-item text-center card-hover\">\n          <a [routerLink]=\"['/products/productdetails', product.productId]\" class=\"image-link\">\n            <img *ngIf=\"product['Images'].defaultImage == 1\" style=\"height:200px\"\n              [src]=\"imagePath+ '?path=' + product['Images'].containerName + '&name=' + product['Images'].image + '&width=260&height=260'\"\n              onError=\"this.src='/assets/images/default_image.png';\">\n          </a>\n          <!-- <h4 class=\"category text-muted text-truncate \">{{product.metaTagTitle }}</h4> -->\n          <a [routerLink]=\"['/products/productdetails', product.productId]\" class=\"title text-truncate\">\n            {{product.name}}\n          </a>\n          <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"prices\">\n            <div fxLayout=\"column\" fxLayoutAlign=\"center start\">\n              <p class=\"new-price\">\n                $ {{product.price}}\n              </p>\n            </div>\n          </div>\n          <div class=\"divider mt-2\"></div>\n          <div class=\"icons\">\n            <app-controls [product]=\"product\" [type]=\"'all'\" (OpenProductDialog)=\"openProductDialog(product)\">\n            </app-controls>\n          </div>\n        </mat-card>\n      </div>\n    </div>\n\n  </mat-sidenav-content>\n</mat-sidenav-container>"

/***/ }),

/***/ "./src/default/pages/home/trending-product/trending-product.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/default/pages/home/trending-product/trending-product.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

<<<<<<< HEAD
module.exports = ".del {\n  color: grey; }\n\n.mediaIcons {\n  max-height: 65px; }\n\n.shareAlign {\n  margin-left: 60%; }\n\n::ng-deep.app.green .mat-checkbox-checkmark-path {\n  stroke: green !important; }\n\n.bannercursor {\n  cursor: pointer; }\n\n.mat-card.product-image {\n  padding: 6px;\n  text-align: center; }\n\n.mat-card.product-image button {\n    position: absolute;\n    top: 0;\n    right: 0;\n    z-index: 99; }\n\n.mat-card.product-image img {\n    max-width: 100%; }\n\n.supvalidation {\n  color: red; }\n\n.small-carousel {\n  margin-top: 8px; }\n\n.small-carousel .swiper-container {\n    padding: 2px; }\n\n.small-carousel .swiper-container .swiper-slide {\n      text-align: center; }\n\n.small-carousel .swiper-container .swiper-slide img {\n        cursor: pointer;\n        max-width: 100%;\n        height: 6vh; }\n\n.small-carousel .swiper-button-next.swiper-button-disabled,\n  .small-carousel .swiper-button-prev.swiper-button-disabled {\n    opacity: 0; }\n\n.small-carousel .swiper-button-prev {\n    left: -10px; }\n\n.small-carousel .swiper-button-next {\n    right: -10px; }\n\n.mat-card.zoom-viewer {\n  position: absolute;\n  display: none;\n  background-repeat: no-repeat;\n  padding: 8px;\n  z-index: 99; }\n\n.mt-16 {\n  margin-top: 16px; }\n\n.details button {\n  padding: 0;\n  min-width: 36px;\n  margin-left: 6px; }\n\n.mat-list.reviews .mat-list-item .mat-list-avatar.review-author {\n  width: 80px;\n  height: 80px; }\n\n.mat-list.reviews .mat-list-item .mat-line.text {\n  white-space: unset;\n  font-style: italic;\n  margin: 10px 0; }\n\n.full-desc {\n  padding: 30px 40px; }\n\n@media (min-width: 1280px) {\n  .mat-card.product-image img {\n    cursor: zoom-in;\n    cursor: url('zoom.svg') 10 10, zoom-in; } }\n\n.card-hover {\n  transition: all .25s ease; }\n\n.card-hover:hover {\n    transform: translateY(-4px) scale(1.05);\n    box-shadow: 0 14px 24px rgba(62, 57, 107, 0.1); }\n\n.fix-image {\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n.spinner-wrapper {\n  text-align: center; }\n\n.no-review {\n  text-align: center; }\n\n.big-carousel {\n  margin-top: 8px;\n  height: 300px; }\n\n.big-carousel .swiper-container {\n    padding: 2px;\n    height: 300px; }\n\n.big-carousel .swiper-container .swiper-wrapper {\n      height: 300px; }\n\n.big-carousel .swiper-container .swiper-wrapper .swiper-slide {\n        height: 300px;\n        text-align: center; }\n\n.big-carousel .swiper-container .swiper-wrapper .swiper-slide img {\n          cursor: pointer; }\n\n.big-carousel .swiper-container .swiper-wrapper .swiper-slide .changeColor {\n          box-shadow: 1px -1px 0px 3px #0000FF; }\n\n.big-carousel .swiper-button-next.swiper-button-disabled,\n  .big-carousel .swiper-button-prev.swiper-button-disabled {\n    opacity: 0; }\n\n.big-carousel .swiper-button-prev {\n    left: -10px; }\n\n.big-carousel .swiper-button-next {\n    right: -10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi93ZWJyb290L3B1YmxpY19odG1sL3dlYnNpdGVzL29kei9tYXJrZXRwbGFjZS9zdG9yZS9zcmMvZGVmYXVsdC9wYWdlcy9ob21lL3RyZW5kaW5nLXByb2R1Y3QvdHJlbmRpbmctcHJvZHVjdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQVcsRUFDZDs7QUFFRDtFQUNJLGlCQUFnQixFQUNuQjs7QUFFRDtFQUNJLGlCQUFnQixFQUNuQjs7QUFFRDtFQUNJLHlCQUF3QixFQUMzQjs7QUFRRDtFQUNJLGdCQUFlLEVBQ2xCOztBQUVEO0VBQ0ksYUFBWTtFQUNaLG1CQUFrQixFQVVyQjs7QUFaRDtJQUlRLG1CQUFrQjtJQUNsQixPQUFNO0lBQ04sU0FBUTtJQUNSLFlBQVcsRUFDZDs7QUFSTDtJQVVRLGdCQUFlLEVBQ2xCOztBQUdMO0VBQ0ksV0FBVSxFQUNiOztBQUVEO0VBQ0ksZ0JBQWUsRUEwQmxCOztBQTNCRDtJQUdRLGFBQVksRUFhZjs7QUFoQkw7TUFLWSxtQkFBa0IsRUFVckI7O0FBZlQ7UUFPZ0IsZ0JBQWU7UUFDZixnQkFBZTtRQUNmLFlBQVcsRUFDZDs7QUFWYjs7SUFtQlEsV0FBVSxFQUNiOztBQXBCTDtJQXNCUSxZQUFXLEVBQ2Q7O0FBdkJMO0lBeUJRLGFBQVksRUFDZjs7QUFHTDtFQUNJLG1CQUFrQjtFQUNsQixjQUFhO0VBQ2IsNkJBQTRCO0VBQzVCLGFBQVk7RUFDWixZQUFXLEVBQ2Q7O0FBRUQ7RUFDSSxpQkFBZ0IsRUFDbkI7O0FBRUQ7RUFDSSxXQUFVO0VBQ1YsZ0JBQWU7RUFDZixpQkFBZ0IsRUFDbkI7O0FBRUQ7RUFFUSxZQUFXO0VBQ1gsYUFBWSxFQUNmOztBQUpMO0VBTVEsbUJBQWtCO0VBQ2xCLG1CQUFrQjtFQUNsQixlQUFjLEVBQ2pCOztBQUdMO0VBQ0ksbUJBQWtCLEVBQ3JCOztBQUVEO0VBQ0k7SUFDSSxnQkFBZTtJQUNmLHVDQUF1RSxFQUMxRSxFQUFBOztBQUdMO0VBSUksMEJBQXlCLEVBVTVCOztBQWREO0lBVVEsd0NBQXVDO0lBRXZDLCtDQUE2QyxFQUNoRDs7QUFHTDtFQUNJLHFCQUFpQjtLQUFqQixrQkFBaUIsRUFHcEI7O0FBRUQ7RUFDSSxtQkFBa0IsRUFDckI7O0FBRUQ7RUFDSSxtQkFBa0IsRUFDckI7O0FBRUQ7RUFDSSxnQkFBZTtFQUNmLGNBQWEsRUErQmhCOztBQWpDRDtJQUlRLGFBQVk7SUFDWixjQUFhLEVBaUJoQjs7QUF0Qkw7TUFPWSxjQUFhLEVBY2hCOztBQXJCVDtRQVNnQixjQUFhO1FBQ2IsbUJBQWtCLEVBVXJCOztBQXBCYjtVQVlvQixnQkFBZSxFQUdsQjs7QUFmakI7VUFpQm9CLHFDQUFvQyxFQUV2Qzs7QUFuQmpCOztJQXlCUSxXQUFVLEVBQ2I7O0FBMUJMO0lBNEJRLFlBQVcsRUFDZDs7QUE3Qkw7SUErQlEsYUFBWSxFQUNmIiwiZmlsZSI6InNyYy9kZWZhdWx0L3BhZ2VzL2hvbWUvdHJlbmRpbmctcHJvZHVjdC90cmVuZGluZy1wcm9kdWN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRlbCB7XG4gICAgY29sb3I6IGdyZXk7XG59XG5cbi5tZWRpYUljb25zIHtcbiAgICBtYXgtaGVpZ2h0OiA2NXB4O1xufVxuXG4uc2hhcmVBbGlnbiB7XG4gICAgbWFyZ2luLWxlZnQ6IDYwJTtcbn1cblxuOjpuZy1kZWVwLmFwcC5ncmVlbiAubWF0LWNoZWNrYm94LWNoZWNrbWFyay1wYXRoIHtcbiAgICBzdHJva2U6IGdyZWVuICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcC5hcHAuZ3JlZW4gLm1hdC1tZW51LXBhbmVsIHtcbiAgICAvL21hcmdpbi1sZWZ0OiAzNSU7XG4gICAgLy9taW4td2lkdGg6IDkxcHggIWltcG9ydGFudDtcbiAgICAvL21heC13aWR0aDogMjQ2cHg7XG59XG5cbi5iYW5uZXJjdXJzb3Ige1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLm1hdC1jYXJkLnByb2R1Y3QtaW1hZ2Uge1xuICAgIHBhZGRpbmc6IDZweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYnV0dG9uIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICB6LWluZGV4OiA5OTtcbiAgICB9XG4gICAgaW1nIHtcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIH1cbn1cblxuLnN1cHZhbGlkYXRpb24ge1xuICAgIGNvbG9yOiByZWQ7XG59XG5cbi5zbWFsbC1jYXJvdXNlbCB7XG4gICAgbWFyZ2luLXRvcDogOHB4O1xuICAgIC5zd2lwZXItY29udGFpbmVyIHtcbiAgICAgICAgcGFkZGluZzogMnB4O1xuICAgICAgICAuc3dpcGVyLXNsaWRlIHtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDZ2aDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5jaGFuZ2VDb2xvciB7XG4gICAgICAgICAgICAgICAgLy8gYm94LXNoYWRvdzogMXB4IC0xcHggMHB4IDNweCAjMDAwMEZGO1xuICAgICAgICAgICAgICAgIC8vIGJveC1zaGFkb3c6IDVweCA3cHggOHB4ICMwMDAwRkY7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLnN3aXBlci1idXR0b24tbmV4dC5zd2lwZXItYnV0dG9uLWRpc2FibGVkLFxuICAgIC5zd2lwZXItYnV0dG9uLXByZXYuc3dpcGVyLWJ1dHRvbi1kaXNhYmxlZCB7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuICAgIC5zd2lwZXItYnV0dG9uLXByZXYge1xuICAgICAgICBsZWZ0OiAtMTBweDtcbiAgICB9XG4gICAgLnN3aXBlci1idXR0b24tbmV4dCB7XG4gICAgICAgIHJpZ2h0OiAtMTBweDtcbiAgICB9XG59XG5cbi5tYXQtY2FyZC56b29tLXZpZXdlciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBwYWRkaW5nOiA4cHg7XG4gICAgei1pbmRleDogOTk7XG59XG5cbi5tdC0xNiB7XG4gICAgbWFyZ2luLXRvcDogMTZweDtcbn1cblxuLmRldGFpbHMgYnV0dG9uIHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1pbi13aWR0aDogMzZweDtcbiAgICBtYXJnaW4tbGVmdDogNnB4O1xufVxuXG4ubWF0LWxpc3QucmV2aWV3cyB7XG4gICAgLm1hdC1saXN0LWl0ZW0gLm1hdC1saXN0LWF2YXRhci5yZXZpZXctYXV0aG9yIHtcbiAgICAgICAgd2lkdGg6IDgwcHg7XG4gICAgICAgIGhlaWdodDogODBweDtcbiAgICB9XG4gICAgLm1hdC1saXN0LWl0ZW0gLm1hdC1saW5lLnRleHQge1xuICAgICAgICB3aGl0ZS1zcGFjZTogdW5zZXQ7XG4gICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICAgICAgbWFyZ2luOiAxMHB4IDA7XG4gICAgfVxufVxuXG4uZnVsbC1kZXNjIHtcbiAgICBwYWRkaW5nOiAzMHB4IDQwcHg7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiAxMjgwcHgpIHtcbiAgICAubWF0LWNhcmQucHJvZHVjdC1pbWFnZSBpbWcge1xuICAgICAgICBjdXJzb3I6IHpvb20taW47XG4gICAgICAgIGN1cnNvcjogdXJsKCcuLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL290aGVycy96b29tLnN2ZycpIDEwIDEwLCB6b29tLWluO1xuICAgIH1cbn1cblxuLmNhcmQtaG92ZXIge1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIC4yNXMgZWFzZTtcbiAgICAtby10cmFuc2l0aW9uOiBhbGwgLjI1cyBlYXNlO1xuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIC4yNXMgZWFzZTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjI1cyBlYXNlO1xuICAgICY6aG92ZXIge1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNHB4KSBzY2FsZSgxLjAxKTtcbiAgICAgICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTRweCkgc2NhbGUoMS4wMSk7XG4gICAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTRweCkgc2NhbGUoMS4wMSk7XG4gICAgICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNHB4KSBzY2FsZSgxLjAxKTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC00cHgpIHNjYWxlKDEuMDUpO1xuICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMTRweCAyNHB4IHJnYmEoNjIsIDU3LCAxMDcsIC4xKTtcbiAgICAgICAgYm94LXNoYWRvdzogMCAxNHB4IDI0cHggcmdiYSg2MiwgNTcsIDEwNywgLjEpO1xuICAgIH1cbn1cblxuLmZpeC1pbWFnZSB7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgLy93aWR0aDogNDQycHg7XG4gICAgLy9oZWlnaHQ6IDQwMHB4O1xufVxuXG4uc3Bpbm5lci13cmFwcGVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5uby1yZXZpZXcge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmJpZy1jYXJvdXNlbCB7XG4gICAgbWFyZ2luLXRvcDogOHB4O1xuICAgIGhlaWdodDogMzAwcHg7XG4gICAgLnN3aXBlci1jb250YWluZXIge1xuICAgICAgICBwYWRkaW5nOiAycHg7XG4gICAgICAgIGhlaWdodDogMzAwcHg7XG4gICAgICAgIC5zd2lwZXItd3JhcHBlciB7XG4gICAgICAgICAgICBoZWlnaHQ6IDMwMHB4O1xuICAgICAgICAgICAgLnN3aXBlci1zbGlkZSB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzMDBweDtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgICAgICAvLyBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIC8vIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmNoYW5nZUNvbG9yIHtcbiAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMXB4IC0xcHggMHB4IDNweCAjMDAwMEZGO1xuICAgICAgICAgICAgICAgICAgICAvLyBib3gtc2hhZG93OiA1cHggN3B4IDhweCAjMDAwMEZGO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAuc3dpcGVyLWJ1dHRvbi1uZXh0LnN3aXBlci1idXR0b24tZGlzYWJsZWQsXG4gICAgLnN3aXBlci1idXR0b24tcHJldi5zd2lwZXItYnV0dG9uLWRpc2FibGVkIHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG4gICAgLnN3aXBlci1idXR0b24tcHJldiB7XG4gICAgICAgIGxlZnQ6IC0xMHB4O1xuICAgIH1cbiAgICAuc3dpcGVyLWJ1dHRvbi1uZXh0IHtcbiAgICAgICAgcmlnaHQ6IC0xMHB4O1xuICAgIH1cbn0iXX0= */"
=======
module.exports = ".del {\n  color: grey; }\n\n.mediaIcons {\n  max-height: 65px; }\n\n.shareAlign {\n  margin-left: 60%; }\n\n::ng-deep.app.green .mat-checkbox-checkmark-path {\n  stroke: green !important; }\n\n.bannercursor {\n  cursor: pointer; }\n\n.mat-card.product-image {\n  padding: 6px;\n  text-align: center; }\n\n.mat-card.product-image button {\n    position: absolute;\n    top: 0;\n    right: 0;\n    z-index: 99; }\n\n.mat-card.product-image img {\n    max-width: 100%; }\n\n.supvalidation {\n  color: red; }\n\n.small-carousel {\n  margin-top: 8px; }\n\n.small-carousel .swiper-container {\n    padding: 2px; }\n\n.small-carousel .swiper-container .swiper-slide {\n      text-align: center; }\n\n.small-carousel .swiper-container .swiper-slide img {\n        cursor: pointer;\n        max-width: 100%;\n        height: 6vh; }\n\n.small-carousel .swiper-button-next.swiper-button-disabled,\n  .small-carousel .swiper-button-prev.swiper-button-disabled {\n    opacity: 0; }\n\n.small-carousel .swiper-button-prev {\n    left: -10px; }\n\n.small-carousel .swiper-button-next {\n    right: -10px; }\n\n.mat-card.zoom-viewer {\n  position: absolute;\n  display: none;\n  background-repeat: no-repeat;\n  padding: 8px;\n  z-index: 99; }\n\n.mt-16 {\n  margin-top: 16px; }\n\n.details button {\n  padding: 0;\n  min-width: 36px;\n  margin-left: 6px; }\n\n.mat-list.reviews .mat-list-item .mat-list-avatar.review-author {\n  width: 80px;\n  height: 80px; }\n\n.mat-list.reviews .mat-list-item .mat-line.text {\n  white-space: unset;\n  font-style: italic;\n  margin: 10px 0; }\n\n.full-desc {\n  padding: 30px 40px; }\n\n@media (min-width: 1280px) {\n  .mat-card.product-image img {\n    cursor: zoom-in;\n    cursor: url('zoom.svg') 10 10, zoom-in; } }\n\n.card-hover {\n  transition: all .25s ease; }\n\n.card-hover:hover {\n    transform: translateY(-4px) scale(1.05);\n    box-shadow: 0 14px 24px rgba(62, 57, 107, 0.1); }\n\n.fix-image {\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n.spinner-wrapper {\n  text-align: center; }\n\n.no-review {\n  text-align: center; }\n\n.big-carousel {\n  margin-top: 8px;\n  height: 300px; }\n\n.big-carousel .swiper-container {\n    padding: 2px;\n    height: 300px; }\n\n.big-carousel .swiper-container .swiper-wrapper {\n      height: 300px; }\n\n.big-carousel .swiper-container .swiper-wrapper .swiper-slide {\n        height: 300px;\n        text-align: center; }\n\n.big-carousel .swiper-container .swiper-wrapper .swiper-slide img {\n          cursor: pointer; }\n\n.big-carousel .swiper-container .swiper-wrapper .swiper-slide .changeColor {\n          box-shadow: 1px -1px 0px 3px #0000FF; }\n\n.big-carousel .swiper-button-next.swiper-button-disabled,\n  .big-carousel .swiper-button-prev.swiper-button-disabled {\n    opacity: 0; }\n\n.big-carousel .swiper-button-prev {\n    left: -10px; }\n\n.big-carousel .swiper-button-next {\n    right: -10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvdGVzdDAxL21hcmtldHBsYWNlL3N0b3JlL3NyYy9kZWZhdWx0L3BhZ2VzL2hvbWUvdHJlbmRpbmctcHJvZHVjdC90cmVuZGluZy1wcm9kdWN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBVyxFQUNkOztBQUVEO0VBQ0ksaUJBQWdCLEVBQ25COztBQUVEO0VBQ0ksaUJBQWdCLEVBQ25COztBQUVEO0VBQ0kseUJBQXdCLEVBQzNCOztBQVFEO0VBQ0ksZ0JBQWUsRUFDbEI7O0FBRUQ7RUFDSSxhQUFZO0VBQ1osbUJBQWtCLEVBVXJCOztBQVpEO0lBSVEsbUJBQWtCO0lBQ2xCLE9BQU07SUFDTixTQUFRO0lBQ1IsWUFBVyxFQUNkOztBQVJMO0lBVVEsZ0JBQWUsRUFDbEI7O0FBR0w7RUFDSSxXQUFVLEVBQ2I7O0FBRUQ7RUFDSSxnQkFBZSxFQTBCbEI7O0FBM0JEO0lBR1EsYUFBWSxFQWFmOztBQWhCTDtNQUtZLG1CQUFrQixFQVVyQjs7QUFmVDtRQU9nQixnQkFBZTtRQUNmLGdCQUFlO1FBQ2YsWUFBVyxFQUNkOztBQVZiOztJQW1CUSxXQUFVLEVBQ2I7O0FBcEJMO0lBc0JRLFlBQVcsRUFDZDs7QUF2Qkw7SUF5QlEsYUFBWSxFQUNmOztBQUdMO0VBQ0ksbUJBQWtCO0VBQ2xCLGNBQWE7RUFDYiw2QkFBNEI7RUFDNUIsYUFBWTtFQUNaLFlBQVcsRUFDZDs7QUFFRDtFQUNJLGlCQUFnQixFQUNuQjs7QUFFRDtFQUNJLFdBQVU7RUFDVixnQkFBZTtFQUNmLGlCQUFnQixFQUNuQjs7QUFFRDtFQUVRLFlBQVc7RUFDWCxhQUFZLEVBQ2Y7O0FBSkw7RUFNUSxtQkFBa0I7RUFDbEIsbUJBQWtCO0VBQ2xCLGVBQWMsRUFDakI7O0FBR0w7RUFDSSxtQkFBa0IsRUFDckI7O0FBRUQ7RUFDSTtJQUNJLGdCQUFlO0lBQ2YsdUNBQXVFLEVBQzFFLEVBQUE7O0FBR0w7RUFJSSwwQkFBeUIsRUFVNUI7O0FBZEQ7SUFVUSx3Q0FBdUM7SUFFdkMsK0NBQTZDLEVBQ2hEOztBQUdMO0VBQ0kscUJBQWlCO0tBQWpCLGtCQUFpQixFQUdwQjs7QUFFRDtFQUNJLG1CQUFrQixFQUNyQjs7QUFFRDtFQUNJLG1CQUFrQixFQUNyQjs7QUFFRDtFQUNJLGdCQUFlO0VBQ2YsY0FBYSxFQStCaEI7O0FBakNEO0lBSVEsYUFBWTtJQUNaLGNBQWEsRUFpQmhCOztBQXRCTDtNQU9ZLGNBQWEsRUFjaEI7O0FBckJUO1FBU2dCLGNBQWE7UUFDYixtQkFBa0IsRUFVckI7O0FBcEJiO1VBWW9CLGdCQUFlLEVBR2xCOztBQWZqQjtVQWlCb0IscUNBQW9DLEVBRXZDOztBQW5CakI7O0lBeUJRLFdBQVUsRUFDYjs7QUExQkw7SUE0QlEsWUFBVyxFQUNkOztBQTdCTDtJQStCUSxhQUFZLEVBQ2YiLCJmaWxlIjoic3JjL2RlZmF1bHQvcGFnZXMvaG9tZS90cmVuZGluZy1wcm9kdWN0L3RyZW5kaW5nLXByb2R1Y3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGVsIHtcbiAgICBjb2xvcjogZ3JleTtcbn1cblxuLm1lZGlhSWNvbnMge1xuICAgIG1heC1oZWlnaHQ6IDY1cHg7XG59XG5cbi5zaGFyZUFsaWduIHtcbiAgICBtYXJnaW4tbGVmdDogNjAlO1xufVxuXG46Om5nLWRlZXAuYXBwLmdyZWVuIC5tYXQtY2hlY2tib3gtY2hlY2ttYXJrLXBhdGgge1xuICAgIHN0cm9rZTogZ3JlZW4gIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwLmFwcC5ncmVlbiAubWF0LW1lbnUtcGFuZWwge1xuICAgIC8vbWFyZ2luLWxlZnQ6IDM1JTtcbiAgICAvL21pbi13aWR0aDogOTFweCAhaW1wb3J0YW50O1xuICAgIC8vbWF4LXdpZHRoOiAyNDZweDtcbn1cblxuLmJhbm5lcmN1cnNvciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubWF0LWNhcmQucHJvZHVjdC1pbWFnZSB7XG4gICAgcGFkZGluZzogNnB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBidXR0b24ge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIHotaW5kZXg6IDk5O1xuICAgIH1cbiAgICBpbWcge1xuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgfVxufVxuXG4uc3VwdmFsaWRhdGlvbiB7XG4gICAgY29sb3I6IHJlZDtcbn1cblxuLnNtYWxsLWNhcm91c2VsIHtcbiAgICBtYXJnaW4tdG9wOiA4cHg7XG4gICAgLnN3aXBlci1jb250YWluZXIge1xuICAgICAgICBwYWRkaW5nOiAycHg7XG4gICAgICAgIC5zd2lwZXItc2xpZGUge1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIGhlaWdodDogNnZoO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmNoYW5nZUNvbG9yIHtcbiAgICAgICAgICAgICAgICAvLyBib3gtc2hhZG93OiAxcHggLTFweCAwcHggM3B4ICMwMDAwRkY7XG4gICAgICAgICAgICAgICAgLy8gYm94LXNoYWRvdzogNXB4IDdweCA4cHggIzAwMDBGRjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAuc3dpcGVyLWJ1dHRvbi1uZXh0LnN3aXBlci1idXR0b24tZGlzYWJsZWQsXG4gICAgLnN3aXBlci1idXR0b24tcHJldi5zd2lwZXItYnV0dG9uLWRpc2FibGVkIHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG4gICAgLnN3aXBlci1idXR0b24tcHJldiB7XG4gICAgICAgIGxlZnQ6IC0xMHB4O1xuICAgIH1cbiAgICAuc3dpcGVyLWJ1dHRvbi1uZXh0IHtcbiAgICAgICAgcmlnaHQ6IC0xMHB4O1xuICAgIH1cbn1cblxuLm1hdC1jYXJkLnpvb20tdmlld2VyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIHBhZGRpbmc6IDhweDtcbiAgICB6LWluZGV4OiA5OTtcbn1cblxuLm10LTE2IHtcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xufVxuXG4uZGV0YWlscyBidXR0b24ge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWluLXdpZHRoOiAzNnB4O1xuICAgIG1hcmdpbi1sZWZ0OiA2cHg7XG59XG5cbi5tYXQtbGlzdC5yZXZpZXdzIHtcbiAgICAubWF0LWxpc3QtaXRlbSAubWF0LWxpc3QtYXZhdGFyLnJldmlldy1hdXRob3Ige1xuICAgICAgICB3aWR0aDogODBweDtcbiAgICAgICAgaGVpZ2h0OiA4MHB4O1xuICAgIH1cbiAgICAubWF0LWxpc3QtaXRlbSAubWF0LWxpbmUudGV4dCB7XG4gICAgICAgIHdoaXRlLXNwYWNlOiB1bnNldDtcbiAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgICAgICBtYXJnaW46IDEwcHggMDtcbiAgICB9XG59XG5cbi5mdWxsLWRlc2Mge1xuICAgIHBhZGRpbmc6IDMwcHggNDBweDtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDEyODBweCkge1xuICAgIC5tYXQtY2FyZC5wcm9kdWN0LWltYWdlIGltZyB7XG4gICAgICAgIGN1cnNvcjogem9vbS1pbjtcbiAgICAgICAgY3Vyc29yOiB1cmwoJy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvb3RoZXJzL3pvb20uc3ZnJykgMTAgMTAsIHpvb20taW47XG4gICAgfVxufVxuXG4uY2FyZC1ob3ZlciB7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgLjI1cyBlYXNlO1xuICAgIC1vLXRyYW5zaXRpb246IGFsbCAuMjVzIGVhc2U7XG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgLjI1cyBlYXNlO1xuICAgIHRyYW5zaXRpb246IGFsbCAuMjVzIGVhc2U7XG4gICAgJjpob3ZlciB7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC00cHgpIHNjYWxlKDEuMDEpO1xuICAgICAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNHB4KSBzY2FsZSgxLjAxKTtcbiAgICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNHB4KSBzY2FsZSgxLjAxKTtcbiAgICAgICAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC00cHgpIHNjYWxlKDEuMDEpO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTRweCkgc2NhbGUoMS4wNSk7XG4gICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAxNHB4IDI0cHggcmdiYSg2MiwgNTcsIDEwNywgLjEpO1xuICAgICAgICBib3gtc2hhZG93OiAwIDE0cHggMjRweCByZ2JhKDYyLCA1NywgMTA3LCAuMSk7XG4gICAgfVxufVxuXG4uZml4LWltYWdlIHtcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAvL3dpZHRoOiA0NDJweDtcbiAgICAvL2hlaWdodDogNDAwcHg7XG59XG5cbi5zcGlubmVyLXdyYXBwZXIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLm5vLXJldmlldyB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uYmlnLWNhcm91c2VsIHtcbiAgICBtYXJnaW4tdG9wOiA4cHg7XG4gICAgaGVpZ2h0OiAzMDBweDtcbiAgICAuc3dpcGVyLWNvbnRhaW5lciB7XG4gICAgICAgIHBhZGRpbmc6IDJweDtcbiAgICAgICAgaGVpZ2h0OiAzMDBweDtcbiAgICAgICAgLnN3aXBlci13cmFwcGVyIHtcbiAgICAgICAgICAgIGhlaWdodDogMzAwcHg7XG4gICAgICAgICAgICAuc3dpcGVyLXNsaWRlIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwMHB4O1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIC8vIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgLy8gaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuY2hhbmdlQ29sb3Ige1xuICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAxcHggLTFweCAwcHggM3B4ICMwMDAwRkY7XG4gICAgICAgICAgICAgICAgICAgIC8vIGJveC1zaGFkb3c6IDVweCA3cHggOHB4ICMwMDAwRkY7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC5zd2lwZXItYnV0dG9uLW5leHQuc3dpcGVyLWJ1dHRvbi1kaXNhYmxlZCxcbiAgICAuc3dpcGVyLWJ1dHRvbi1wcmV2LnN3aXBlci1idXR0b24tZGlzYWJsZWQge1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgIH1cbiAgICAuc3dpcGVyLWJ1dHRvbi1wcmV2IHtcbiAgICAgICAgbGVmdDogLTEwcHg7XG4gICAgfVxuICAgIC5zd2lwZXItYnV0dG9uLW5leHQge1xuICAgICAgICByaWdodDogLTEwcHg7XG4gICAgfVxufSJdfQ== */"
>>>>>>> 85c5e2989e9bf20ec75f2c1837a5509a280d7faf

/***/ }),

/***/ "./src/default/pages/home/trending-product/trending-product.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/default/pages/home/trending-product/trending-product.component.ts ***!
  \*******************************************************************************/
/*! exports provided: TrendingProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrendingProductComponent", function() { return TrendingProductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var src_core_lists_lists_sandbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/core/lists/lists.sandbox */ "./src/core/lists/lists.sandbox.ts");
/* harmony import */ var src_core_service_config_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/core/service/config.service */ "./src/core/service/config.service.ts");
/* harmony import */ var src_default_shared_components_products_carousel_product_dialog_product_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/default/shared/components/products-carousel/product-dialog/product-dialog.component */ "./src/default/shared/components/products-carousel/product-dialog/product-dialog.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};







var TrendingProductComponent = /** @class */ (function () {
    function TrendingProductComponent(activatedRoute, dialog, snackBar, router, listSandbox, configService, changeDetectRef, platformId) {
        var _this = this;
        this.activatedRoute = activatedRoute;
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.router = router;
        this.listSandbox = listSandbox;
        this.configService = configService;
        this.changeDetectRef = changeDetectRef;
        this.platformId = platformId;
        // side nav
        this.sidenavOpen = true;
        // card view
        this.viewType = 'grid';
        this.viewCol = 25;
        this.sortData = 'Price Low To High';
        // parameters for product list
        this.startKey = 0;
        this.viewOrder = 'ASC';
        this.keyword = '';
        this.categoryId = '';
        this.brand = '';
        this.priceFrom = '';
        this.priceTo = '';
        // pagination
        this.pagesize = 4;
        this.index = 0;
        // product list
        this.isClicked = [];
        // discount price
        this.discountPrice = 20;
        this.fiftyPercent = 50;
        this.subscription = [];
        // subscribe route params
        this.subscription.push(this.activatedRoute.queryParams.subscribe(function (query) {
            if (query['keyword']) {
                _this.keyword = query['keyword'];
                if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["isPlatformBrowser"])(_this.platformId)) {
                    localStorage.setItem('keywordData', query['keyword']);
                    _this.keyword = localStorage.getItem('keywordData');
                }
                _this.getProductList(_this.startKey, _this.viewOrder, _this.categoryId);
            }
            if (query['brand']) {
                _this.brand = query['brand'];
                _this.getProductList(_this.startKey, _this.viewOrder, _this.categoryId);
            }
        }));
        this.subscription.push(this.activatedRoute.params.subscribe(function (param) {
            _this.queryParams = param;
            // if route params contains id assign id to the parameter categoryId
            if (_this.queryParams.id) {
                if (_this.queryParams.id === 'All' && !_this.brand) {
                    _this.isClicked = [];
                    _this.brand = '';
                    _this.keyword = '';
                    _this.categoryId = '';
                    _this.getProductList(_this.startKey, _this.viewOrder, _this.categoryId);
                }
                else {
                    _this.isClicked = [];
                    _this.isClicked[_this.queryParams.id] = true;
                    _this.categoryId = _this.queryParams.id;
                    _this.getProductList(_this.startKey, _this.viewOrder, _this.categoryId);
                }
            }
        }));
    }
    // initially remove local storage and calls listSandbox getSettings
    TrendingProductComponent.prototype.ngOnInit = function () {
        if (!this.queryParams.id && this.keyword === '') {
            this.getProductList(this.startKey, this.viewOrder, this.categoryId);
        }
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["isPlatformBrowser"])(this.platformId)) {
            localStorage.removeItem('fromPrice');
            localStorage.removeItem('priceTo');
        }
        // this.listSandbox.getSettings();
        this.sortings = [
            { order: 'Price Low To High', value: 'ASC' },
            { order: 'Price High To Low', value: 'DESC' }
        ];
        // this.imagePath = this.configService.get('resize').imageUrl;
        this.imagePath = this.configService.getImageUrl();
        this.changeDetectRef.detectChanges();
        if (window.innerWidth < 960) {
            this.sidenavOpen = false;
        }
        if (window.innerWidth < 1280) {
            this.viewCol = 33.3;
        }
    };
    /**
     * fetch product list from service. calling getProductList function from sandbox
     *
     * @param limit number of records to be load
     * @param offset startkey of the records to be load
     * @param manufacturerId brand id to be filtered
     * @param categoryId category id to be filtered
     * @param price price to be filtered
     * @param priceFrom filter (from price)
     * @param keyword filter (to price)
     */
    TrendingProductComponent.prototype.getProductList = function (offset, price, category) {
        var params = {};
        params.limit = this.pagesize;
        params.offset = offset;
        if (this.brand == null) {
            this.brand = '';
        }
        params.manufacturerId = this.brand;
        params.categoryId = this.categoryId;
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["isPlatformBrowser"])(this.platformId)) {
            localStorage.setItem('categoryIdDataKey', this.categoryId);
        }
        params.keyword = this.keyword;
        params.price = price;
        if (this.priceFrom) {
            params.priceFrom = this.priceFrom;
        }
        else {
            params.priceFrom = 0;
        }
        if (this.condition) {
            params.condition = this.condition;
        }
        params.priceTo = this.priceTo;
        this.listSandbox.getProductList(params);
        params.price = '';
        params.count = true;
        this.listSandbox.getProductCount(params);
    };
    /**
     * open quick view of the product
     *
     * @param data passing selected product detail to dialog
     */
    TrendingProductComponent.prototype.openProductDialog = function (product) {
        var _this = this;
        var dialogRef = this.dialog.open(src_default_shared_components_products_carousel_product_dialog_product_dialog_component__WEBPACK_IMPORTED_MODULE_6__["ProductDialogComponent"], {
            panelClass: 'product-dialog',
            data: product
        });
        dialogRef.afterClosed().subscribe(function (products) {
            if (products) {
                _this.router.navigate(['/products/productdetails', products.productId]);
            }
        });
    };
    // sidebar open close based on the window size
    TrendingProductComponent.prototype.onWindowResize = function () {
        window.innerWidth < 960
            ? (this.sidenavOpen = false)
            : (this.sidenavOpen = true);
        window.innerWidth < 1280 ? (this.viewCol = 33.3) : (this.viewCol = 25);
    };
    // changing the view type
    TrendingProductComponent.prototype.changeViewType = function (viewType, viewCol) {
        this.viewType = viewType;
        this.viewCol = viewCol;
    };
    // calls getProductList for sorting list
    TrendingProductComponent.prototype.changeSorting = function (sort) {
        this.sortData = sort.order;
        this.viewOrder = sort.value;
        this.getProductList(this.startKey, this.viewOrder, this.categoryId);
    };
    // calls getProductList for pagination
    TrendingProductComponent.prototype.onPageChange = function (event) {
        this.startKey = event.pageSize * event.pageIndex;
        this.pagesize = event.pageSize;
        this.index = event.pageIndex;
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["isPlatformBrowser"])(this.platformId)) {
            this.priceFrom = localStorage.getItem('fromPrice');
            this.priceTo = localStorage.getItem('priceTo');
        }
        if (this.priceTo == null) {
            this.priceTo = '';
        }
        this.getProductList(this.startKey, this.viewOrder, this.categoryId);
    };
    /**
     *  receive data which is emitted from the child component through event emitter,
     * set's local storage value(brandKey). And calls getProductList.
     *
     *  @param event from event  emitter.
     *
     *  **/
    TrendingProductComponent.prototype.receiveProgress = function (event) {
        this.priceFrom = '';
        this.brand = event.manufacturerId;
        // this.categoryId = event.categoryId;
        this.priceFrom = event.priceFrom;
        this.priceTo = event.priceTo;
        this.condition = event.condition;
        var defaultCallValue = this.viewOrder;
        this.categoryId = event.categoryId;
        this.getProductList(0, defaultCallValue, event.categoryId);
    };
    TrendingProductComponent.prototype.ngOnDestroy = function () {
        this.subscription.forEach(function (each) {
            each.unsubscribe();
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('sidenav'),
        __metadata("design:type", Object)
    ], TrendingProductComponent.prototype, "sidenav", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:resize'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], TrendingProductComponent.prototype, "onWindowResize", null);
    TrendingProductComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-trending-product',
            template: __webpack_require__(/*! ./trending-product.component.html */ "./src/default/pages/home/trending-product/trending-product.component.html"),
            styles: [__webpack_require__(/*! ./trending-product.component.scss */ "./src/default/pages/home/trending-product/trending-product.component.scss")]
        })
        // implements OnInit, OnDestroy, AfterViewInit
        ,
        __param(7, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"])),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            src_core_lists_lists_sandbox__WEBPACK_IMPORTED_MODULE_4__["ListsSandbox"],
            src_core_service_config_service__WEBPACK_IMPORTED_MODULE_5__["ConfigService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"],
            Object])
    ], TrendingProductComponent);
    return TrendingProductComponent;
}());



/***/ })

}]);
//# sourceMappingURL=pages-home-home-module.js.map