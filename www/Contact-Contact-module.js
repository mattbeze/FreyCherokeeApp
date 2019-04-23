(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Contact-Contact-module"],{

/***/ "./src/app/Contact/Contact.module.ts":
/*!*******************************************!*\
  !*** ./src/app/Contact/Contact.module.ts ***!
  \*******************************************/
/*! exports provided: ContactPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactPageModule", function() { return ContactPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _Contact_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Contact.page */ "./src/app/Contact/Contact.page.ts");







var ContactPageModule = /** @class */ (function () {
    function ContactPageModule() {
    }
    ContactPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _Contact_page__WEBPACK_IMPORTED_MODULE_6__["ContactPage"] }])
            ],
            declarations: [_Contact_page__WEBPACK_IMPORTED_MODULE_6__["ContactPage"]]
        })
    ], ContactPageModule);
    return ContactPageModule;
}());



/***/ }),

/***/ "./src/app/Contact/Contact.page.html":
/*!*******************************************!*\
  !*** ./src/app/Contact/Contact.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\r\n    <h2>Learn Spanish!</h2>\r\n      <p>In partnership with</p>\r\n      <br>\r\n      <img src=\"http://static1.squarespace.com/static/5797c4d703596ef92b31b06d/t/58334a08c534a53840aaf1b8/1541568813202/?format=1500w\"alt=\"Meantime Logo\">\r\n\r\n        <br>\r\n        <br>\r\n        \r\n        <br>\r\n\r\n      \r\n        <h3>Contact information</h3>\r\n        <br>\r\n        Please contact us at FreyCherokeeAppSpring2019@gmail.com\r\n        <br>\r\n    \r\n        <ion-button shape=\"round\" color=\"medium\" size=\"large\" href=\"http://localhost:8100/tabs/Homepage\">Homepage</ion-button>\r\n        <br>\r\n      \r\n\r\n        \r\n        <br>\r\n        <br> \r\n        <a href=\"http://localhost:8100/tabs/About\">About the Project</a>       \r\n        <br>\r\n        \r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/Contact/Contact.page.scss":
/*!*******************************************!*\
  !*** ./src/app/Contact/Contact.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welcome-card ion-img {\n  max-height: 35vh;\n  overflow: hidden; }\n\nion-content {\n  --background: lightgoldenyellow;\n  background-color: #c3b091;\n  --color: white;\n  text-align: center;\n  font-family: arial, sans-serif; }\n\nh2 {\n  font-family: arial, sans-serif;\n  text-align: center;\n  background-color: #c3b091; }\n\np {\n  text-align: center;\n  font-family: arial, sans-serif; }\n\nh3 {\n  font-family: arial, sans-serif;\n  text-align: center;\n  background-color: #c3b091; }\n\n.oddRow {\n  width: 100%;\n  height: 100%;\n  background: #989aa2;\n  color: white;\n  border-color: black;\n  border-width: 20px;\n  text-align: center;\n  vertical-align: middle; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29udGFjdC9DOlxcVXNlcnNcXG1hdHRiZXplXFxEb2N1bWVudHNcXEdpdEh1YlxcRnJleUNoZXJva2VlQXBwL3NyY1xcYXBwXFxDb250YWN0XFxDb250YWN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0IsRUFBQTs7QUFHakI7RUFDQywrQkFBYTtFQUNiLHlCQUF5QjtFQUN6QixjQUFRO0VBQ1Isa0JBQWtCO0VBQ2xCLDhCQUE4QixFQUFBOztBQUdoQztFQUNFLDhCQUE4QjtFQUM5QixrQkFBa0I7RUFDbEIseUJBQXlCLEVBQUE7O0FBRTNCO0VBQ0Usa0JBQWtCO0VBQ2xCLDhCQUE4QixFQUFBOztBQUVoQztFQUNFLDhCQUE4QjtFQUM5QixrQkFBa0I7RUFDbEIseUJBQXlCLEVBQUE7O0FBRTNCO0VBQ0UsV0FBVTtFQUNWLFlBQVc7RUFDWCxtQkFBa0I7RUFDbEIsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLHNCQUFzQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvQ29udGFjdC9Db250YWN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53ZWxjb21lLWNhcmQgaW9uLWltZyB7XHJcbiAgbWF4LWhlaWdodDogMzV2aDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4gaW9uLWNvbnRlbnQge1xyXG4gIC0tYmFja2dyb3VuZDogbGlnaHRnb2xkZW55ZWxsb3c7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2MzYjA5MTtcclxuICAtLWNvbG9yOiB3aGl0ZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1mYW1pbHk6IGFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gXHJcbn1cclxuaDIge1xyXG4gIGZvbnQtZmFtaWx5OiBhcmlhbCwgc2Fucy1zZXJpZjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2MzYjA5MTtcclxufVxyXG5wIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1mYW1pbHk6IGFyaWFsLCBzYW5zLXNlcmlmO1xyXG59XHJcbmgzIHtcclxuICBmb250LWZhbWlseTogYXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNjM2IwOTE7XHJcbn1cclxuLm9kZFJvd3tcclxuICB3aWR0aDoxMDAlO1xyXG4gIGhlaWdodDoxMDAlO1xyXG4gIGJhY2tncm91bmQ6Izk4OWFhMjtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyLWNvbG9yOiBibGFjaztcclxuICBib3JkZXItd2lkdGg6IDIwcHg7ICBcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTsgXHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/Contact/Contact.page.ts":
/*!*****************************************!*\
  !*** ./src/app/Contact/Contact.page.ts ***!
  \*****************************************/
/*! exports provided: ContactPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactPage", function() { return ContactPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ContactPage = /** @class */ (function () {
    function ContactPage() {
    }
    ContactPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-Contact',
            template: __webpack_require__(/*! ./Contact.page.html */ "./src/app/Contact/Contact.page.html"),
            styles: [__webpack_require__(/*! ./Contact.page.scss */ "./src/app/Contact/Contact.page.scss")]
        })
    ], ContactPage);
    return ContactPage;
}());



/***/ })

}]);
//# sourceMappingURL=Contact-Contact-module.js.map