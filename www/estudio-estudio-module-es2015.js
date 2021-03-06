(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["estudio-estudio-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/estudio/estudio.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/estudio/estudio.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Estudio</ion-title>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-header collapse=\"condense\">\r\n    <ion-toolbar>\r\n      <ion-title size=\"large\">Estudio</ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n\r\n  <ion-item>\r\n    <ion-label position=\"floating\">Titlo de 3er nivel</ion-label>\r\n    <ion-input [(ngModel)]=\"estudio.tituloTercer\"></ion-input>\r\n  </ion-item>\r\n\r\n  <ion-item>\r\n    <ion-label position=\"floating\">Titlo de 4to nivel</ion-label>\r\n    <ion-input [(ngModel)]=\"estudio.tituloCuarto\"></ion-input>\r\n  </ion-item>\r\n\r\n  <ion-button color=\"primary\" (click)=\"finalizar()\">Finalizar</ion-button>\r\n  \r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/estudio/estudio-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/estudio/estudio-routing.module.ts ***!
  \***************************************************/
/*! exports provided: EstudioPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EstudioPageRoutingModule", function() { return EstudioPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _estudio_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./estudio.page */ "./src/app/estudio/estudio.page.ts");




const routes = [
    {
        path: '',
        component: _estudio_page__WEBPACK_IMPORTED_MODULE_3__["EstudioPage"]
    }
];
let EstudioPageRoutingModule = class EstudioPageRoutingModule {
};
EstudioPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], EstudioPageRoutingModule);



/***/ }),

/***/ "./src/app/estudio/estudio.module.ts":
/*!*******************************************!*\
  !*** ./src/app/estudio/estudio.module.ts ***!
  \*******************************************/
/*! exports provided: EstudioPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EstudioPageModule", function() { return EstudioPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _estudio_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./estudio-routing.module */ "./src/app/estudio/estudio-routing.module.ts");
/* harmony import */ var _estudio_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./estudio.page */ "./src/app/estudio/estudio.page.ts");







let EstudioPageModule = class EstudioPageModule {
};
EstudioPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _estudio_routing_module__WEBPACK_IMPORTED_MODULE_5__["EstudioPageRoutingModule"]
        ],
        declarations: [_estudio_page__WEBPACK_IMPORTED_MODULE_6__["EstudioPage"]]
    })
], EstudioPageModule);



/***/ }),

/***/ "./src/app/estudio/estudio.page.scss":
/*!*******************************************!*\
  !*** ./src/app/estudio/estudio.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VzdHVkaW8vZXN0dWRpby5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/estudio/estudio.page.ts":
/*!*****************************************!*\
  !*** ./src/app/estudio/estudio.page.ts ***!
  \*****************************************/
/*! exports provided: EstudioPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EstudioPage", function() { return EstudioPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let EstudioPage = class EstudioPage {
    constructor(route, router) {
        this.route = route;
        this.router = router;
        this.estudio = {
            tituloTercer: '',
            titoloCuarto: ''
        };
    }
    ngOnInit() {
        this.route.queryParams.subscribe(params => {
            if (this.router.getCurrentNavigation().extras.state) {
                this.person = this.router.getCurrentNavigation().extras.state.person;
                this.trabajo = this.router.getCurrentNavigation().extras.state.trabajo;
            }
        });
    }
    finalizar() {
        let extras = {
            state: {
                person: this.person,
                trabajo: this.trabajo,
                estudio: this.estudio
            }
        };
        this.router.navigate(['presentacion'], extras);
    }
};
EstudioPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
EstudioPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-estudio',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./estudio.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/estudio/estudio.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./estudio.page.scss */ "./src/app/estudio/estudio.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], EstudioPage);



/***/ })

}]);
//# sourceMappingURL=estudio-estudio-module-es2015.js.map