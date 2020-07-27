(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["lista-empleos-lista-empleos-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/calls/calls.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/calls/calls.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-button size=\"small\" (click)=\"llamar()\">\r\n    <ion-icon name=\"call-outline\"></ion-icon> \r\n</ion-button>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/lista-empleos/lista-empleos.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/lista-empleos/lista-empleos.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\r\n  <ion-toolbar>\r\n    <ion-title>\r\n      Hoja de Vida\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<!-- <ion-content fullscreen *ngIf=\"usuario\"> -->\r\n<ion-content fullscreen>\r\n  <h5>Inicio sesion:</h5>\r\n  <ion-list>\r\n    <ion-list-header>Empleos</ion-list-header>\r\n\r\n    <ion-item *ngFor=\"let empleo of empleados | async; trackBy: trackByFN\">\r\n      <ion-avatar slot=\"start\">\r\n        <img src=\"../../assets/images/Pinscher.jpg\" />\r\n      </ion-avatar>\r\n      <ion-label (click)='showEmpleo(empleo.uid)'>\r\n        <h2>{{empleo.titulo}}</h2>\r\n        <h3>{{empleo.descripcion}}</h3>\r\n        <p [class]=\"empleo.salario>450?'salario-alto':''\">{{empleo.salario}}</p>\r\n        <h5>{{empleo.telefono}}</h5>\r\n      </ion-label>\r\n      <app-calls [numero]=\"empleo.telefono\"> </app-calls>\r\n      <!--<app-image-upload [icon]=\"'camera'\" [type]=\"'camera'\" (uploadFinished)=\"imagenCargada($event)\"></app-image-upload> -->\r\n      <!--<ion-button expand=\"block\" type=\"submit\" class=\"ion-no-margin\" (click)='llamar(empleo.telefono)'>Llamar</ion-button>-->\r\n    </ion-item>  \r\n\r\n  </ion-list>\r\n\r\n  <ion-list>\r\n    <ion-list-header>\r\n      Empleos\r\n    </ion-list-header>\r\n\r\n    <ion-item *ngFor=\"let empleo of empleados2\">\r\n      <ion-avatar slot=\"start\">\r\n        <img src=\"../../assets/images/Pinscher.jpg\" />\r\n      </ion-avatar>\r\n      <ion-label (click)='showEmpleo(empleo.uid)'>\r\n        <h2>{{empleo.titulo}}</h2>\r\n        <h3>{{empleo.descripcion}}</h3>\r\n        <p [class]=\"empleo.class\">{{empleo.salario}}</p>\r\n        <p>{{empleo.iess}}</p>\r\n      </ion-label>\r\n    </ion-item>  \r\n\r\n  </ion-list>\r\n\r\n  <ion-list>\r\n    <ion-list-header>Cosas</ion-list-header>\r\n\r\n    <ion-item *ngFor=\"let cosa of cosas\">\r\n      <ion-label>\r\n        <h2>{{cosa.id}}</h2>\r\n        <h3>{{cosa.nombre}}</h3>\r\n      </ion-label>\r\n    </ion-item>  \r\n\r\n  </ion-list>\r\n\r\n\r\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\r\n    <ion-fab-button (click)=\"showCrearEmpleo()\">\r\n      <ion-icon name=\"add\"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab>\r\n</ion-content>\r\n\r\n   \r\n");

/***/ }),

/***/ "./src/app/components/calls/calls.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/components/calls/calls.component.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2FsbHMvY2FsbHMuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/components/calls/calls.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/calls/calls.component.ts ***!
  \*****************************************************/
/*! exports provided: CallsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CallsComponent", function() { return CallsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/call-number/ngx */ "./node_modules/@ionic-native/call-number/ngx/index.js");



let CallsComponent = class CallsComponent {
    constructor(callNumber) {
        this.callNumber = callNumber;
    }
    ngOnInit() { }
    llamar() {
        this.callNumber.callNumber(this.numero, true);
        //console.log(this.numero)
    }
};
CallsComponent.ctorParameters = () => [
    { type: _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_2__["CallNumber"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], CallsComponent.prototype, "numero", void 0);
CallsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-calls',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./calls.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/calls/calls.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./calls.component.scss */ "./src/app/components/calls/calls.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_2__["CallNumber"]])
], CallsComponent);



/***/ }),

/***/ "./src/app/lista-empleos/lista-empleos-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/lista-empleos/lista-empleos-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: ListaEmpleosPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListaEmpleosPageRoutingModule", function() { return ListaEmpleosPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _lista_empleos_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lista-empleos.page */ "./src/app/lista-empleos/lista-empleos.page.ts");




const routes = [
    {
        path: '',
        component: _lista_empleos_page__WEBPACK_IMPORTED_MODULE_3__["ListaEmpleosPage"]
    }
];
let ListaEmpleosPageRoutingModule = class ListaEmpleosPageRoutingModule {
};
ListaEmpleosPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], ListaEmpleosPageRoutingModule);



/***/ }),

/***/ "./src/app/lista-empleos/lista-empleos.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/lista-empleos/lista-empleos.module.ts ***!
  \*******************************************************/
