(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["empleo-empleo-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/empleo/empleo.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/empleo/empleo.page.html ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>empleo</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen *ngIf=\"(empleo | async) as empleo\">\n  <ion-card>\n    <ion-card-header>\n      <ion-card-subtitle>Empleo</ion-card-subtitle>\n      <ion-card-title>{{empleo.titulo}}</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      {{empleo.descripcion}}\n    </ion-card-content>\n    \n  </ion-card>\n\n  <ion-card>\n    <ion-card-header>\n      <ion-card-title>Información extra</ion-card-title>\n    </ion-card-header>\n    <div class=\"vertical-center\">\n    <img [src]=\"empleo.image.url\" width=\"200\" height=\"298\"/>\n    </div>\n  </ion-card>\n\n  <div class=\"ion-padding\">\n    <ion-button expand=\"block\" type=\"submit\" class=\"ion-no-margin\" (click)=\"showEditarEmpleo(empleo.uid)\">Editar</ion-button>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/empleo/empleo-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/empleo/empleo-routing.module.ts ***!
  \*************************************************/
/*! exports provided: EmpleoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmpleoPageRoutingModule", function() { return EmpleoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _empleo_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./empleo.page */ "./src/app/empleo/empleo.page.ts");




const routes = [
    {
        path: '',
        component: _empleo_page__WEBPACK_IMPORTED_MODULE_3__["EmpleoPage"]
    }
];
let EmpleoPageRoutingModule = class EmpleoPageRoutingModule {
};
EmpleoPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], EmpleoPageRoutingModule);



/***/ }),

/***/ "./src/app/empleo/empleo.module.ts":
/*!*****************************************!*\
  !*** ./src/app/empleo/empleo.module.ts ***!
  \*****************************************/
/*! exports provided: EmpleoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmpleoPageModule", function() { return EmpleoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _empleo_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./empleo-routing.module */ "./src/app/empleo/empleo-routing.module.ts");
/* harmony import */ var _empleo_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./empleo.page */ "./src/app/empleo/empleo.page.ts");







let EmpleoPageModule = class EmpleoPageModule {
};
EmpleoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _empleo_routing_module__WEBPACK_IMPORTED_MODULE_5__["EmpleoPageRoutingModule"]
        ],
        declarations: [_empleo_page__WEBPACK_IMPORTED_MODULE_6__["EmpleoPage"]]
    })
], EmpleoPageModule);



/***/ }),

/***/ "./src/app/empleo/empleo.page.scss":
/*!*****************************************!*\
  !*** ./src/app/empleo/empleo.page.scss ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".vertical-center {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW1wbGVvL0Q6XFxzdGFsaVxcRG9jdW1lbnRzXFxVUFM4XFxQbGF0YWZvcm1hcyBNb3ZpbGVzXFxQcmFjdGljYXNcXEhvamEtZGUtVmlkYS1Jb25pYy9zcmNcXGFwcFxcZW1wbGVvXFxlbXBsZW8ucGFnZS5zY3NzIiwic3JjL2FwcC9lbXBsZW8vZW1wbGVvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFrQixhQUFBO0VBQWUsbUJBQUE7RUFBcUIsdUJBQUE7RUFBeUIsWUFBQTtBQ0svRSIsImZpbGUiOiJzcmMvYXBwL2VtcGxlby9lbXBsZW8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnZlcnRpY2FsLWNlbnRlcnsgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IGhlaWdodDogMTAwJTsgfSIsIi52ZXJ0aWNhbC1jZW50ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgaGVpZ2h0OiAxMDAlO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/empleo/empleo.page.ts":
/*!***************************************!*\
  !*** ./src/app/empleo/empleo.page.ts ***!
  \***************************************/
/*! exports provided: EmpleoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmpleoPage", function() { return EmpleoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_services_empleos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/services/empleos.service */ "./src/app/shared/services/empleos.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let EmpleoPage = class EmpleoPage {
    constructor(empleosService, route, router) {
        this.empleosService = empleosService;
        this.route = route;
        this.router = router;
    }
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const id = this.route.snapshot.paramMap.get("id");
            this.empleo = this.empleosService.getEmpleo(id);
            console.log("Observable", this.empleo);
            this.empleo.subscribe(data => {
                console.log("Subscribe", data);
            });
            let auxEmpleado = yield this.empleosService.getEmpleoById2(id);
            console.log("Await", auxEmpleado.titulo);
            let telefonos = this.empleosService.getTelefonos(id);
            console.log("Telefonos", telefonos);
        });
    }
    //Para editar es mejor un await
    showEditarEmpleo(id) {
        this.router.navigate([`actualizar-empleo/${id}`]);
    }
};
EmpleoPage.ctorParameters = () => [
    { type: _shared_services_empleos_service__WEBPACK_IMPORTED_MODULE_2__["EmpleosService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
EmpleoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-empleo',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./empleo.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/empleo/empleo.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./empleo.page.scss */ "./src/app/empleo/empleo.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_empleos_service__WEBPACK_IMPORTED_MODULE_2__["EmpleosService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], EmpleoPage);



/***/ })

}]);
//# sourceMappingURL=empleo-empleo-module-es2015.js.map