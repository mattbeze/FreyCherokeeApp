(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Order-Order-module"],{

/***/ "./src/app/Order/Order.module.ts":
/*!***************************************!*\
  !*** ./src/app/Order/Order.module.ts ***!
  \***************************************/
/*! exports provided: OrderPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderPageModule", function() { return OrderPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _Order_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Order.page */ "./src/app/Order/Order.page.ts");







var OrderPageModule = /** @class */ (function () {
    function OrderPageModule() {
    }
    OrderPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _Order_page__WEBPACK_IMPORTED_MODULE_6__["OrderPage"] }])
            ],
            declarations: [_Order_page__WEBPACK_IMPORTED_MODULE_6__["OrderPage"]]
        })
    ], OrderPageModule);
    return OrderPageModule;
}());



/***/ }),

/***/ "./src/app/Order/Order.page.html":
/*!***************************************!*\
  !*** ./src/app/Order/Order.page.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<ion-content>\r\n  <h2>Learn Spanish!</h2>\r\n      <p>In partnership with</p>\r\n      <br>\r\n      <img src=\"http://static1.squarespace.com/static/5797c4d703596ef92b31b06d/t/58334a08c534a53840aaf1b8/1541568813202/?format=1500w\"alt=\"Meantime Logo\">\r\n\r\n        <br>\r\n        <br>\r\n        Example Video\r\n        <br>\r\n        \r\n        <iframe width=\"350\" height=\"315\" src=\"https://www.youtube.com/embed/uwFtw_enWBc?start=5\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\r\n        <br>\r\n        <table>\r\n          <tr>\r\n            <th>Time Stamp</th>\r\n            <th>Phrase</th>\r\n          </tr>\r\n          <tr>\r\n            <td>0:04-0:07</td>\r\n            <td>¡Hola! ¿Como estás?</td>            \r\n          </tr>\r\n          <tr>\r\n            <td>0:07-0:11</td>\r\n            <td>¡Hola! Muy bien. Quería un cafe. </td>            \r\n          </tr>\r\n          <tr>\r\n            <td>0:11-0:12</td>\r\n            <td>¿Qué café querías?</td>            \r\n          </tr>\r\n          <tr>\r\n            <td>0:13-0:14</td>\r\n            <td>Un cortado.</td>            \r\n          </tr>\r\n          <tr>\r\n            <td>0:14-0:16</td>\r\n            <td>Un cortado. Bueno.</td>            \r\n          </tr>\r\n          <tr>\r\n            <td>0:20-0:21</td>\r\n            <td>¿Cuánto es?</td>            \r\n          </tr>\r\n          <tr>\r\n            <td>0:22-0:23</td>\r\n            <td>Cinco con cincuenta.</td>            \r\n          </tr>\r\n          <tr>\r\n            <td>0:23-0:24</td>\r\n            <td>Muchas gracias.</td>            \r\n          </tr>\r\n          <tr>\r\n            <td>0:24-0:25</td>\r\n            <td>Muchisimas de nada.</td>            \r\n          </tr>\r\n          <tr>\r\n            <td>0:25-0:26</td>\r\n            <td>¡Adiós!</td>            \r\n          </tr>\r\n          <tr>\r\n            <td>0:26-0:27</td>\r\n            <td>Ciao.</td>            \r\n          </tr>\r\n         </table>\r\n         <br>\r\n         Here we see someone ordering a coffee.\r\n         View the video again as necessary to gather the vocabulary needed to order.\r\n         <br>\r\n         <br>\r\n         When you're ready, take a look at the glossary for your own ordering needs, and rate your partner on their Spanish after ordering!\r\n\r\n\r\n        <br>\r\n        <ion-button shape=\"round\" color=\"medium\" size=\"large\" href=\"http://localhost:8100/tabs/Glossary\">Glossary</ion-button>\r\n        <ion-button shape=\"round\" color=\"medium\" size=\"large\" href=\"http://localhost:8100/tabs/Homepage\">Homepage</ion-button>\r\n        <br>\r\n        <!---<ion-button shape=\"round\" color=\"medium\" size=\"large\" href=\"http://localhost:8100/tabs/Rate\">Rate your Partner</ion-button>\r\n        -->\r\n        \r\n        <br>\r\n        <br>\r\n        <a href=\"http://localhost:8100/tabs/Contact\">Contact us</a>  \r\n        <br>\r\n        <br> \r\n        <a href=\"http://localhost:8100/tabs/About\">About the Project</a>       \r\n        <br>\r\n        <br>\r\n        \r\n        \r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/Order/Order.page.scss":
/*!***************************************!*\
  !*** ./src/app/Order/Order.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welcome-card ion-img {\n  max-height: 35vh;\n  overflow: scroll; }\n\ntable {\n  font-family: arial, sans-serif;\n  border-collapse: collapse;\n  width: 100%;\n  background-color: #989aa2; }\n\ntd {\n  border: 1px solid #000000;\n  text-align: center;\n  padding: 8px; }\n\ntr:nth-child(even) {\n  background-color: #989aa2; }\n\nh2 {\n  font-family: arial, sans-serif;\n  text-align: center;\n  background-color: #c3b091; }\n\nimg {\n  text-align: center;\n  background-color: #c3b091; }\n\np {\n  text-align: center;\n  background-color: #c3b091; }\n\nion-content {\n  --background: lightgoldenyellow;\n  background-color: #c3b091;\n  --color: white;\n  text-align: center;\n  font-family: arial, sans-serif; }\n\nbody {\n  background-color: #c3b091; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvT3JkZXIvQzpcXFVzZXJzXFxtYXR0YmV6ZVxcRG9jdW1lbnRzXFxHaXRIdWJcXEZyZXlDaGVyb2tlZUFwcC9zcmNcXGFwcFxcT3JkZXJcXE9yZGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFnQjtFQUNoQixnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSw4QkFBOEI7RUFDOUIseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCx5QkFBd0IsRUFBQTs7QUFHNUI7RUFDSSx5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLFlBQVksRUFBQTs7QUFHaEI7RUFDSSx5QkFBeUIsRUFBQTs7QUFHN0I7RUFDTSw4QkFBOEI7RUFDOUIsa0JBQWtCO0VBQ2xCLHlCQUF5QixFQUFBOztBQUcvQjtFQUNJLGtCQUFrQjtFQUNsQix5QkFBeUIsRUFBQTs7QUFHN0I7RUFDSSxrQkFBa0I7RUFDbEIseUJBQXlCLEVBQUE7O0FBRzdCO0VBQ0ksK0JBQWE7RUFDYix5QkFBeUI7RUFDekIsY0FBUTtFQUNSLGtCQUFrQjtFQUNsQiw4QkFBOEIsRUFBQTs7QUFHbEM7RUFDSSx5QkFBeUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL09yZGVyL09yZGVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53ZWxjb21lLWNhcmQgaW9uLWltZyB7XHJcbiAgICBtYXgtaGVpZ2h0OiAzNXZoO1xyXG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcclxuICB9XHJcblxyXG50YWJsZSB7XHJcbiAgICBmb250LWZhbWlseTogYXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiM5ODlhYTI7XHJcbiAgfVxyXG5cclxudGQge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzAwMDAwMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDhweDtcclxuICB9XHJcblxyXG50cjpudGgtY2hpbGQoZXZlbikge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzk4OWFhMjtcclxuICB9XHJcblxyXG5oMiB7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBhcmlhbCwgc2Fucy1zZXJpZjtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzNiMDkxO1xyXG4gIH1cclxuXHJcbmltZyB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzNiMDkxO1xyXG4gIH1cclxuXHJcbnAge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2MzYjA5MTtcclxuICB9XHJcblxyXG5pb24tY29udGVudCB7XHJcbiAgICAtLWJhY2tncm91bmQ6IGxpZ2h0Z29sZGVueWVsbG93O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2MzYjA5MTtcclxuICAgIC0tY29sb3I6IHdoaXRlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1mYW1pbHk6IGFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gICBcclxuICB9XHJcbmJvZHkge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2MzYjA5MTtcclxufVxyXG5cclxuICBcclxuIl19 */"

/***/ }),

/***/ "./src/app/Order/Order.page.ts":
/*!*************************************!*\
  !*** ./src/app/Order/Order.page.ts ***!
  \*************************************/
/*! exports provided: OrderPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderPage", function() { return OrderPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var OrderPage = /** @class */ (function () {
    function OrderPage() {
    }
    OrderPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-Order',
            template: __webpack_require__(/*! ./Order.page.html */ "./src/app/Order/Order.page.html"),
            styles: [__webpack_require__(/*! ./Order.page.scss */ "./src/app/Order/Order.page.scss")]
        })
    ], OrderPage);
    return OrderPage;
}());



/***/ })

}]);
//# sourceMappingURL=Order-Order-module.js.map