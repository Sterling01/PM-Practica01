(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["empleo-empleo-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/empleo/empleo.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/empleo/empleo.page.html ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>empleo</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content fullscreen *ngIf=\"(empleo | async) as empleo\">\r\n  <ion-card>\r\n    <ion-card-header>\r\n      <ion-card-subtitle>Empleo</ion-card-subtitle>\r\n      <ion-card-title>{{empleo.titulo}}</ion-card-title>\r\n    </ion-card-header>\r\n    <ion-card-content>\r\n      {{empleo.descripcion}}\r\n    </ion-card-content>\r\n    \r\n  </ion-card>\r\n\r\n  <ion-card>\r\n    <ion-card-header>\r\n      <ion-card-title>Información extra</ion-card-title>\r\n    </ion-card-header>\r\n    <div class=\"vertical-center\">\r\n    <img [src]=\"empleo.image.url\" width=\"200\" height=\"298\"/>\r\n    </div>\r\n  </ion-card>\r\n\r\n  <div class=\"ion-padding\">\r\n    <ion-button expand=\"block\" type=\"submit\" class=\"ion-no-margin\" (click)=\"showEditarEmpleo(empleo.uid)\">Editar</ion-button>\r\n  </div>\r\n</ion-content>\r\n");

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
/* harmony default export */ __webpack_exports__["default"] = (".vertical-center {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW1wbGVvL0Q6XFxVc2Vyc1xcSm9obiBIZW5yeVxcRG9jdW1lbnRzXFxQbGF0YWZvcm1hcyBNb3ZpbGVzXFxTZXJ2aWNpb3NcXFBNLVByYWN0aWNhMDEvc3JjXFxhcHBcXGVtcGxlb1xcZW1wbGVvLnBhZ2Uuc2NzcyIsInNyYy9hcHAvZW1wbGVvL2VtcGxlby5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBa0IsYUFBQTtFQUFlLG1CQUFBO0VBQXFCLHVCQUFBO0VBQXlCLFlBQUE7QUNLL0UiLCJmaWxlIjoic3JjL2FwcC9lbXBsZW8vZW1wbGVvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi52ZXJ0aWNhbC1jZW50ZXJ7IGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGp1c3RpZnktY29udGVudDogY2VudGVyOyBoZWlnaHQ6IDEwMCU7IH0iLCIudmVydGljYWwtY2VudGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGhlaWdodDogMTAwJTtcbn0iXX0= */");

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