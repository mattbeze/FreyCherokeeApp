(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Rate-Rate-module"],{

/***/ "./src/app/Rate/Rate.module.ts":
/*!*************************************!*\
  !*** ./src/app/Rate/Rate.module.ts ***!
  \*************************************/
/*! exports provided: RatePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RatePageModule", function() { return RatePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _Rate_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Rate.page */ "./src/app/Rate/Rate.page.ts");







var RatePageModule = /** @class */ (function () {
    function RatePageModule() {
    }
    RatePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _Rate_page__WEBPACK_IMPORTED_MODULE_6__["RatePage"] }])
            ],
            declarations: [_Rate_page__WEBPACK_IMPORTED_MODULE_6__["RatePage"]]
        })
    ], RatePageModule);
    return RatePageModule;
}());



/***/ }),

/***/ "./src/app/Rate/Rate.page.html":
/*!*************************************!*\
  !*** ./src/app/Rate/Rate.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<ion-content>\r\n  <h2>Learn Spanish!</h2>\r\n      <p>In partnership with</p>\r\n      <br>\r\n      <img src=\"http://static1.squarespace.com/static/5797c4d703596ef92b31b06d/t/58334a08c534a53840aaf1b8/1541568813202/?format=1500w\"alt=\"Meantime Logo\">\r\n\r\n        <br>\r\n        <br>\r\n      \r\n        <h2>Rate your partner</h2>\r\n        <br>\r\n        Rating Explanations:\r\n        <br>\r\n        One Star: Poor\r\n        <br>\r\n        Two Stars: Decent\r\n        <br>\r\n        Three Stars: Average\r\n        <br>\r\n        Four Stars: Proficient\r\n        <br>\r\n        Five Stars: Excellent \r\n        <br>\r\n        <ion-button shape=\"round\" color=\"medium\" size=\"large\" href=\"http://localhost:8100/tabs/Homepage\">Homepage</ion-button>\r\n\r\n        \r\n        <br>\r\n        <br>\r\n        <a href=\"http://localhost:8100/tabs/Contact\">Contact us</a>  \r\n        <br>\r\n        <br> \r\n        <a href=\"http://localhost:8100/tabs/About\">About the Project</a>       \r\n        <br>\r\n        <br>\r\n       \r\n        \r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/Rate/Rate.page.scss":
/*!*************************************!*\
  !*** ./src/app/Rate/Rate.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welcome-card ion-img {\n  max-height: 35vh;\n  overflow: scroll; }\n\ntable {\n  font-family: arial, sans-serif;\n  border-collapse: collapse;\n  width: 100%;\n  background-color: #c3b091; }\n\ntd {\n  border: 1px solid #000000;\n  text-align: center;\n  padding: 8px; }\n\ntr:nth-child(even) {\n  background-color: #989aa2; }\n\nh2 {\n  font-family: arial, sans-serif;\n  text-align: center;\n  background-color: #c3b091; }\n\nimg {\n  text-align: center;\n  background-color: #c3b091; }\n\np {\n  text-align: center;\n  background-color: #c3b091; }\n\nion-content {\n  --background: lightgoldenyellow;\n  background-color: #c3b091;\n  --color: white;\n  text-align: center;\n  font-family: arial, sans-serif; }\n\nbody {\n  background-color: #c3b091; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvUmF0ZS9DOlxcVXNlcnNcXG1hdHRiZXplXFxEb2N1bWVudHNcXEdpdEh1YlxcRnJleUNoZXJva2VlQXBwL3NyY1xcYXBwXFxSYXRlXFxSYXRlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFnQjtFQUNoQixnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSw4QkFBOEI7RUFDOUIseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCx5QkFBd0IsRUFBQTs7QUFHNUI7RUFDSSx5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLFlBQVksRUFBQTs7QUFHaEI7RUFDSSx5QkFBeUIsRUFBQTs7QUFHN0I7RUFDTSw4QkFBOEI7RUFDOUIsa0JBQWtCO0VBQ2xCLHlCQUF5QixFQUFBOztBQUcvQjtFQUNJLGtCQUFrQjtFQUNsQix5QkFBeUIsRUFBQTs7QUFHN0I7RUFDSSxrQkFBa0I7RUFDbEIseUJBQXlCLEVBQUE7O0FBRzdCO0VBQ0ksK0JBQWE7RUFDYix5QkFBeUI7RUFDekIsY0FBUTtFQUNSLGtCQUFrQjtFQUNsQiw4QkFBOEIsRUFBQTs7QUFHbEM7RUFDSSx5QkFBeUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL1JhdGUvUmF0ZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud2VsY29tZS1jYXJkIGlvbi1pbWcge1xyXG4gICAgbWF4LWhlaWdodDogMzV2aDtcclxuICAgIG92ZXJmbG93OiBzY3JvbGw7XHJcbiAgfVxyXG5cclxudGFibGUge1xyXG4gICAgZm9udC1mYW1pbHk6IGFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojYzNiMDkxO1xyXG4gIH1cclxuXHJcbnRkIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDAwMDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiA4cHg7XHJcbiAgfVxyXG5cclxudHI6bnRoLWNoaWxkKGV2ZW4pIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5ODlhYTI7XHJcbiAgfVxyXG5cclxuaDIge1xyXG4gICAgICBmb250LWZhbWlseTogYXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2MzYjA5MTtcclxuICB9XHJcblxyXG5pbWcge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2MzYjA5MTtcclxuICB9XHJcblxyXG5wIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjM2IwOTE7XHJcbiAgfVxyXG5cclxuaW9uLWNvbnRlbnQge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiBsaWdodGdvbGRlbnllbGxvdztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjM2IwOTE7XHJcbiAgICAtLWNvbG9yOiB3aGl0ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtZmFtaWx5OiBhcmlhbCwgc2Fucy1zZXJpZjtcclxuICAgXHJcbiAgfVxyXG5ib2R5IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjM2IwOTE7XHJcbn1cclxuICBcclxuIl19 */"

/***/ }),

/***/ "./src/app/Rate/Rate.page.ts":
/*!***********************************!*\
  !*** ./src/app/Rate/Rate.page.ts ***!
  \***********************************/
/*! exports provided: RatePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RatePage", function() { return RatePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RatePage = /** @class */ (function () {
    function RatePage() {
    }
    RatePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-Rate',
            template: __webpack_require__(/*! ./Rate.page.html */ "./src/app/Rate/Rate.page.html"),
            styles: [__webpack_require__(/*! ./Rate.page.scss */ "./src/app/Rate/Rate.page.scss")]
        })
    ], RatePage);
    return RatePage;
}());



/***/ })

}]);
//# sourceMappingURL=Rate-Rate-module.js.map