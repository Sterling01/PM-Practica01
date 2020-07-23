function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["lista-empleos-lista-empleos-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/calls/calls.component.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/calls/calls.component.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsCallsCallsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-button size=\"small\" (click)=\"llamar()\">\r\n    <ion-icon name=\"call-outline\"></ion-icon> \r\n</ion-button>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/lista-empleos/lista-empleos.page.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/lista-empleos/lista-empleos.page.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppListaEmpleosListaEmpleosPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title>\n      Hoja de Vida\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<!-- <ion-content fullscreen *ngIf=\"usuario\"> -->\n<ion-content fullscreen>\n  <h5>Inicio sesion:</h5>\n  <ion-list>\n    <ion-list-header>Empleos</ion-list-header>\n\n    <ion-item *ngFor=\"let empleo of empleados | async; trackBy: trackByFN\">\n      <ion-avatar slot=\"start\">\n        <img src=\"../../assets/images/Pinscher.jpg\" />\n      </ion-avatar>\n      <ion-label (click)='showEmpleo(empleo.uid)'>\n        <h2>{{empleo.titulo}}</h2>\n        <h3>{{empleo.descripcion}}</h3>\n        <p [class]=\"empleo.salario>450?'salario-alto':''\">{{empleo.salario}}</p>\n        <h5>{{empleo.telefono}}</h5>\n      </ion-label>\n      <app-calls [numero]=\"empleo.telefono\"> </app-calls>\n      <!--<app-image-upload [icon]=\"'camera'\" [type]=\"'camera'\" (uploadFinished)=\"imagenCargada($event)\"></app-image-upload> -->\n      <!--<ion-button expand=\"block\" type=\"submit\" class=\"ion-no-margin\" (click)='llamar(empleo.telefono)'>Llamar</ion-button>-->\n    </ion-item>  \n\n  </ion-list>\n\n  <ion-list>\n    <ion-list-header>\n      Empleos\n    </ion-list-header>\n\n    <ion-item *ngFor=\"let empleo of empleados2\">\n      <ion-avatar slot=\"start\">\n        <img src=\"../../assets/images/Pinscher.jpg\" />\n      </ion-avatar>\n      <ion-label (click)='showEmpleo(empleo.uid)'>\n        <h2>{{empleo.titulo}}</h2>\n        <h3>{{empleo.descripcion}}</h3>\n        <p [class]=\"empleo.class\">{{empleo.salario}}</p>\n        <p>{{empleo.iess}}</p>\n      </ion-label>\n    </ion-item>  \n\n  </ion-list>\n\n  <ion-list>\n    <ion-list-header>Cosas</ion-list-header>\n\n    <ion-item *ngFor=\"let cosa of cosas\">\n      <ion-label>\n        <h2>{{cosa.id}}</h2>\n        <h3>{{cosa.nombre}}</h3>\n      </ion-label>\n    </ion-item>  \n\n  </ion-list>\n\n\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button (click)=\"showCrearEmpleo()\">\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>\n\n   \n";
    /***/
  },

  /***/
  "./src/app/components/calls/calls.component.scss":
  /*!*******************************************************!*\
    !*** ./src/app/components/calls/calls.component.scss ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsCallsCallsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2FsbHMvY2FsbHMuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/components/calls/calls.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/components/calls/calls.component.ts ***!
    \*****************************************************/

  /*! exports provided: CallsComponent */

  /***/
  function srcAppComponentsCallsCallsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CallsComponent", function () {
      return CallsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic-native/call-number/ngx */
    "./node_modules/@ionic-native/call-number/ngx/index.js");

    var CallsComponent = /*#__PURE__*/function () {
      function CallsComponent(callNumber) {
        _classCallCheck(this, CallsComponent);

        this.callNumber = callNumber;
      }

      _createClass(CallsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "llamar",
        value: function llamar() {
          this.callNumber.callNumber(this.numero, true); //console.log(this.numero)
        }
      }]);

      return CallsComponent;
    }();

    CallsComponent.ctorParameters = function () {
      return [{
        type: _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_2__["CallNumber"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], CallsComponent.prototype, "numero", void 0);
    CallsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-calls',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./calls.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/calls/calls.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./calls.component.scss */
      "./src/app/components/calls/calls.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_2__["CallNumber"]])], CallsComponent);
    /***/
  },

  /***/
  "./src/app/lista-empleos/lista-empleos-routing.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/lista-empleos/lista-empleos-routing.module.ts ***!
    \***************************************************************/

  /*! exports provided: ListaEmpleosPageRoutingModule */

  /***/
  function srcAppListaEmpleosListaEmpleosRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ListaEmpleosPageRoutingModule", function () {
      return ListaEmpleosPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _lista_empleos_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./lista-empleos.page */
    "./src/app/lista-empleos/lista-empleos.page.ts");

    var routes = [{
      path: '',
      component: _lista_empleos_page__WEBPACK_IMPORTED_MODULE_3__["ListaEmpleosPage"]
    }];

    var ListaEmpleosPageRoutingModule = function ListaEmpleosPageRoutingModule() {
      _classCallCheck(this, ListaEmpleosPageRoutingModule);
    };

    ListaEmpleosPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ListaEmpleosPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/lista-empleos/lista-empleos.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/lista-empleos/lista-empleos.module.ts ***!
    \*******************************************************/

  /*! exports provided: ListaEmpleosPageModule */

  /***/
  function srcAppListaEmpleosListaEmpleosModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ListaEmpleosPageModule", function () {
      return ListaEmpleosPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _lista_empleos_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./lista-empleos-routing.module */
    "./src/app/lista-empleos/lista-empleos-routing.module.ts");
    /* harmony import */


    var _lista_empleos_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./lista-empleos.page */
    "./src/app/lista-empleos/lista-empleos.page.ts");
    /* harmony import */


    var _components_calls_calls_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../components/calls/calls.component */
    "./src/app/components/calls/calls.component.ts");

    var ListaEmpleosPageModule = function ListaEmpleosPageModule() {
      _classCallCheck(this, ListaEmpleosPageModule);
    };

    ListaEmpleosPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _lista_empleos_routing_module__WEBPACK_IMPORTED_MODULE_5__["ListaEmpleosPageRoutingModule"]],
      declarations: [_lista_empleos_page__WEBPACK_IMPORTED_MODULE_6__["ListaEmpleosPage"], _components_calls_calls_component__WEBPACK_IMPORTED_MODULE_7__["CallsComponent"]],
      exports: [_components_calls_calls_component__WEBPACK_IMPORTED_MODULE_7__["CallsComponent"]]
    })], ListaEmpleosPageModule);
    /***/
  },

  /***/
  "./src/app/lista-empleos/lista-empleos.page.scss":
  /*!*******************************************************!*\
    !*** ./src/app/lista-empleos/lista-empleos.page.scss ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppListaEmpleosListaEmpleosPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-label h2 {\n  color: darkcyan;\n}\n\n.salario-alto {\n  background-color: red;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGlzdGEtZW1wbGVvcy9EOlxcc3RhbGlcXERvY3VtZW50c1xcVVBTOFxcUGxhdGFmb3JtYXMgTW92aWxlc1xcUHJhY3RpY2FzXFxIb2phLWRlLVZpZGEtSW9uaWMvc3JjXFxhcHBcXGxpc3RhLWVtcGxlb3NcXGxpc3RhLWVtcGxlb3MucGFnZS5zY3NzIiwic3JjL2FwcC9saXN0YS1lbXBsZW9zL2xpc3RhLWVtcGxlb3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksZUFBQTtBQ0FSOztBRElBO0VBQ0kscUJBQUE7RUFDQSxZQUFBO0FDREoiLCJmaWxlIjoic3JjL2FwcC9saXN0YS1lbXBsZW9zL2xpc3RhLWVtcGxlb3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWxhYmVse1xyXG4gICAgaDJ7XHJcbiAgICAgICAgY29sb3I6IGRhcmtjeWFuO1xyXG4gICAgfVxyXG59XHJcblxyXG4uc2FsYXJpby1hbHRve1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59IiwiaW9uLWxhYmVsIGgyIHtcbiAgY29sb3I6IGRhcmtjeWFuO1xufVxuXG4uc2FsYXJpby1hbHRvIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICBjb2xvcjogd2hpdGU7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/lista-empleos/lista-empleos.page.ts":
  /*!*****************************************************!*\
    !*** ./src/app/lista-empleos/lista-empleos.page.ts ***!
    \*****************************************************/

  /*! exports provided: ListaEmpleosPage */

  /***/
  function srcAppListaEmpleosListaEmpleosPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ListaEmpleosPage", function () {
      return ListaEmpleosPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _shared_services_empleos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../shared/services/empleos.service */
    "./src/app/shared/services/empleos.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../shared/services/auth.service */
    "./src/app/shared/services/auth.service.ts");
    /* harmony import */


    var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/call-number/ngx */
    "./node_modules/@ionic-native/call-number/ngx/index.js");

    var ListaEmpleosPage = /*#__PURE__*/function () {
      function ListaEmpleosPage(empleosService, router, auth, callNumber) {
        _classCallCheck(this, ListaEmpleosPage);

        this.empleosService = empleosService;
        this.router = router;
        this.auth = auth;
        this.callNumber = callNumber;
        this.cosas = new Array();
      }

      _createClass(ListaEmpleosPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.empleados = this.empleosService.getEmpleos();
          this.cosas.push({
            id: 10,
            nombre: "Stalin F"
          }); //Obtener datos usuario
          //this.auth.user.subscribe(data =>{
          //this.usuario=data;
          //});

          this.empleados.subscribe(function (data) {
            var _iterator = _createForOfIteratorHelper(data),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var aux = _step.value;
                aux.iess = aux.salario * 0.095;
                if (aux.salario > 200) aux["class"] = "salario-alto";else aux["class"] = '';
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            _this.empleados2 = data;
          });
        }
      }, {
        key: "llamar",
        value: function llamar(numero) {
          //console.log(numero)
          this.callNumber.callNumber(numero, true);
        }
      }, {
        key: "showEmpleo",
        value: function showEmpleo(id) {
          this.router.navigate(["empleo/".concat(id)]);
        }
      }, {
        key: "showCrearEmpleo",
        value: function showCrearEmpleo() {
          this.router.navigate(['/crear-empleo']);
        }
      }, {
        key: "trackByFn",
        value: function trackByFn(index, obj) {
          return obj.uid;
        }
      }]);

      return ListaEmpleosPage;
    }();

    ListaEmpleosPage.ctorParameters = function () {
      return [{
        type: _shared_services_empleos_service__WEBPACK_IMPORTED_MODULE_2__["EmpleosService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
      }, {
        type: _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_5__["CallNumber"]
      }];
    };

    ListaEmpleosPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-lista-empleos',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./lista-empleos.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/lista-empleos/lista-empleos.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./lista-empleos.page.scss */
      "./src/app/lista-empleos/lista-empleos.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_empleos_service__WEBPACK_IMPORTED_MODULE_2__["EmpleosService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_5__["CallNumber"]])], ListaEmpleosPage);
    /***/
  }
}]);
//# sourceMappingURL=lista-empleos-lista-empleos-module-es5.js.map