/*! exports provided: ListaEmpleosPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListaEmpleosPageModule", function() { return ListaEmpleosPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _lista_empleos_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lista-empleos-routing.module */ "./src/app/lista-empleos/lista-empleos-routing.module.ts");
/* harmony import */ var _lista_empleos_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lista-empleos.page */ "./src/app/lista-empleos/lista-empleos.page.ts");
/* harmony import */ var _components_calls_calls_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/calls/calls.component */ "./src/app/components/calls/calls.component.ts");








let ListaEmpleosPageModule = class ListaEmpleosPageModule {
};
ListaEmpleosPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _lista_empleos_routing_module__WEBPACK_IMPORTED_MODULE_5__["ListaEmpleosPageRoutingModule"]
        ],
        declarations: [_lista_empleos_page__WEBPACK_IMPORTED_MODULE_6__["ListaEmpleosPage"], _components_calls_calls_component__WEBPACK_IMPORTED_MODULE_7__["CallsComponent"]],
        exports: [_components_calls_calls_component__WEBPACK_IMPORTED_MODULE_7__["CallsComponent"]]
    })
], ListaEmpleosPageModule);



/***/ }),

/***/ "./src/app/lista-empleos/lista-empleos.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/lista-empleos/lista-empleos.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-label h2 {\n  color: darkcyan;\n}\n\n.salario-alto {\n  background-color: red;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGlzdGEtZW1wbGVvcy9EOlxcVXNlcnNcXEpvaG4gSGVucnlcXERvY3VtZW50c1xcUGxhdGFmb3JtYXMgTW92aWxlc1xcU2VydmljaW9zXFxQTS1QcmFjdGljYTAxL3NyY1xcYXBwXFxsaXN0YS1lbXBsZW9zXFxsaXN0YS1lbXBsZW9zLnBhZ2Uuc2NzcyIsInNyYy9hcHAvbGlzdGEtZW1wbGVvcy9saXN0YS1lbXBsZW9zLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLGVBQUE7QUNBUjs7QURJQTtFQUNJLHFCQUFBO0VBQ0EsWUFBQTtBQ0RKIiwiZmlsZSI6InNyYy9hcHAvbGlzdGEtZW1wbGVvcy9saXN0YS1lbXBsZW9zLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1sYWJlbHtcclxuICAgIGgye1xyXG4gICAgICAgIGNvbG9yOiBkYXJrY3lhbjtcclxuICAgIH1cclxufVxyXG5cclxuLnNhbGFyaW8tYWx0b3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufSIsImlvbi1sYWJlbCBoMiB7XG4gIGNvbG9yOiBkYXJrY3lhbjtcbn1cblxuLnNhbGFyaW8tYWx0byB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgY29sb3I6IHdoaXRlO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/lista-empleos/lista-empleos.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/lista-empleos/lista-empleos.page.ts ***!
  \*****************************************************/
/*! exports provided: ListaEmpleosPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListaEmpleosPage", function() { return ListaEmpleosPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_services_empleos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/services/empleos.service */ "./src/app/shared/services/empleos.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/services/auth.service */ "./src/app/shared/services/auth.service.ts");
/* harmony import */ var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/call-number/ngx */ "./node_modules/@ionic-native/call-number/ngx/index.js");






let ListaEmpleosPage = class ListaEmpleosPage {
    constructor(empleosService, router, auth, callNumber) {
        this.empleosService = empleosService;
        this.router = router;
        this.auth = auth;
        this.callNumber = callNumber;
        this.cosas = new Array();
    }
    ngOnInit() {
        this.empleados = this.empleosService.getEmpleos();
        this.cosas.push({ id: 10, nombre: "Stalin F" });
        //Obtener datos usuario
        //this.auth.user.subscribe(data =>{
        //this.usuario=data;
        //});
        this.empleados.subscribe(data => {
            for (let aux of data) {
                aux.iess = aux.salario * 0.095;
                if (aux.salario > 200)
                    aux.class = "salario-alto";
                else
                    aux.class = '';
            }
            this.empleados2 = data;
        });
    }
    llamar(numero) {
        //console.log(numero)
        this.callNumber.callNumber(numero, true);
    }
    showEmpleo(id) {
        this.router.navigate([`empleo/${id}`]);
    }
    showCrearEmpleo() {
        this.router.navigate(['/crear-empleo']);
    }
    trackByFn(index, obj) {
        return obj.uid;
    }
};
ListaEmpleosPage.ctorParameters = () => [
    { type: _shared_services_empleos_service__WEBPACK_IMPORTED_MODULE_2__["EmpleosService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_5__["CallNumber"] }
];
ListaEmpleosPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-lista-empleos',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./lista-empleos.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/lista-empleos/lista-empleos.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./lista-empleos.page.scss */ "./src/app/lista-empleos/lista-empleos.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_empleos_service__WEBPACK_IMPORTED_MODULE_2__["EmpleosService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_5__["CallNumber"]])
], ListaEmpleosPage);



/***/ })

}]);
//# sourceMappingURL=lista-empleos-lista-empleos-module-es2015.js.map