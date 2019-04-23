(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["About-About-module"],{

/***/ "./src/app/About/About.module.ts":
/*!***************************************!*\
  !*** ./src/app/About/About.module.ts ***!
  \***************************************/
/*! exports provided: AboutPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutPageModule", function() { return AboutPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _About_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./About.page */ "./src/app/About/About.page.ts");







var AboutPageModule = /** @class */ (function () {
    function AboutPageModule() {
    }
    AboutPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _About_page__WEBPACK_IMPORTED_MODULE_6__["AboutPage"] }])
            ],
            declarations: [_About_page__WEBPACK_IMPORTED_MODULE_6__["AboutPage"]]
        })
    ], AboutPageModule);
    return AboutPageModule;
}());



/***/ }),

/***/ "./src/app/About/About.page.html":
/*!***************************************!*\
  !*** ./src/app/About/About.page.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<ion-content>\r\n  <h2>Learn Spanish!</h2>\r\n      <p>In partnership with</p>\r\n      <br>\r\n      <img src=\"http://static1.squarespace.com/static/5797c4d703596ef92b31b06d/t/58334a08c534a53840aaf1b8/1541568813202/?format=1500w\"alt=\"Meantime Logo\">\r\n\r\n        <br>\r\n        <br>\r\n      \r\n        <h2>About the Project</h2>\r\n        <br>\r\n        As per the homepage, this application is designed to help beginners learn Spanish in a contextual setting.\r\n        This project has been brought to light by Doctor Ben Frey at the University of North Carolina at Chapel Hill.\r\n        It serves as a prototype for a future application that may be in Cherokee to help people learn languages in contextual settings as an alternative to classroom learning.\r\n        The prototype is in Spanish.  \r\n        <br>\r\n        <br>\r\n        In turn, we decided to use ordering coffee at the local on-campus coffee shop for contextual learning.\r\n        Students that use this application will be able to watch an example video, draw vocabulary, and insert their own vocabulary to order a coffee in Spanish.\r\n        This idea of contextual learning is intended to be used in other scenarios in the future.\r\n        <br>\r\n        <br>\r\n        All images and audio presented on this website are free to use under Creative Commons with the exception of the Meantime Coffee Logo.\r\n        The application is built on the Ionic platform.\r\n        <br>\r\n        <br>\r\n        Click below to return to the Homepage.\r\n        <br>\r\n\r\n        <ion-button shape=\"round\" color=\"medium\" size=\"large\" href=\"http://localhost:8100/tabs/Homepage\">Homepage</ion-button>\r\n        <br>\r\n\r\n        <br>\r\n        <br>\r\n        <a href=\"http://localhost:8100/tabs/Contact\">Contact us</a>        \r\n        <br>\r\n        <br>\r\n       \r\n        \r\n        \r\n        \r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/About/About.page.scss":
/*!***************************************!*\
  !*** ./src/app/About/About.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welcome-card ion-img {\n  max-height: 35vh;\n  overflow: scroll; }\n\ntable {\n  font-family: arial, sans-serif;\n  border-collapse: collapse;\n  width: 100%;\n  background-color: #c3b091; }\n\ntd {\n  border: 1px solid #000000;\n  text-align: center;\n  padding: 8px; }\n\ntr:nth-child(even) {\n  background-color: #989aa2; }\n\nh2 {\n  font-family: arial, sans-serif;\n  text-align: center;\n  background-color: #c3b091; }\n\nimg {\n  text-align: center;\n  background-color: #c3b091; }\n\np {\n  text-align: center;\n  background-color: #c3b091; }\n\nion-content {\n  --background: lightgoldenyellow;\n  background-color: #c3b091;\n  --color: white;\n  text-align: center;\n  font-family: arial, sans-serif; }\n\nbody {\n  background-color: #c3b091; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQWJvdXQvQzpcXFVzZXJzXFxtYXR0YmV6ZVxcRG9jdW1lbnRzXFxHaXRIdWJcXEZyZXlDaGVyb2tlZUFwcC9zcmNcXGFwcFxcQWJvdXRcXEFib3V0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFnQjtFQUNoQixnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSw4QkFBOEI7RUFDOUIseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCx5QkFBd0IsRUFBQTs7QUFHNUI7RUFDSSx5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLFlBQVksRUFBQTs7QUFHaEI7RUFDSSx5QkFBeUIsRUFBQTs7QUFHN0I7RUFDTSw4QkFBOEI7RUFDOUIsa0JBQWtCO0VBQ2xCLHlCQUF5QixFQUFBOztBQUcvQjtFQUNJLGtCQUFrQjtFQUNsQix5QkFBeUIsRUFBQTs7QUFHN0I7RUFDSSxrQkFBa0I7RUFDbEIseUJBQXlCLEVBQUE7O0FBRzdCO0VBQ0ksK0JBQWE7RUFDYix5QkFBeUI7RUFDekIsY0FBUTtFQUNSLGtCQUFrQjtFQUNsQiw4QkFBOEIsRUFBQTs7QUFHbEM7RUFDSSx5QkFBeUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL0Fib3V0L0Fib3V0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53ZWxjb21lLWNhcmQgaW9uLWltZyB7XHJcbiAgICBtYXgtaGVpZ2h0OiAzNXZoO1xyXG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcclxuICB9XHJcblxyXG50YWJsZSB7XHJcbiAgICBmb250LWZhbWlseTogYXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNjM2IwOTE7XHJcbiAgfVxyXG5cclxudGQge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzAwMDAwMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDhweDtcclxuICB9XHJcblxyXG50cjpudGgtY2hpbGQoZXZlbikge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzk4OWFhMjtcclxuICB9XHJcblxyXG5oMiB7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBhcmlhbCwgc2Fucy1zZXJpZjtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzNiMDkxO1xyXG4gIH1cclxuXHJcbmltZyB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzNiMDkxO1xyXG4gIH1cclxuXHJcbnAge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2MzYjA5MTtcclxuICB9XHJcblxyXG5pb24tY29udGVudCB7XHJcbiAgICAtLWJhY2tncm91bmQ6IGxpZ2h0Z29sZGVueWVsbG93O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2MzYjA5MTtcclxuICAgIC0tY29sb3I6IHdoaXRlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1mYW1pbHk6IGFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gICBcclxuICB9XHJcbmJvZHkge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2MzYjA5MTtcclxufVxyXG4gIFxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/About/About.page.ts":
/*!*************************************!*\
  !*** ./src/app/About/About.page.ts ***!
  \*************************************/
/*! exports provided: AboutPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutPage", function() { return AboutPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AboutPage = /** @class */ (function () {
    function AboutPage() {
    }
    AboutPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-About',
            template: __webpack_require__(/*! ./About.page.html */ "./src/app/About/About.page.html"),
            styles: [__webpack_require__(/*! ./About.page.scss */ "./src/app/About/About.page.scss")]
        })
    ], AboutPage);
    return AboutPage;
}());



/***/ })

}]);
//# sourceMappingURL=About-About-module.js.map