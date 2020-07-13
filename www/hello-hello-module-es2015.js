(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["hello-hello-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/hello/hello.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/hello/hello.page.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>hello</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <h1>Saludar a{{id}}</h1>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/hello/hello-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/hello/hello-routing.module.ts ***!
  \***********************************************/
/*! exports provided: HelloPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelloPageRoutingModule", function() { return HelloPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _hello_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hello.page */ "./src/app/hello/hello.page.ts");




const routes = [
    {
        path: '',
        component: _hello_page__WEBPACK_IMPORTED_MODULE_3__["HelloPage"]
    },
    {
        path: 'title',
        loadChildren: () => __webpack_require__.e(/*! import() | title-title-module */ "title-title-module").then(__webpack_require__.bind(null, /*! ./title/title.module */ "./src/app/hello/title/title.module.ts")).then(m => m.TitlePageModule)
    }
];
let HelloPageRoutingModule = class HelloPageRoutingModule {
};
HelloPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], HelloPageRoutingModule);



/***/ }),

/***/ "./src/app/hello/hello.module.ts":
/*!***************************************!*\
  !*** ./src/app/hello/hello.module.ts ***!
  \***************************************/
/*! exports provided: HelloPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelloPageModule", function() { return HelloPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _hello_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hello-routing.module */ "./src/app/hello/hello-routing.module.ts");
/* harmony import */ var _hello_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./hello.page */ "./src/app/hello/hello.page.ts");







let HelloPageModule = class HelloPageModule {
};
HelloPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _hello_routing_module__WEBPACK_IMPORTED_MODULE_5__["HelloPageRoutingModule"]
        ],
        declarations: [_hello_page__WEBPACK_IMPORTED_MODULE_6__["HelloPage"]]
    })
], HelloPageModule);



/***/ }),

/***/ "./src/app/hello/hello.page.scss":
/*!***************************************!*\
  !*** ./src/app/hello/hello.page.scss ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlbGxvL2hlbGxvLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/hello/hello.page.ts":
/*!*************************************!*\
  !*** ./src/app/hello/hello.page.ts ***!
  \*************************************/
/*! exports provided: HelloPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelloPage", function() { return HelloPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let HelloPage = class HelloPage {
    constructor(route) {
        this.route = route;
        this.id = "";
    }
    ngOnInit() {
        this.id = this.route.snapshot.paramMap.get('id');
        console.log(this.id);
        //let id = this.route.params.;
        const texto = "Datos";
    }
};
HelloPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
HelloPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-hello',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./hello.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/hello/hello.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./hello.page.scss */ "./src/app/hello/hello.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
], HelloPage);



/***/ })

}]);
//# sourceMappingURL=hello-hello-module-es2015.js.map