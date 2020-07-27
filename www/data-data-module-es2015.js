(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["data-data-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/data/data.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/data/data.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Experiencia Laboral</ion-title>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-header collapse=\"condense\">\r\n    <ion-toolbar>\r\n      <ion-title size=\"large\">Experiencia Laboral</ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n  <ion-item>\r\n    <ion-label position=\"floating\">Cargo</ion-label>\r\n    <ion-input [(ngModel)]=\"trabajo.cargo\"></ion-input>\r\n  </ion-item>\r\n\r\n  <ion-item>\r\n    <ion-label position=\"floating\">Funciones desempeñadas</ion-label>\r\n    <ion-input [(ngModel)]=\"trabajo.funciones\"></ion-input>\r\n  </ion-item>\r\n\r\n  <ion-item>\r\n    <ion-label position=\"floating\">Tiempo</ion-label>\r\n    <ion-input [(ngModel)]=\"trabajo.tiempo\"></ion-input>\r\n  </ion-item>\r\n\r\n  <ion-button color=\"primary\" (click)=\"siguiente()\">Siguiente</ion-button>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/data/data-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/data/data-routing.module.ts ***!
  \*********************************************/
/*! exports provided: DataPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataPageRoutingModule", function() { return DataPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _data_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data.page */ "./src/app/data/data.page.ts");




const routes = [
    {
        path: '',
        component: _data_page__WEBPACK_IMPORTED_MODULE_3__["DataPage"]
    }
];
let DataPageRoutingModule = class DataPageRoutingModule {
};
DataPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DataPageRoutingModule);



/***/ }),

/***/ "./src/app/data/data.module.ts":
/*!*************************************!*\
  !*** ./src/app/data/data.module.ts ***!
  \*************************************/
/*! exports provided: DataPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataPageModule", function() { return DataPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _data_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./data-routing.module */ "./src/app/data/data-routing.module.ts");
/* harmony import */ var _data_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./data.page */ "./src/app/data/data.page.ts");







let DataPageModule = class DataPageModule {
};
DataPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _data_routing_module__WEBPACK_IMPORTED_MODULE_5__["DataPageRoutingModule"]
        ],
        declarations: [_data_page__WEBPACK_IMPORTED_MODULE_6__["DataPage"]]
    })
], DataPageModule);



/***/ }),

/***/ "./src/app/data/data.page.scss":
/*!*************************************!*\
  !*** ./src/app/data/data.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RhdGEvZGF0YS5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/data/data.page.ts":
/*!***********************************!*\
  !*** ./src/app/data/data.page.ts ***!
  \***********************************/
/*! exports provided: DataPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataPage", function() { return DataPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let DataPage = class DataPage {
    constructor(route, router) {
        this.route = route;
        this.router = router;
        this.trabajo = {
            cargo: '',
            funciones: '',
            tiempo: ''
        };
    }
    ngOnInit() {
        this.route.queryParams.subscribe(params => {
            if (this.router.getCurrentNavigation().extras.state) {
                this.person = this.router.getCurrentNavigation().extras.state.person;
            }
        });
    }
    siguiente() {
        let extras = {
            state: {
                person: this.person,
                trabajo: this.trabajo
            }
        };
        this.router.navigate(['estudio'], extras);
    }
};
DataPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
DataPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-data',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./data.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/data/data.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./data.page.scss */ "./src/app/data/data.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], DataPage);



/***/ })

}]);
//# sourceMappingURL=data-data-module-es2015.js.map