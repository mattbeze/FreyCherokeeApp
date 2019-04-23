(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Feedback-Feedback-module"],{

/***/ "./src/app/Feedback/Feedback.module.ts":
/*!*********************************************!*\
  !*** ./src/app/Feedback/Feedback.module.ts ***!
  \*********************************************/
/*! exports provided: FeedbackPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedbackPageModule", function() { return FeedbackPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _Feedback_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Feedback.page */ "./src/app/Feedback/Feedback.page.ts");







var FeedbackPageModule = /** @class */ (function () {
    function FeedbackPageModule() {
    }
    FeedbackPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _Feedback_page__WEBPACK_IMPORTED_MODULE_6__["FeedbackPage"] }])
            ],
            declarations: [_Feedback_page__WEBPACK_IMPORTED_MODULE_6__["FeedbackPage"]]
        })
    ], FeedbackPageModule);
    return FeedbackPageModule;
}());



/***/ }),

/***/ "./src/app/Feedback/Feedback.page.html":
/*!*********************************************!*\
  !*** ./src/app/Feedback/Feedback.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\r\n        <h2>Learn Spanish!</h2>\r\n          <p>In partnership with</p>\r\n          <br>\r\n          <img src=\"http://static1.squarespace.com/static/5797c4d703596ef92b31b06d/t/58334a08c534a53840aaf1b8/1541568813202/?format=1500w\"alt=\"Meantime Logo\">\r\n    \r\n            <br>\r\n            <br>\r\n          \r\n            <h2>Please submit your feedback below</h2>\r\n            <br>\r\n            <form action=\"/action_page.php\">\r\n              Email: <input type=\"text\" name=\"email\" size=\"50\"><br>\r\n              Feedback: <input type=\"text\" name=\"Feedback\" size=\"50\"><br>\r\n              Can we contact you about your feedback?<br>\r\n              <ion-checkbox checked=\"true\"></ion-checkbox><br>\r\n              <input type=\"submit\" value=\"Submit\">\r\n            </form>\r\n            \r\n            <br>\r\n            <ion-button shape=\"round\" color=\"medium\" size=\"large\" href=\"http://localhost:8100/tabs/Homepage\">Homepage</ion-button>\r\n            <br>  \r\n\r\n            <br>\r\n            <br>\r\n            <a href=\"http://localhost:8100/tabs/Contact\">Contact us</a>  \r\n            <br>\r\n            <br> \r\n            <a href=\"http://localhost:8100/tabs/About\">About the Project</a>       \r\n            \r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/Feedback/Feedback.page.scss":
/*!*********************************************!*\
  !*** ./src/app/Feedback/Feedback.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welcome-card ion-img {\n  max-height: 35vh;\n  overflow: hidden; }\n\nion-content {\n  --background: lightgoldenyellow;\n  background-color: #c3b091;\n  --color: black;\n  text-align: center;\n  font-family: arial, sans-serif; }\n\nh2 {\n  font-family: arial, sans-serif;\n  text-align: center;\n  background-color: #c3b091;\n  --color: red; }\n\nform {\n  text-align: left;\n  --color: black; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRmVlZGJhY2svQzpcXFVzZXJzXFxtYXR0YmV6ZVxcRG9jdW1lbnRzXFxHaXRIdWJcXEZyZXlDaGVyb2tlZUFwcC9zcmNcXGFwcFxcRmVlZGJhY2tcXEZlZWRiYWNrLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFnQjtFQUNoQixnQkFBZ0IsRUFBQTs7QUFFbEI7RUFDRSwrQkFBYTtFQUNiLHlCQUF5QjtFQUN6QixjQUFRO0VBQ1Isa0JBQWtCO0VBQ2xCLDhCQUE4QixFQUFBOztBQUdoQztFQUNFLDhCQUE4QjtFQUM5QixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLFlBQVEsRUFBQTs7QUFFVjtFQUNFLGdCQUFnQjtFQUNoQixjQUFRLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9GZWVkYmFjay9GZWVkYmFjay5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud2VsY29tZS1jYXJkIGlvbi1pbWcge1xyXG4gICAgbWF4LWhlaWdodDogMzV2aDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgfVxyXG4gIGlvbi1jb250ZW50IHtcclxuICAgIC0tYmFja2dyb3VuZDogbGlnaHRnb2xkZW55ZWxsb3c7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzNiMDkxO1xyXG4gICAgLS1jb2xvcjogYmxhY2s7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LWZhbWlseTogYXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgIFxyXG4gIH1cclxuICBoMiB7XHJcbiAgICBmb250LWZhbWlseTogYXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzNiMDkxO1xyXG4gICAgLS1jb2xvcjogcmVkO1xyXG4gIH1cclxuICBmb3JtIHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAtLWNvbG9yOiBibGFjaztcclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/Feedback/Feedback.page.ts":
/*!*******************************************!*\
  !*** ./src/app/Feedback/Feedback.page.ts ***!
  \*******************************************/
/*! exports provided: FeedbackPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedbackPage", function() { return FeedbackPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FeedbackPage = /** @class */ (function () {
    function FeedbackPage() {
    }
    FeedbackPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-Feedback',
            template: __webpack_require__(/*! ./Feedback.page.html */ "./src/app/Feedback/Feedback.page.html"),
            styles: [__webpack_require__(/*! ./Feedback.page.scss */ "./src/app/Feedback/Feedback.page.scss")]
        })
    ], FeedbackPage);
    return FeedbackPage;
}());



/***/ })

}]);
//# sourceMappingURL=Feedback-Feedback-module.js.map